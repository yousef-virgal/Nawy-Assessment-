export const apartmentTypes = ["Office", "Villa", "Apartment", "Studio"] as const;
export const amenitiesTypes = ["Bicycles Lanes", "Sports Clubs", "Underground Parking", "Clubhouse", "Business Hub"] as const;

export type ApartmentTypes = (typeof apartmentTypes)[number];
export type Amenities = (typeof amenitiesTypes)[number];

export interface ApartmentInterface {
    _id: string;
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
    logos: string;
};