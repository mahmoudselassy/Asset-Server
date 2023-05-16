import { Asset } from "../Interfaces";
import fetch from "node-fetch";
class Bard {
  static async sendMessage(asset: Asset) {
    const response = fetch("localhost:8000", { method: "post", body: JSON.stringify(asset), headers: { "Content-Type": "application/json" } });
    
  }
}
export { Bard };
