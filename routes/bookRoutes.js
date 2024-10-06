const express = require('express');
const router = express.Router();
const Book = require('../model/BookModel');

// GET: Retrieve all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Book search
router.get('/search', async (req, res) => {
    try {
        const { title, author, category } = req.query;

        let filter = {};
        if (title) {
            filter.title = { $regex: title, $options: 'i' }; 
        }
        if (author) {
            filter.author = { $regex: author, $options: 'i' }; 
        }
        if (category) {
            filter.category = { $regex: category, $options: 'i' }; 
        }

        const books = await Book.find(filter);

        if (books.length === 0) {
            return res.status(404).json({ message: 'No books found matching your criteria' });
        }

        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// POST: Add a new book
router.post('/create-book', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        stock: req.body.stock,
        category: req.body.category,
    });
    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT: Update a book's details
router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        if (req.body.title) book.title = req.body.title;
        if (req.body.author) book.author = req.body.author;
        if (req.body.price) book.price = req.body.price;
        if (req.body.stock) book.stock = req.body.stock;
        if (req.body.category) book.category = req.body.category;

        const updatedBook = await book.save();
        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
