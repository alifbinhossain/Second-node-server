const express = require("express");
var cors = require("cors");
const { json } = require("express");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Alif", email: "alif@gmail.com" },
  { id: 2, name: "Safwan", email: "safwan@gmail.com" },
  { id: 3, name: "Dippro", email: "dippro@gmail.com" },
  { id: 4, name: "Farhan", email: "farhan@gmail.com" },
  { id: 5, name: "Rakib", email: "rakib@gmail.com" },
  { id: 6, name: "Sunny", email: "sunny@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Hello from second node server");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const currentUser = users.find((user) => user.id == id);
  res.send(currentUser);
});

/* ----------------------------- app post method ---------------------------- */
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
