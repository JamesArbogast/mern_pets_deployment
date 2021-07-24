const mongoose = require("mongoose");

PetSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },

        type: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },

        description : {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },

        skill1 : {
            type: String,
        },

        skill2 : {
            type: String,
        },

        skill3 : {
            type: String,
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