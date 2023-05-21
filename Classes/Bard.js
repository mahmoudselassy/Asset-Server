"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bard = void 0;
class Bard {
    static async sendMessage(message) {
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
exports.Bard = Bard;
