// IMPORT EXPRESS

const express = require("express");


// CREATE ROUTER

const router = express.Router();


// IMPORT BOOK MODEL

const Book = require("../models/Book");


// GET ALL BOOKS FROM DATABASE

router.get("/", async function (req, res) {

    try {

        // FETCH ALL BOOKS

        const books = await Book.find();


        // SEND RESPONSE

        res.status(200).json({

            success: true,

            totalBooks: books.length,

            books: books

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: "Error fetching books",

            error: error.message

        });

    }

});


// EXPORT ROUTER

module.exports = router;