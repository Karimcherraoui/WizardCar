import express from "express";
import router from "./routes";
import "./config"


const app = express(); 
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json())
app.use("/", router)


export default app;