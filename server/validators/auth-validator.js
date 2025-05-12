const { z } = require("zod");

// This is a Zod schema for validating user registration data
const registerSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, {
      message: "Username must be at least 3 characters long",
    })
    .max(20, {
      message: "Username must be at most 20 characters long",
    }),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .min(3, {
      message: "Email must be at least 3 characters long",
    })
    .max(255, {
      message: "Email must be at most characters long",
    }), 
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits long"),
  password: z.string().trim().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

// This is a Zod schema for validating user login data  
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().trim().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
};
