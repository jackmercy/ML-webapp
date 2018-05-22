import mongoose from 'mongoose';

/**
 * Product schema
 */
const MovieSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Movie', MovieSchema, 'movie');
