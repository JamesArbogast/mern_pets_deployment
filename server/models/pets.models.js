const mongoose = require('mongoose');

PetSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, '{PATH} is required.'],
			minlength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
		},

		type: {
			type: String,
			required: [true, '{PATH} is required.'],
			minlength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
		},

		header: {
			type: String,
			required: [true, '{PATH} is required.'],
			minlength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
			maxlength: [
				120,
				'{PATH} can not be at longer than {MINLENGTH} characters.',
			],
		},

		description: {
			type: String,
			required: [true, '{PATH} is required.'],
			minlength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
		},

		src: {
			type: String,
			required: [true, '{PATH} is required.'],
		},

		// optional inputs

		gender: {
			type: String,
		},

		age: {
			type: String,
		},

		fixed: {
			type: Boolean,
			default: false,
		},

		likes: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

const Pet = mongoose.model('pet', PetSchema);
module.exports = Pet;
