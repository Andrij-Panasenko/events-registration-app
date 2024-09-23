const controllerWrapper = require('../helpers/controllerWrapper');
const HttpError = require('../helpers/httpError');
const Events = require('../models/events');

const getAllEvents = async (_, res) => {
  const result = await Events.find();
  if (!result) throw HttpError(404, 'Events not found');
  res.status(200).json(result);
};

module.exports = {
  getAllEvents: controllerWrapper(getAllEvents),
};
