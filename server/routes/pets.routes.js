const petController = require("../controllers/pets.controllers");

module.exports = (app) => {
    app.post("/api/pets", petController.create);
    app.get("/api/pets", petController.getAll);
    app.get("/api/pets/:id", petController.getOne);
    app.delete("/api/pets/:id", petController.delete);
    app.put("/api/pets/:id/edit", petController.update);
    app.put("/api/pets/:id", petController.update);
};