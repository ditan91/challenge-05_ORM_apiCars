const { Car } = require("../models");

class CarsRepository {
  static async create({ name, price, size, photo }) {
    const createdCar = Car.create({
      name,
      price,
      size,
      photo
    });

    return createdCar;
  }

  static async getByID({ id }) {
    const getCar = await Car.findOne({ where: { id } });

    return getCar;
  }

  static async deleteByID({ id }) {
    const deletedCar = await Car.destroy({ where: { id } });

    return deletedCar;
  }

  static async updateByID({ id, name, price, size, photo }) {
    const updatedCar = await Car.update(
      {
        name,
        price,
        size,
        photo
      },
      { where: { id } }
    );

    return updatedCar;
  }
  static async getByID({ id }) {
    const getCar = await Car.findOne({ where: { id } });

    return getCar;
  }
}

module.exports = CarsRepository;