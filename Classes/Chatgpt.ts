class Chatgpt {
  static async sendMessage(message: string) {
    const url = `${process.env.CHATGPT_URL}`;
    const options = {
      method: "post",
      headers: { Authorization: `Bearer ${process.env.CHATGPT_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "gpt-3.5-turbo", messages: [{ role: "user", content: message }] }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.choices[0].message.content;
  }
}
export { Chatgpt };
