import express from "express";

const app = express();
const port = 3000;

// Set the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  const today = new Date();
  let day = today.getDay();
  if (day === 0 || day === 6) {
    // It's a weekend
    res.render("index", {
      dayType: "a weekend",
      advice: "Take some time to relax and recharge!",
    });
    return;
  }
  // It's a weekday
  res.render("index", {
    dayType: "a weekday",
    advice: "Stay working, stay productive!",
  });
});

app.listen(port, () => {
  console.log("The server is live on: http://localhost:" + port);
});
