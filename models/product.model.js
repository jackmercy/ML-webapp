import mongoose from 'mongoose';

/**
 * Product schema
 */
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export default mongoose.model('Product', ProductSchema, 'product');
