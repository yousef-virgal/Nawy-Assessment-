'use client'

import Image from "next/image";
import { CardProps } from "./card_intreface";
import Card from 'react-bootstrap/Card';
import room from "../../../../public/room.png";
import bathroom from "../../../../public/bathtub.png";

import { useRouter } from "next/navigation";

const ApartmentCard = (props: CardProps) => {
    const router = useRouter();

    const clickHandler = (id:string) =>{
      router.push(`/${id}`);
    }
    return <Card style={{ width: '18rem', margin: "auto", padding:"10px", cursor:"pointer" }} onClick={ ()=>clickHandler(props._id)}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.type}</Card.Title>
      <Card.Subtitle>{props.location}</Card.Subtitle>
      <Card.Text>
            {props.numberOfBedrooms}
            <Image src={room} width={20} style={{margin:"0 10px 0 5px"}} alt="room"/>
            {props.numberOfBathrooms}
            <Image src={bathroom} width={20} style={{margin:"0 10px 0 5px"}} alt="bathroom"/>
      </Card.Text>
      <Card.Footer style={{backgroundColor:"transparent", border:"0px", padding:"0px"}}>{props.price + " EGP"}</Card.Footer>
    </Card.Body>
  </Card>;
}

export default ApartmentCard;