const { Schema, model } = require('mongoose');

const eventsSchema = new Schema({
  title: String,
  description: String,
  eventDate: String,
  organizer: String,
});

const Events = model('events', eventsSchema);

module.exports = Events;
