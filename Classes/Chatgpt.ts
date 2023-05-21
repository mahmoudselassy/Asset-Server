import { Asset } from "../Interfaces";
class Chatgpt {
  static async sendMessage(message: string) {
    const url = "https://api.openai.com/v1/chat/completions";
    const options = {
      method: "post",
      headers: { Authorization: "Bearer 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", "Content-Type": "application/json" },
      body: JSON.stringify({ model: "gpt-3.5-turbo", messages: [{ role: "user", content: message }] }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.choices[0].message.content;
  }
}
export { Chatgpt };
