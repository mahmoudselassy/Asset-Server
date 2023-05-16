import { Asset } from "../Interfaces";
import axios, { AxiosResponse } from "axios";
class Bard {
  static async sendMessage(asset: Asset) {
    const url = "http://localhost:8000/evaluate";
    const { data }: AxiosResponse = await axios.post(url, asset, { timeout: 60 * 1000 });
    return data;
  }
}
export { Bard };
