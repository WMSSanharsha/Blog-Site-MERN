const express = require("express");
const database = require("../connect");

let postRoutes = express.Router();

//#1 - Retrieve All
postRoutes.route("/posts").get(async (req, res) => {
  let db = database.getDb();
  let data = await db.collection("posts").find({}).toArray();
});

//#2 - Retrieve One
//#3 - Create one
//#4 - Update one
//#5 - Delete one
