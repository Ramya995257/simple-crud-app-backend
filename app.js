const express = require('express');
const mongoose = require('mongoose');
const product = require("./models/product.model")
const app = express();
const productRoute = require("./routes/product.route")

//middleware for receiving request in json format
app.use(express.json());

//middleware for receiving request in any format
app.use(express.urlencoded({ extended: false }))

//use routes
app.use('/api/products', productRoute);

app.get('/status', (req, res) => {
    res.status(200).end();
});

// MongoDB connection
mongoose.connect('mongodb+srv://ramyamurugesam:Ramya%402000@cluster0.rv29bdt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB!');
        app.listen(3000, () => {
            console.log("Server is running on Port 3000");
        });
    })
    .catch(err => {
        console.error('Connection failed:', err.message);
    });