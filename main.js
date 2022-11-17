const express = require("express");
// const bodyParser = require("body-parser");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");
// const cors = require("cors");
const path = require("path");
const upload = require("./repositories/fileUploadCloudinary");
// const cloudinary = require("./config/cloudinary");

const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());

// Import Controllers
const carsController = require("./controller/carsController");


// Define Routes

//mo pake middlewarekah?
app.get("/api/cars/:id", carsController.getCarsByID);
app.post("/api/cars",upload.single("photo"), carsController.create); //masih kurang untuk upload file ke cloudinary
app.delete("/api/cars/:id", carsController.deleteByID);
app.put("/api/cars/:id", carsController.updateByID);


app.listen(process.env.PORT || 2000, () => {
  console.log(
    `Server berhasil berjalan di port http://localhost:${
      process.env.PORT || 2000
    }`
  );
});