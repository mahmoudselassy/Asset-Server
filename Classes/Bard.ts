class Bard {
  static async sendMessage(message: string) {
    const url = `${process.env.BARD_URL}`;
    const options = {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.BARD_API_KEY}` },
      body: JSON.stringify({ input: message }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.output;
  }
}
export { Bard };
