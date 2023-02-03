import app from "./app.js";
import * as dotenv from 'dotenv' 
import { swaggerDocs } from "../swagger.js";
dotenv.config()

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`server run to server ${PORT}`);
    swaggerDocs(app, PORT)
})