import mongoose,{Schema} from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    priceId: {
        type: String, 
    }
}, { timestamps: true });