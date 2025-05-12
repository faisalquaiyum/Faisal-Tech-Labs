const User = require("../models/user-model");
const bcrypt = require("bcryptjs"); // Import bcrypt for password hashing

//Home controller for the server
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the server by controller!");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

// Register controller for the server
const register = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Log the incoming request body

    const { username, email, phone, password } = req.body;

    // Check if all required fields are provided
    if (!username || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // hash the password before saving it to the database
    // const saltRounds = 10;
    // const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Check if the user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Check if the phone number already exists
    const phoneExist = await User.findOne({ phone });
    if (phoneExist) {
      return res.status(400).json({ message: "Phone number already exists" });
    }

    // Create the user
    const userCreated = await User.create({
      username,
      email,
      phone,
      password, // Consider hashing the password before saving
    });

    res.status(200).json({
      message: "User registered successfully",
      data: userCreated,
      token: await userCreated.generateAuthToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error("Error in register controller:", error.message); // Log the error
    res.status(500).send("Internal server error");
  }
};

// Login controller for the server
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if the user exists
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Compare the password
    // const isMatchPassword = await bcrypt.compare(password, userExist.password);
    const isMatchPassword = await userExist.comparePassword(password);
    
    if (!isMatchPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token for the user
    const token = await userExist.generateAuthToken();

    res.status(200).json({
      message: "User logged in successfully",
      data: userExist,
      token: token,
      userId: userExist._id.toString(),
    });
  } catch (error) {
    // console.error("Error in login controller:", error.message);
    // res.status(500).send("Internal server error");
    next(error); // Pass the error to the next middleware for centralized error handling
  }
};

// To send user data
const user = async (req, res) => {
  try {
    const userData = req.user; 
    console.log("User data:", userData); 
    return res.status(200).json({
      userData
    });
  } catch (error) {
    console.error("Error in user controller:", error.message);
    res.status(500).send("Internal server error");
  }
};


module.exports = {
  home,
  register,
  login,
  user,
};
