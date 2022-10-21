const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Tour name is required."],
            trim: true,
            unique: [true, "Tour name must be unique"],
        },
        photo: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: [true, "Location is required."],
        },
        rating: {
            type: Number,
            default: 4.5,
        },
        price: {
            type: Number,
            required: true,
            min: [0, "Price can't be negative"],
        },
        viewed: {
            type: Number,
            required: true,
            min: [0, "viewed can't be negative"],
            validate: {
                validator: (value) => {
                    const isInteger = Number.isInteger(value);
                    if (isInteger) {
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            message: "Viewed must be an integer number",
        },
    },
    {
        timestamps: true,
    }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
