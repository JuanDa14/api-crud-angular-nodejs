const express = require("express");
const initDB = require("./config/base");
const app = express();
const port = 3001;
const personajesRouter = require("./app/routes/personajes");
const cors = require("cors");
const whiteList = ["http://localhost:4200", "http://localhost:4200/crear"];

app.use(cors({ origin: whiteList }));

app.use(
  express.json({
    limit: "20mb",
  })
);

app.use(
  express.urlencoded({
    limit: "20mb",
    extended: true,
  })
);

app.use(personajesRouter);

app.listen(port, () => {
  console.log("api conectada");
});

initDB();
