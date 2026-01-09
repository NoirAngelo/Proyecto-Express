const express = require("express");
const app = express();

// usar carpeta public
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Servidor activo en http://localhost:3000");
});