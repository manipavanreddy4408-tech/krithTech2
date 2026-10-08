import portfolio from "../data/portfolio.js";
import { generatePortfolioResponse } from "../services/aiService.js";

const chat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const reply = await generatePortfolioResponse(
      message,
      portfolio
    );

    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("Chat error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate AI response",
    });
  }
};

export { chat };