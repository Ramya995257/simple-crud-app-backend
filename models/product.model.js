const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "please enter product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        },
    },
    { timestamps: true }
);

const product =  mongoose.model("Product", ProductSchema)
module.exports = product;
