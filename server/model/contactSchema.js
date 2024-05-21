import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    msj: {
        type: String,
        required: true
    },
});
const contact = mongoose.model("contacts", contactSchema);
export default contact;