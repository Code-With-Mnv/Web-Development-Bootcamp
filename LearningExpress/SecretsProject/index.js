//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = "ILoveProgramming";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

function passwordCheck(req, res, next) {
  if (req.body.password === password) {
    next();
  } else {
    res.send("<h1>Incorrect password</h1>");
  }
}

app.use(passwordCheck);

app.post("/check", (res, req) => {
  req.sendFile(_dirname + "/public/secret.html");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
