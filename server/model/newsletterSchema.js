import mongoose from "mongoose";


const newsletterSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    }}
)


const nwslttr = mongoose.model("newsletters", newsletterSchema);
export default nwslttr;
