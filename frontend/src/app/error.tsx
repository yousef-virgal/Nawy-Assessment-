"use client"

import Image from "next/image";
import error from "../../public/error.png";

const ErrorPage = () => {
    return <div style={{ display: "flex", flexDirection: "row", justifyContent: " center", alignItems: "center" }}>
        <Image src={error} alt="Error Image" style={{ margin: "auto" }} />
    </div>;

}

export default ErrorPage;