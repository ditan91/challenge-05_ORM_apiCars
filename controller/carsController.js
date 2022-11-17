const carsService = require("../service/carService");
const cloudinary = require("../utils/cloudinary");

const create = async (req, res, next) => {
  const { name, price, size} = req.body;
  const { status, status_code, message, data } = await carsService.create({
    // id,
    name,
    price,
    size,
    photo: req.file
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
  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
  
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