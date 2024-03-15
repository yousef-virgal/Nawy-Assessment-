import dotenv from "dotenv";

import app from "./app";
import { DEFAULT_PORT } from "./constants";
import connectDB from "./config/db_config";

dotenv.config({ path: `${__dirname}/config/.env`});

const port = process.env.PORT || DEFAULT_PORT

app.listen(port, () => {
  connectDB().then(()=>{
    console.log(`Starting server at port ${port}`);
  });
});