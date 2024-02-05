const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const companyModel = require("../models/Users");
const UserModel = require("../models/UserData");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://GokulTraders:GokulTraders@cluster0.kdybsmd.mongodb.net/GokulTraderUsers");


app.post("/company/:id", (req, res) => {
  UserModel.create(req.body)
  .then((users) => res.json(users))
  .catch((err) => res.json(err));
});

app.get("/company/userInfo/:id", (req, res) => {
  const id = req.params.id;
  UserModel.find({ custId: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/company/companyInfo/:id", (req, res) => {
  const id = req.params.id;
  companyModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});


app.get("/", (req, res) => {
  companyModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});


app.post("/", (req, res) => {
    companyModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is Running at port ${port}`);
});
