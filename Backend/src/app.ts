import express from "express";
import cors from "cors";

import apartmentsRouter from "./modules/apartments/apartments_router";
import { APARTMENTS_ROUTE } from "./constants";

const app = express();

app.use(cors());
app.use(express.json()); 

app.use(APARTMENTS_ROUTE, apartmentsRouter);

export default app; 