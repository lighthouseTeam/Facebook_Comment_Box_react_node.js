const express = require("express");
const app = express();
// const router = express.Router();
const connectDB = require("./models/connectDB");
const router = require("./routers/router");
<<<<<<< HEAD
// const cors = require("cors");
=======
const cors = require('cors');
>>>>>>> 83b09e257728d9acacb1ce4d7336018384c8fd65

require("dotenv").config();

// production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
<<<<<<< HEAD
// app.use(cors());
=======

app.use(cors());
>>>>>>> 83b09e257728d9acacb1ce4d7336018384c8fd65
app.use(express.json());
app.use("/", router);

connectDB();

// victor deneme