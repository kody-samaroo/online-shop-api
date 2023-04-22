const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array },
        price: { type: Number, required: true }
    },
    { timstampes: true }
);

module.exports = mongoose.model("Product", ProductSchema);