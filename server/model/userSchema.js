import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
});

// // Hashing the password and cpassword fields before saving
// userSchema.pre('save', async function (next) {
//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 12); // Corrected bcrypt usage
//     }
//     if (this.isModified("cpassword")) {
//         this.cpassword = await bcrypt.hash(this.cpassword, 12); // Corrected bcrypt usage
//     }
//     next();
// });

const User = mongoose.model("users", userSchema);
export default User;
