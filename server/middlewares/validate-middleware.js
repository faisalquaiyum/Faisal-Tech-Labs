
// validating user input using Zod schemas
const validate = (schema) => async (req, res, next) => {
  try {
    const validatedData = await schema.parseAsync(req.body);
    req.body = validatedData; // Store the validated data in the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.log(error);
    const message = error.errors[0].message; 
    const status = 422;
    const err = {status, message};
    // res.status(400).json({ msg: error.errors[0].message });
    next(err);
  }
};

module.exports = validate;
