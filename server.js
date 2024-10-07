const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const carRoutes = require("./router/cars");
const notFound = require("./middleware/notfound");

// app.use(morgan("dev"));

app.use(notFound);

app.use(express.json());
// middleware untuk membaca json

// Default URL = Health Check

// API/v1/(collection) => collection nya harus jamak
app.use("/api/v1/cars", carRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Application is running",
  });
});

// middleware / handler untuk url yang tidak dapat di akses karena memang tidak ada di aplikasi
// membuat middleware = our own middleware

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
