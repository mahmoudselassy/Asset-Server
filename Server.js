"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Bard_1 = require("./Classes/Bard");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/evaluate", async (req, res) => {
    const asset = req.body;
    console.log(await Bard_1.Bard.sendMessage("what is your name"));
    /*console.log(await Chatgpt.sendMessage());*/
    res.sendStatus(200);
});
app.listen(5000);
