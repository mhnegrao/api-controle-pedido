"use strict";
const express = require("express");
const routes = require("../Routes/routes");
const app = express();

app.use(express.json());
app.use(routes);
app.listen(4000, () =>
  console.log("Servidor ativo e rodando em http://localhost:4000")
);
