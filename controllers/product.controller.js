const product = require("../models/product.model")

const getProducts = async (req, res) => {
    try {
        const Product = await product.find({});
        res.status(200).json(Product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const Product = await product.findById(id);
        res.status(200).json(Product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const addProduct = async (req, res) => {
    try {
        const Product = await product.create(req.body);
        res.status(200).json(Product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const Product = await product.findByIdAndUpdate(id, req.body);
        if (!Product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        const updatedProduct = await product.findById(id);
        res.status(200).json({ success: "true", message: "Product Updated Successfully", data: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const Product = await product.findByIdAndDelete(id);
        if (!Product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        res.status(200).json({ success: "true", message: "Product Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

module.exports = { getProducts, getProductById, addProduct, updateProductById, deleteById };