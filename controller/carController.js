const { Product } = require("../models");

const getAllCarsData = async (req, res) => {
  const data = await Product.findAll();

  try {
    if (!data) {
      return res.status(404).json({
        status: "Failed",
        message: "Failed get all cars data",
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "200",
      message: "Success get all cars data",
      totalData: data.length,
      isSuccess: true,
      data: { cars: data },
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed get all cars data",
      isSuccess: false,
      data: null,
    });
  }
};

const getCarsById = async (req, res) => {
  const id = req.params.id * 1;

  try {
    const data = await Product.findOne({
      where: {
        id,
      },
    });

    if (!data) {
      return res.status(404).json({
        status: "Failed",
        message: `Failed get data get car data this id: ${id}`,
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "200",
      message: "Success get cars data",
      isSuccess: true,
      data: { cars: data },
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed get cars data",
      isSuccess: false,
      data: null,
    });
  }
};

const createCarsData = async (req, res) => {
  const { body } = req;
  const updatedAt = new Date();
  const createdAt = new Date();
  try {
    const data = await Product.create({
      ...body,
      updatedAt,
      createdAt,
    });

    if (!data) {
      return res.status(404).json({
        status: "Failed",
        message: "Failed create cars data",
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "200",
      message: "Success create cars data",
      isSuccess: true,
      data: { cars: data },
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed create cars data",
      isSuccess: false,
      data: null,
    });
  }
};

const updateCarsById = async (req, res) => {
  const id = req.params.id * 1;
  const { body } = req;
  try {
    const data = await Product.update(body, {
      where: {
        id,
      },
    });

    if (!data) {
      return res.status(404).json({
        status: "Failed",
        message: `Failed update cars data this id: ${id}`,
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "200",
      message: "Success update cars data",
      isSuccess: true,
      data: { id, ...body },
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed update cars data",
      isSuccess: false,
      data: null,
    });
  }
};

const deleteCarsById = async (req, res) => {
  const id = req.params.id * 1;
  const carData = await Product.findByPk(id);
  try {
    const data = await Product.destroy({
      where: {
        id,
      },
    });

    if (!data) {
      return res.status(404).json({
        status: "Failed",
        message: `Failed delete cars data this id: ${id}`,
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "200",
      message: "Success delete cars data",
      isSuccess: true,
      data: { id, ...carData },
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed delete cars data",
      isSuccess: false,
      data: null,
    });
  }
};

module.exports = {
  getAllCarsData,
  createCarsData,
  getCarsById,
  updateCarsById,
  deleteCarsById,
};
