// EduMatrix Backend

console.log("Welcome to EduMatrix Backend!");

// IMPORT DOTENV

require("dotenv").config();

// IMPORT EXPRESS

const express = require("express");

// CREATE EXPRESS APPLICATION

const app = express();

// IMPORT BUILT-IN MODULES

const fs = require("fs");

const path = require("path");


// IMPORT CUSTOM MODULE

const connectDB = require("./config/db");

const books = require("./utils/bookData");

//const bookRoutes = require("./routes/bookRoutes");


// CREATE DATA FOLDER PATH

const dataFolder = path.join(__dirname, "data");

const booksFile = path.join(dataFolder, "books.json");


// CREATE DATA FOLDER

if (!fs.existsSync(dataFolder)) {

    fs.mkdirSync(dataFolder);

}


// CREATE JSON FILE

if (!fs.existsSync(booksFile)) {

    fs.writeFileSync(
        booksFile,
        JSON.stringify(books, null, 2)
    );

}


// READ JSON FILE

fs.readFile(booksFile, "utf8", function (error, data) {

    if (error) {

        console.log("Error reading books:", error);

        return;

    }

    const storedBooks = JSON.parse(data);

    console.log("EduMatrix Books:");

    console.log(storedBooks);

    console.log("Total Books:", storedBooks.length);

});

// SERVER CONFIGURATION

const PORT = 3000;

// JSON MIDDLEWARE

app.use(express.json());


app.get("/", function (req, res) {

    res.send("Welcome to EduMatrix Backend Server!");

});



// CUSTOM MIDDLEWARE

app.use(function (req, res, next) {

    console.log(`${req.method} ${req.url}`);

    next();

});


// START SERVER AFTER DATABASE CONNECTION

async function startServer() {

    try {

        await connectDB();

        app.listen(PORT, function () {

            console.log(`EduMatrix Server running on port ${PORT}`);

        });

    }

    catch (error) {

        console.log("Server could not start!");

        process.exit(1);

    }

}


startServer();


