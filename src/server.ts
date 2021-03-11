import express from 'express';

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Listagem!" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Dados alterados!" });
});

app.listen(3333, () => console.log("Server is running!"));