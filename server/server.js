const express = require("express");
const cors = require("cors");

const port = 5000;
const pets_api = "pets_api";

require("./config/mongoose.config")(pets_api);

const app = express();

app.use(express.json());
app.use(cors());

require("./routes/pets.routes")(app);

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);