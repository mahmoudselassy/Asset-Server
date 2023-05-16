import { Asset } from "../Interfaces";

class Bard {
  static sendMessage(asset: Asset) {
    console.log(JSON.stringify(asset));
  }
}
export { Bard };
