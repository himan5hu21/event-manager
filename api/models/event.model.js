import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  totalTickets: {
    type: Number,
    required: true,
  },
  ticketsLeft: {
    type: Number,
    required: true,
    default: function () {
      return this.totalTickets;
    },
  },
  price: {
    type: Number,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
