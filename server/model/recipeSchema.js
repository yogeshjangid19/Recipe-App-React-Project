import mongoose from "mongoose";


const recipeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    recipeName: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    directions: {
        type: String,
        required: true
    }
});
const recipe = mongoose.model("recipes", recipeSchema);
export default recipe;