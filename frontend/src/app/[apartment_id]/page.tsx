import { ApartmentInterface } from "@/interfaces/apartments";

const DetailPage = async ({ params }: { params: { apartment_id: string } }) => {
    
    const apartment = await getApartment(params.apartment_id);

    return (
        <div style={{padding: "0 10px"}}>
            <img src={apartment.logos} alt="Apartment image" style={{width:"100%", height:"50vh", margin:"10px 0", objectFit:"cover"}}/>
            <h3>
                {apartment.apartment_type}
            </h3>
            <h5>
                {apartment.location}
            </h5>
            <h4>
                Details
            </h4>
            <p>
                {apartment.description}
            </p>
            <h4>
                Amenities
            </h4>
            <ul>
                {apartment.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}
            </ul>
        </div>
    );
}

const getApartment = async (id: string): Promise<ApartmentInterface> => {
    const res = await fetch(`${process.env.Backend_URL}/apartments/${id}`, { cache: "no-store" });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default DetailPage;