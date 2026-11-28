// IMPORT EXPRESS

const express = require("express");

// IMPORT MONGOOSE
const mongoose = require("mongoose");

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


// ADD NEW BOOK TO DATABASE

router.post("/", async function (req, res) {

    try {

        // GET BOOK DETAILS FROM REQUEST BODY
        const { title, author, price, category, duration } = req.body;

        // CREATE NEW BOOK
        const newBook = new Book({
            title,
            author,
            price,
            category,
            duration
        });

        // SAVE BOOK TO DATABASE
        const savedBook = await newBook.save();

        // SEND RESPONSE
        res.status(201).json({
            success: true,
            message: "Book added successfully!",
            book: savedBook
        });

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: "Error adding book",
            error: error.message
        });

    }

});


// EXPORT ROUTER
module.exports = router;
