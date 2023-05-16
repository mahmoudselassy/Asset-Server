import express, { Request, Response } from "express";
import { Asset } from "./Interfaces";
import { Bard } from "./Classes/Bard";
import timeout from "connect-timeout";
import { Chatgpt } from "./Classes/Chatgpt";
const app = express();

app.use(express.json());
app.use(timeout("60s"));

app.post("/evaluate", async (req: Request, res: Response) => {
  //const asset: Asset = req.body;
  /*const re = await Bard.sendMessage(asset);
  console.log(re.response);*/
  const chatgpt = new Chatgpt();
  console.log(await chatgpt.sendMessage());
  res.sendStatus(200);
});

app.listen(5000);
