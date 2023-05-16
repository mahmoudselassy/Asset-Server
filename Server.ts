import express, { Request, Response } from "express";
import { Asset } from "./Interfaces";
const app = express();

app.use(express.json());

app.post("/evaluate", (req: Request, res: Response) => {
  const asset: Asset = req.body;
  
  res.sendStatus(200);
});

app.listen(5000);
