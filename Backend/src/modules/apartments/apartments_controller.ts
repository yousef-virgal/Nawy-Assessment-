import { Request, Response } from "express";
import { isValidApartmentType, isPostiveNumber, getDateFromString, isValidAmenitiesInput } from "../../utils/types_validation";
import Apartment from "./apartments_model";

export const fetchApartments = async (req: Request, res: Response) => {
    const apartemnts = await Apartment.find();

    res.status(200).json(apartemnts);
}

export const fetchApartmentDetails = async (req: Request, res: Response) => {
    const id = req.params.id;

    const apartment = await Apartment.findById(id);

    if (apartment === null || apartment === undefined)
        return res.status(404).send("No Apartment was found by this ID");

    return res.status(200).json(apartment);
}

export const createApartment = async (req: Request, res: Response) => {
    const {apartmentType, location, size, numberOfBathrooms,
        numberOfBedrooms, price, amenities, downPayment, deliveryDate,
        instalmentPerMonth, description, logos } = req.body;
    
    if (!isValidApartmentType(apartmentType))
        return res.status(400).send("Apartment type is invalid");
    
    if(!isPostiveNumber(size))
        return res.status(400).send("Size has to be postive number");

    if(!isPostiveNumber(numberOfBathrooms) || !isPostiveNumber(numberOfBedrooms))
        return res.status(400).send("Number of rooms has to be postive number");
    
    if(!isPostiveNumber(price) || !isPostiveNumber(downPayment) || !isPostiveNumber(instalmentPerMonth))
        return res.status(400).send("Payments have to be a postie number");

    const [status, date] = getDateFromString(deliveryDate);

    if (!status)
        return res.status(400).send("Invalid Date");
    
    if (!isValidAmenitiesInput(amenities))
        return res.status(400).send("Invalid Amenities");
    
    const apartemnt = Apartment.build({
        amenities: amenities,
        apartment_type: apartmentType,
        delivery_date: date as Date,
        description: description,
        down_payment: downPayment,
        instalment_per_month: instalmentPerMonth,
        location: location,
        number_of_bathrooms: numberOfBathrooms,
        number_of_bedrooms: numberOfBedrooms,
        price: price,
        size: size,
        logos: logos
    });

    await apartemnt.save();

    res.status(201).json(apartemnt)
}