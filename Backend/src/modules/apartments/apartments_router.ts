import { Router } from "express";

import { createApartment, fetchApartmentDetails, fetchApartments } from "./apartments_controller";
import requireBodyParams from "../../middlewares/input_validation";
import requireIdParam from "../../middlewares/param_validation";

const apartmentsRouter = Router();

apartmentsRouter.route("/").get(fetchApartments).post(requireBodyParams(
    ["apartmentType", "location", "size", "numberOfBathrooms", "numberOfBedrooms", "price", "amenities",
     "downPayment", "deliveryDate", "instalmentPerMonth", "description"]), createApartment);
apartmentsRouter.route("/:id").get(requireIdParam, fetchApartmentDetails);


export default apartmentsRouter;