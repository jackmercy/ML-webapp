import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    }
})

export default mongoose.model('User', UserSchema, 'users');
