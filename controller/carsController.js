const carsService = require("../service/carService");
const cloudinary = require("./config/cloudinary");

const create = async (req, res, next) => {
  const { name, price, size, photo} = req.body;
  const result = await cloudinary.uploader.upload(photo);
  const { status, status_code, message, data } = await carsService.create({
    // id,
    name,
    price,
    size,
    photo: req.uploaded_picture
  });
  const fileToUpload = req.file;

  const fileBase64 = fileToUpload.buffer.toString("base64");
  const file = `data:${fileToUpload.mimetype};base64,${fileBase64}`;
  
  cloudinary.uploader.upload(file, (err, result) => {
    if (err) {

      res.status(400).send(`Gagal mengupload file ke cloudinary: ${err.message}`);

      return
    }
    res.status(status_code).send({
      status: status,
      message: message,
      data: data,
    })
  });
    
  // const handelImage = (e) => {
  //   const file = e.target.files[0];
  //   setFileToBase(file);
  //   console.log(file)
  // }
  // const setFileToBase = (file)=>{
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = ()=>{
  //     setImage(reader.result);
  //   }
  // }
  
};

const deleteByID = async (req, res, next) => {
  const { id } = req.params;

//   const user_id = req.user.id;

  const { status, status_code, message, data } = await carsService.deleteByID({
    id
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const updateByID = async (req, res, next) => {
  const { id } = req.params;
  const { name, price, size} = req.body;

//   const user_id = req.user.id;

  const { status, status_code, message, data } = await carsService.updateByID({
    id,
    name,
    price,
    size,
    photo: req.uploaded_picture
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};
const getCarsByID = async (req, res, next) => {
    const { id } = req.params;
  
    const { status, status_code, message, data } =
      await carsService.getCarsByID({
        id,
      });
  
    res.status(status_code).send({
      status: status,
      message: message,
      data: data,
    });
};
// const getCars = async (req, res, next) => {
//     const { id } = req.params;
  
//     const { status, status_code, message, data } =
//       await usersService.getCarsByID({
//         id,
//       });
  
//     res.status(status_code).send({
//       status: status,
//       message: message,
//       data: data,
//     });
// };

module.exports = { create, updateByID, deleteByID, getCarsByID };