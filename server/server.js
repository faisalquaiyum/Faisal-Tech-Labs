const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();  
const authRoute = require('./router/auth-router.js'); 
const contactRoute = require('./router/contact-router.js'); 
const serviceRoute = require('./router/service-router.js'); 
const adminRoute = require('./router/admin-router.js');
const aiRoute = require('./router/ai-router.js');
const connectDB = require('./utils/db.js'); // Import the database connection function
const errorMiddleware = require('./middlewares/error-middleware.js');
require('dotenv').config(); // Load environment variables from .env file

// lets tackle cors issue
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions)); // Use the CORS middleware with the specified options
app.use(express.json()); // Middleware to parse JSON request bodies


// Mount the router: To use the router, you need to mount it on a specific path. This is done using the app.use() method. The first argument is the base path for the router, and the second argument is the router itself.
app.use('/auth', authRoute);
app.use('/form', contactRoute);
app.use('/data', serviceRoute);
app.use('/admin', adminRoute); 
app.use('/ai', aiRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
} );
});