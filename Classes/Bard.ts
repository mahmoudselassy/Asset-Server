import { Asset } from "../Interfaces";
class Bard {
  static async sendMessage(message: string) {
    const url = "https://api.bardapi.dev/chat";
    const options = {
      method: "POST",
      headers: { Authorization: "Bearer 3b595190-b3a2-489a-ba29-9a7a67d0e437" },
      body: JSON.stringify({ input: message }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.output;
  }
}
export { Bard };
