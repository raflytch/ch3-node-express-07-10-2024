const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

// app.use(morgan("dev"));

// Default URL = Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Application is running",
  });
});

app.get("/rafly", (req, res) => {
  res.status(200).json({
    status: "200",
    message: "Ping successfully",
    name: "rafly",
    age: 18,
    country: "indonesia",
    city: "jakarta",
  });
});

app.use(express.json());

// middleware / handler untuk url yang tidak dapat di akses karena memang tidak ada di aplikasi
// membuat middleware = our own middleware
app.use((req, res, next) => {
  res.status(404).json({
    status: "404",
    message: "Api Not Exist",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
