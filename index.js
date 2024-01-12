const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require("./data/chef.json");

const singleChefs = require("./data/singleChefData.json");

app.get("/", (req, res) => {
  res.send("chef recipe hunter in running on server");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const singleChefsData = singleChefs?.find(
    (singleData) => singleData.id === id
  );
  res.send(singleChefsData);
});

app.listen(port, () => {
  console.log(`Server is running on Port : ${port} `);
});
