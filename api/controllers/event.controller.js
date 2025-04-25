import Event from "../models/event.model.js";
import { errorHandler } from "../utils/error.js";

// create event
export const createEventController = async (req, res, next) => {
  try {
    const {
      title,
      description,
      date,
      time,
      location,
      image,
      totalTickets,
      price,
    } = req.body;

    // validation basic
    if (
      !title ||
      !description ||
      !date ||
      !time ||
      !location ||
      !image ||
      !totalTickets ||
      !price
    ) {
      return next(errorHandler(400, "Please fill all required fields."));
    }

    const event = new Event({
      title,
      description,
      date,
      time,
      location,
      image,
      totalTickets,
      ticketsLeft: totalTickets, // When event created, all tickets are left
      price,
    });

    await event.save();

    res
      .status(201)
      .json({ success: true, message: "Event created successfully!", event });
  } catch (error) {
    next(error);
  }
};

// get all events
export const getAllEventController = async (req, res, next) => {
  try {
    const events = await Event.find().sort({ date: 1 }); // sorted by date ascending

    res.status(200).json({ success: true, events });
  } catch (error) {
    next(error);
  }
};

// get signle event by id
export const getSingleEventController = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return next(errorHandler(404, "Event not found"));
    }

    res.status(200).json({ success: true, event });
  } catch (error) {
    next(error);
  }
};

// update event
export const updateEventController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedData = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedEvent) {
      return next(errorHandler(404, "Event not found"));
    }

    res.status(200).json({
      success: true,
      message: "Event updated successfully!",
      event: updatedEvent,
    });
  } catch (error) {
    next(error);
  }
};

// delete event
export const deleteEventController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteEvent = await Event.findByIdAndDelete(id);

    if (!deleteEvent) {
      return next(errorHandler(404, "Event not found"));
    }

    res
      .status(200)
      .json({ success: true, message: "Event deleted successfully!" });
  } catch (error) {
    next(error);
  }
};
