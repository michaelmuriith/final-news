const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        full_name: {
            type: String,
            required: true,
        },
        display_name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false ,
        },    
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }, 
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);