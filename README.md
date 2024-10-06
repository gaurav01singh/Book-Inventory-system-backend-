# Let's write the description into a README.md file.
readme_content = """
# Book Inventory System

A simple Node.js application for managing a book inventory using RESTful APIs. The app allows users to create, retrieve, and update book records, with data stored in a MongoDB database using Mongoose.

## Features
- **GET**: Retrieve all books or get details of a specific book by ID.
- **POST**: Add a new book to the inventory with details like title, author, price, stock, and category.
- **PUT**: Update existing book information such as price, stock, or category.
- **Mongoose Integration**: Use Mongoose for database connection and schema management.
- **REST API**: Expose routes using Express for easy API consumption.
- **Version Control**: Managed with Git and shared on GitHub.

## Technologies Used
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Fast and minimalist web framework for creating API endpoints.
- **MongoDB**: NoSQL database to store book records.
- **Mongoose**: MongoDB ODM for handling data schema and queries.
- **Postman**: API testing tool to ensure routes work as expected.
- **Git**: Version control system to manage source code.

## API Endpoints

### Base URL: `/books`

| Method | Endpoint         | Description                      |
|--------|------------------|----------------------------------|
| GET    | `/`              | Retrieve all books               |
| GET    | `/:id`           | Retrieve a specific book by ID   |
| POST   | `/create-book`   | Add a new book to the inventory  |
| PUT    | `/:id`           | Update a book’s information      |

## Project Structure

