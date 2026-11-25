const express = require("express");
const cors = require("cors");
const products = require("./products");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));

app.get("/api/products", (_request, response) => {
  response.json(products);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`TiendaSimple API escuchando en el puerto ${port}`);
});
