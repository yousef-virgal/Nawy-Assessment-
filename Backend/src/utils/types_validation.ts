import { DEFAULT_DATE_REG_EXP } from "../constants";
import { ApartmentTypes, apartmentTypes, Amenities, amenitiesTypes } from "../modules/apartments/apartments_model";

export const isValidApartmentType = (input: any): input is ApartmentTypes => apartmentTypes.includes(input);

export const isValidAmenitiesType = (input: any): input is Amenities => amenitiesTypes.includes(input);

export const isValidAmenitiesInput = (input: any) => {
    if (!Array.isArray(input))
        return false;
    
    return input.every((element) => isValidAmenitiesType(element)); 
} 

/**
 * This Function is used to convert a date string to a date object and check if the date string is a valid one
 * that follows a certain regexp
 * @param date the date string to convert to an object
 * @param format the regexp to check if the date string follows
 * @returns a tuple that contains the result of the convertion and the date object if succfully converted
 */
export const getDateFromString = (date: string, format: RegExp = DEFAULT_DATE_REG_EXP) : [boolean, Date | null]=> {
    // check if the string matches the regexp
    if(!date.match(format))
        return [false, null];

    // convert the date string to a date object 
    const dateObject = new Date(date);
    // check if the date is valid one
    if(!dateObject.getTime() && dateObject.getTime() !== 0)
        return [false, null];

    //check that after convertion the date string matches the input
    if(dateObject.toISOString().slice(0,10) !== date)
        return [false, null];

    return [true, dateObject];
};

/**
 * This Function is used to check if the input is a postive intger number
 * @param input the input to check for
 * @returns a boolean indicating if the input was number or not
 */
export const isPostiveNumber = (input: unknown): boolean => {
    return typeof input === "number" && Number.isFinite(input) && Number(input) >= 0;
}
