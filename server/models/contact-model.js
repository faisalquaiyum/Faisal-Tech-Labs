const {Schema, model} = require('mongoose');

const contactSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
});

// Create a model from the schema
const Contact = model('Contact', contactSchema);

module.exports = Contact;