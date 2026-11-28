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

// GET SINGLE BOOK BY ID

router.get("/:id", async function (req, res) {

    try {

        // GET BOOK ID FROM URL
        const bookId = req.params.id;

        // VALIDATE BOOK ID
        if (!mongoose.Types.ObjectId.isValid(bookId)) {

            return res.status(400).json({
                success: false,
                message: "Invalid Book ID"
            });

        }

        // FIND BOOK BY ID
        const book = await Book.findById(bookId);

        // CHECK IF BOOK EXISTS
        if (!book) {

            return res.status(404).json({
                success: false,
                message: "Book not found"
            });

        }

        // SEND BOOK DETAILS
        res.status(200).json({
            success: true,
            book: book
        });

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: "Error fetching book",
            error: error.message
        });

    }

});


// ADD NEW BOOK TO DATABASE

router.post("/", async function (req, res) {

    try {

        // CHECK WHETHER REQUEST BODY IS VALID

        if (
            !req.body ||
            typeof req.body !== "object" ||
            Array.isArray(req.body)
        ) {

            return res.status(400).json({
                success: false,
                message: "Invalid request body"
            });

        }


        // GET BOOK DETAILS FROM REQUEST BODY

        const { title, author, price, category, duration } = req.body;


        // CHECK REQUIRED FIELDS

        const requiredFields = [
            "title",
            "author",
            "price",
            "category",
            "duration"
        ];


        // FIND MISSING FIELDS

        const missingFields = requiredFields.filter(function (field) {

            return (
                req.body[field] === undefined ||
                req.body[field] === null ||
                (
                    typeof req.body[field] === "string" &&
                    req.body[field].trim() === ""
                )
            );

        });


        // RETURN ERROR IF REQUIRED FIELDS ARE MISSING

        if (missingFields.length > 0) {

            return res.status(400).json({

                success: false,

                message: "Required fields are missing",

                missingFields: missingFields

            });

        }


        // CHECK DATA TYPES

        const invalidFields = [];


        if (typeof title !== "string") {
            invalidFields.push("title");
        }

        if (typeof author !== "string") {
            invalidFields.push("author");
        }

        if (typeof price !== "number" || !Number.isFinite(price)) {
            invalidFields.push("price");
        }

        if (typeof category !== "string") {
            invalidFields.push("category");
        }

        if (typeof duration !== "number" || !Number.isFinite(duration)) {
            invalidFields.push("duration");
        }


        // RETURN ERROR IF DATA TYPES ARE INVALID

        if (invalidFields.length > 0) {

            return res.status(400).json({

                success: false,

                message: "Invalid data types",

                invalidFields: invalidFields

            });

        }


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


// UPDATE EXISTING BOOK

router.put("/:id", async function (req, res) {

    try {

        // GET BOOK ID FROM URL

        const bookId = req.params.id;


        // VALIDATE BOOK ID

        if (!mongoose.Types.ObjectId.isValid(bookId)) {

            return res.status(400).json({

                success: false,

                message: "Invalid Book ID"

            });

        }


        // GET UPDATED BOOK DETAILS

        const { title, author, price, category, duration } = req.body;


        // UPDATE BOOK IN DATABASE

        const updatedBook = await Book.findByIdAndUpdate(

            bookId,

            {

                title,

                author,

                price,

                category,

                duration

            },

            {

                new: true,

                runValidators: true

            }

        );


        // CHECK IF BOOK EXISTS

        if (!updatedBook) {

            return res.status(404).json({

                success: false,

                message: "Book not found"

            });

        }


        // SEND UPDATED BOOK DETAILS

        res.status(200).json({

            success: true,

            message: "Book updated successfully!",

            book: updatedBook

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: "Error updating book",

            error: error.message

        });

    }

});

// DELETE BOOK FROM DATABASE

router.delete("/:id", async function (req, res) {

    try {

        // GET BOOK ID FROM URL

        const bookId = req.params.id;


        // VALIDATE BOOK ID

        if (!mongoose.Types.ObjectId.isValid(bookId)) {

            return res.status(400).json({

                success: false,

                message: "Invalid Book ID"

            });

        }


        // DELETE BOOK FROM DATABASE

        const deletedBook = await Book.findByIdAndDelete(bookId);


        // CHECK IF BOOK EXISTS

        if (!deletedBook) {

            return res.status(404).json({

                success: false,

                message: "Book not found"

            });

        }


        // SEND RESPONSE

        res.status(200).json({

            success: true,

            message: "Book deleted successfully!",

            book: deletedBook

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: "Error deleting book",

            error: error.message

        });

    }

});

// EXPORT ROUTER

module.exports = router;

