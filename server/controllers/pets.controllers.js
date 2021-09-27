const Pet = require("../models/pets.models");

module.exports = {
    create: function (req, res) {
        console.log("create method executed");

        Pet.create(req.body)
            .then((pet) => {
                res.json(pet);
                console.log(res.json(pet))
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getAll(req, res) {
        console.log("getAll method executed");

        Pet.find()
            .then((pets) => {
                res.json(pets);
            })
            .catch((err) => {
                res.json(err);
            });
        },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params);

        Pet.findById(req.params.id)
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getDogs(req, res) {
        console.log("getDogs method excuted", "url params", req.params)
        
        Pet.find( {type: 'dog'} )
        .then((pet) => {
            res.json(pet);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    delete(req, res) {
        console.log("delete method executed", "url params", req.params);

        Pet.findByIdAndDelete(req.params.id)
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    update(req, res) {
        console.log("update method executed", "url params:", req.params);

        Pet.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
            .then((updatedPet) => {
                res.json(updatedPet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
        },
};