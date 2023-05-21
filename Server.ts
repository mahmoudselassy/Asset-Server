import express, { Request, Response } from "express";
import { Asset } from "./Interfaces";
import { Bard } from "./Classes/Bard";
import { Chatgpt } from "./Classes/Chatgpt";
const app = express();

app.use(express.json());

app.post("/evaluate", async (req: Request, res: Response) => {
  const asset: Asset = req.body;
  console.log(await Bard.sendMessage("what is your name"));
  /*console.log(await Chatgpt.sendMessage());*/
  res.sendStatus(200);
});

app.listen(5000);
