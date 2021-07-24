const mongoose = require("mongoose");

module.exports = (pets_api) => {
    mongoose
        .connect(`mongodb://localhost/${pets_api}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log(`Successfully connected to ${pets_api}`);
        })
        .catch((err) => {
            console.log(`mongoose connection to ${petss_api} failed:`, err);
        });
};