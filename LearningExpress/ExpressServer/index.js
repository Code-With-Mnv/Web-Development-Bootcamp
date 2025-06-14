//Creating a basic server

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello, World!</h1>"); //nodemon <filename> can be used instead of node <filename> to make sure that the server auto-restarts whenever new changes are detected.
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
