import {model, Model, Schema, Document} from "mongoose";

export const apartmentTypes = ["Office", "Villa", "Apartment", "Studio"] as const;
export const amenitiesTypes = ["Bicycles Lanes", "Sports Clubs", "Underground Parking", "Clubhouse", "Business Hub"] as const;

export type ApartmentTypes = (typeof apartmentTypes)[number];
export type Amenities = (typeof amenitiesTypes)[number];

export interface ApartmentInterface {
    apartment_type: ApartmentTypes;
    location: string;
    size: number;
    number_of_bathrooms: number;
    number_of_bedrooms: number;
    price: number;
    amenities: Amenities[];
    down_payment: number;
    delivery_date: Date;
    instalment_per_month: number;
    description: string;
};

export interface ApartmentDocInterface extends ApartmentInterface, Document {};

export interface ApartmentModelInterface extends Model<ApartmentDocInterface> {
    build(apartment: ApartmentInterface): ApartmentDocInterface
}

const apartmentSchema = new Schema({
    apartment_type: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    number_of_bedrooms: {
        type: Number,
        required: true
    },
    number_of_bathrooms: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amenities: {
        type: [String],
        required: false
    },
    down_payment: {
        type: Number,
        required: false,
    },
    delivery_date: {
        type: Date,
        required: true,
    },
    instalment_per_month: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
        required: false
    }
});

apartmentSchema.statics.build = (apartment: ApartmentInterface) => {
    return new Apartment(apartment);
}

const Apartment = model<ApartmentDocInterface, ApartmentModelInterface>("Apartment", apartmentSchema);

export default Apartment;
