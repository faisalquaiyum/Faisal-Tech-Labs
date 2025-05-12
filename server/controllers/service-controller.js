const Service = require('../models/service-model');

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if(!response) {
      res.status(404).json({
        status: 'fail',
        message: 'No services found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        services: response,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
}

module.exports = services;