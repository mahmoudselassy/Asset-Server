"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Bard_1 = require("./Classes/Bard");
const connect_timeout_1 = __importDefault(require("connect-timeout"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, connect_timeout_1.default)("60s"));
app.post("/evaluate", async (req, res) => {
    const asset = req.body;
    const re = await Bard_1.Bard.sendMessage(asset);
    console.log(re.response);
    res.sendStatus(200);
});
app.listen(5000);
