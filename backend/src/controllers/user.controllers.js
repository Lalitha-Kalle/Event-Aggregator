import User from '../models/user.model.js'
import Event from '../models/events.model.js'
import { StatusCodes } from 'http-status-codes';

export const getUserProfile = async (req, res) =>{
  try {
    const user = await User.findById(req.user.userId).select('-password');

    if(!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
    }
    res.status(StatusCodes.OK).json(user)

  } catch(err) {
    console.error('Get Profile Error:', err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
  }
}

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(StatusCodes.OK).json({
      data: events
    })
  } catch (error) {
    console.error("Error in geting events")
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Server Error"
    })
  }
}

export const markInterest = async (req, res ) => {
  try {
    const { eventId } = req.params;
    const userId = req.user.userId;

    const user = await User.findById(userId)
    const event = await Event.findById(eventId);

    if(!event) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Event not found' });

    if(!user.interestedEvents.includes(eventId)) {
      user.interestedEvents.push(eventId);
      event.interestedUsers.push(userId);

      await user.save();
      await user.save();
    }

    res.status(StatusCodes.OK).json({
      message: "Interest marked successfully"
    });
    
  } catch (error) {
    console.error('Interest Error:', err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
  }
}