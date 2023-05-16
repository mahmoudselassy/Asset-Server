import axios, { AxiosResponse } from "axios";
import { Asset } from "../Interfaces";
class Chatgpt {
  constructor(private model: string = "text-davinci-001") {}
  async sendMessage() {
    const url = "https://api.openai.com/v1/completions";
    const options = {
      method: "post",
      headers: { Authorization: "Bearer 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", "Content-Type": "application/json" },
      body: JSON.stringify({ model: this.model, messages: [{ role: "user", content: "hello" }] }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }
}
export { Chatgpt };
