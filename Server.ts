import * as dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { Bard } from "./Classes/Bard";
import { Chatgpt } from "./Classes/Chatgpt";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: `*`,
  })
);
// Validation middleware
const validateMessage = (req: Request, res: Response, next: NextFunction) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Must send 'message' property!" });
  }
  next();
};

app.post("/chatgpt", validateMessage, async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const response = await Chatgpt.sendMessage(message);
    res.status(200).json({ response });
  } catch (error) {
    console.error("Error occurred while processing Chatgpt request:", error);
    res.status(500).json({ response: "Internal server error" });
  }
});

app.post("/bard", validateMessage, async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const response = await Bard.sendMessage(message);
    res.status(200).json({ response });
  } catch (error) {
    console.error("Error occurred while processing Bard request:", error);
    res.status(500).json({ response: "Internal server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is listening...");
});
