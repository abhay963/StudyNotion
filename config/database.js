// Importing mongoose library to connect Node.js with MongoDB
const mongoose = require("mongoose");

// Importing dotenv so we can use variables stored in a .env file
require("dotenv").config();


// Exporting a function named "connect" so it can be used in other files
exports.connect = () => {

    // Calling mongoose.connect() to connect our backend to MongoDB
    // 1st argument → MongoDB URL (comes from .env file for security)
    // 2nd argument → configuration options
    mongoose
        .connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,        // Tells mongoose to use the new URL parser
            useUnifiedTopology: true,     // Uses new MongoDB engine for better stability
        })

        // If connection is successful, this .then() block runs
        .then(() => console.log("DB Connected Successfully"))

        // If connection fails, this .catch() block runs
        .catch((error) => {
            console.log("DB Connection Failed"); // Prints error message
            console.error(error);               // Prints actual error details

            // exit(1) → stop the application completely because DB failed
            process.exit(1);
        });
};
