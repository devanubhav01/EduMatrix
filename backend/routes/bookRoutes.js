// IMPORT EXPRESS

const express = require("express");


// CREATE ROUTER

const router = express.Router();


// IMPORT BOOK DATA

const books = require("../utils/bookData");


// GET ALL BOOKS

router.get("/", function (req, res) {

    res.status(200).json({

        success: true,

        totalBooks: books.length,

        books: books

    });

});


// EXPORT ROUTER

module.exports = router;