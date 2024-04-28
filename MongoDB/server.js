import express from "express";
import mongoose from "mongoose";
import apiRegister from "./apiRegister.js";

const server = express();
const port = 3000;

server.use(express.json());

mongoose.connect("mongodb+srv://kubercin:kubra12345@cluster0.61vmlnw.mongodb.net/PVT23");

apiRegister(server, mongoose);

server.listen(port, () => console.log(`Listening on port http://localhost:${port}`));

