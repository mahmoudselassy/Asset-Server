"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bard = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class Bard {
    static async sendMessage(asset) {
        const response = (0, node_fetch_1.default)("localhost:8000", { method: "post", body: JSON.stringify(asset), headers: { "Content-Type": "application/json" } });
    }
}
exports.Bard = Bard;
