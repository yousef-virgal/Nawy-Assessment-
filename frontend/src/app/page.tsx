import ApartmentCard from "./components/card_component/card_component";
import { ApartmentInterface } from "@/interfaces/apartments";
import { Container, Row, Col } from "react-bootstrap";

export default async function Home() {
  const apartments = await getApartments();
  return (<>
    <div style={{ textAlign: "center", fontSize: "5vw" }}>
      Apartments
    </div>
    <Container fluid>
      <Row>
        {apartments.map((apartment) => {
          return (
            <Col key={apartment._id} style={{ margin: "10px" }}>
              <ApartmentCard _id={apartment._id} image={apartment.logos}
                location={apartment.location} numberOfBathrooms={apartment.number_of_bathrooms}
                numberOfBedrooms={apartment.number_of_bedrooms} price={apartment.price}
                size={apartment.size} type={apartment.apartment_type} />
            </Col>
          );
        }
        )}
      </Row>
    </Container>

  </>
  );
}

const getApartments = async (): Promise<ApartmentInterface[]> => {
  const res = await fetch(`${process.env.Backend_URL}/apartments`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}