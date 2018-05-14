import mongoose from 'mongoose';

/**
 * Product schema
 */
const MovieSchema = new mongoose.Schema({
    genres: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    imdb_id: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    production_companies: {
        type: String,
        required: true
    },
    production_countries: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    vote_average: {
        type: Number,
        required: true
    },
    vote_count: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Movie', MovieSchema, 'movie');
