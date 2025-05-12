const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    // Check if all required fields are provided
    if (!username || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user has already submitted the form
    // const existingContact = await Contact.findOne({ email });
    // if (existingContact) {
    //   return res
    //     .status(400)
    //     .json({ message: "You have already submitted the contact form" });
    // }

    // Create the contact form entry
    await Contact.create({
      username,
      email,
      message,
    });

    // Send a success response
    return res
      .status(200)
      .json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error in contactForm controller:", error.message);
    return res.status(500).json({ message: "Message not delivered" });
  }
};

module.exports = contactForm;
