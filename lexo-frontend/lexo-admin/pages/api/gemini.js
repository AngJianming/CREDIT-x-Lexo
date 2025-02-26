import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  try {
    console.log("Request Body:", req.body);
    console.log("GEMINI_API_KEY:", GEMINI_API_KEY);

    const response = await axios.post(
      "https://api.google.com/gemini/v1/generate",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GEMINI_API_KEY}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error calling Gemini API:", error.response?.data || error.message);
    res.status(500).json({
      error: "Failed to fetch data from Gemini API",
      details: error.response?.data || error.message,
    });
  }
}
