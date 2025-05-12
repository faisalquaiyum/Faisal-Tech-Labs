const axios = require('axios');

const chatWithAI = async (req, res) => {
  try {
    const { messages } = req.body;

    // Validate input
    if (!messages?.length) {
      return res.status(400).json({ 
        success: false, 
        message: "Messages array is required" 
      });
    }

    // Call OpenRouter API
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: "openai/gpt-3.5-turbo", // Free model
        messages: messages.map(m => ({
          role: m.role,
          content: m.content
        })),
        max_tokens: 200
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'http://localhost:3000', // Required
          'X-Title': 'Your App Name' // Optional
        }
      }
    );

    // Successful response
    res.status(200).json({
      success: true,
      response: response.data.choices[0].message.content
    });

  } catch (error) {
    console.error("OpenRouter error:", error.response?.data || error.message);
    
    // User-friendly error messages
    let errorMessage = "AI service error";
    if (error.response?.status === 429) {
      errorMessage = "Rate limit exceeded (free tier: ~100 requests/day)";
    } else if (error.response?.status === 401) {
      errorMessage = "Invalid API key";
    }

    res.status(error.response?.status || 500).json({
      success: false,
      message: errorMessage
    });
  }
};

module.exports = { chatWithAI };