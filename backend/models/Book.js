// IMPORT MONGOOSE

const mongoose = require("mongoose");


// CREATE BOOK SCHEMA

const bookSchema = new mongoose.Schema({

    title: {

        type: String,

        required: true,

        trim: true

    },

    author: {

        type: String,

        required: true,

        trim: true

    },

    price: {

        type: Number,

        required: true,

        min: 0

    },

    category: {

        type: String,

        required: true

    },

    duration: {

        type: Number,

        required: true,

        min: 1

    }

});


// CREATE BOOK MODEL

const Book = mongoose.model("Book", bookSchema);


// EXPORT MODEL

module.exports = Book;