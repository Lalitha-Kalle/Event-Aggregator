import Event from '../models/events.model.js';
import User from '../models/user.model.js';
import StatusCodes from 'http-status-codes'

export const createEvent = async (req, res) => {
  try {
    const event = req.body;
    await Event.create(event);

    res.status(StatusCodes.CREATED).json({
      message: "Event created"
    })
  } catch (error) {
    console.error("Error in creating event", error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Server error"
    })
  }
}

export const updateEvent = async (req, res) => {
  try {
    const newEvent = await Event.findById(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    res.status(StatusCodes.OK).json({
      message: "Successfully updated",
      data: newEvent
    })
    
  } catch (error) {
    console.error("Error in updating event")
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Server Error"
    })
  }
}

export const getInterestedUsers = async (req, res) => {
  try {
    const { eventId } = req.params;

    const event = await Event.findById(eventId).populate('interestedUsers', 'name email');
    if (!event) return res.status(StatusCodes.NOT_FOUND)
      .json({ message: 'Event not found' });

    res.status(StatusCodes.OK).json({
      event: event.title,
      interestedUsers: event.interestedUsers,
    });
  } catch (error) {
    console.error('Error fetching interested users:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
  }
};
