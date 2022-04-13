import express from "express";
import Distancias from "./src/Controller/controller-endereco.js";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor aberto na porta http://localhost:${port}/`);
});

Distancias.router(app);
