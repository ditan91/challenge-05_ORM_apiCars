const express = require("express");
const path = require("path");
const upload = require("./repositories/fileUploadCloudinary");

const app = express();

app.use(express.json());

// Import Controllers
const carsController = require("./controller/carsController");

app.get("/api/cars/:id", carsController.getCarsByID);
app.get("/api/cars", carsController.getAll);
app.post("/api/cars",upload.single("photo"), carsController.create);
app.delete("/api/cars/:id", carsController.deleteByID);
app.put("/api/cars/:id", carsController.updateByID);


app.listen(process.env.PORT || 2000, () => {
  console.log(
    `Server berhasil berjalan di port http://localhost:${
      process.env.PORT || 2000
    }`
  );
});