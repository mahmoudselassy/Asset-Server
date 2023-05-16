"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bard = void 0;
const axios_1 = __importDefault(require("axios"));
class Bard {
    static async sendMessage(asset) {
        const url = "http://localhost:8000/evaluate";
        const { data } = await axios_1.default.post(url, asset, { timeout: 60 * 1000 });
        return data;
    }
}
exports.Bard = Bard;
