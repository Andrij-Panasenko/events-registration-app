const eventsRouter = require('express').Router();
const eventsControllers = require('../controllers/eventsControllers');

eventsRouter.get('/', eventsControllers.getAllEvents);

module.exports = eventsRouter;
