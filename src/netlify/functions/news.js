import fetch from "node-fetch";

export async function handler(event) {
  const { category = "general" } = event.queryStringParameters;

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.VITE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
