const mongoose = require("mongoose");

PetSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },

        gender : {
            type: String,
            required: [true, "{PATH} is required."]
        },

        type: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },

        fixed : {
            type: Boolean,
            required: [true, "{PATH} is required"]
        },

        description : {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },

        likes: {
            type: Number,
            default: 0,
        },
    },
        { timestamps: true }
);

const Pet = mongoose.model("pet", PetSchema);
module.exports = Pet;