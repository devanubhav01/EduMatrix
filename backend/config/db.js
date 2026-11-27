// IMPORT MONGOOSE

const mongoose = require("mongoose");


// CONNECT DATABASE

async function connectDB() {

    try {

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB Connected Successfully!");

    }

    catch (error) {

        console.log("MongoDB Connection Failed:", error.message);

        throw error;

    }

}


// EXPORT FUNCTION

module.exports = connectDB;