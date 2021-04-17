// Iteration #1

//connecting to the db
require("../db");

//creating the array of 3 objects
const myDrone = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

//
const mongoose = require("mongoose");
const DroneModel = require("../models/Drone.model.js");

DroneModel.create(myDrone)
  .then(() => {
    console.log("Seed done");
    mongoose.connection.close();
  })
  .catch(() => {
    console.log("There is an issue with the seed");
  });
