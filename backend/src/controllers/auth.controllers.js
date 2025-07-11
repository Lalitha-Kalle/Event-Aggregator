import dotenv from 'dotenv'
dotenv.config()
import { Router } from "express";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Admin from '../models/admin.model.js'
import User from '../models/user.model.js'
import StatusCodes from 'http-status-codes'

const generateToken = (userId, role) => {
  return jwt.sign(
    { userId, role },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRY
    }
  )
}

export const signup = async (req, res) => {
  try {
    const { name, email, password, role} = req.body;

    const Model = role === 'admin' ? Admin : User

    const existing = await Model.findOne({ email });
    if(existing) return res.status(400).json({
      message: "Email already registered"
    })

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Model.create({
      name,
      email, 
      password: hashedPassword,
      role
    })

    const token = generateToken(user._id, user.role);

    res.status(StatusCodes.CREATED).json({
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role
      }
    })

  } catch (error) {
    console.error('Signup Error:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error during signup' });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const Model = role === 'admin' ? Admin : User;

    const user = await Model.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Incorrect password' });

    const token = generateToken(user._id, user.role);

    res.status(200).json({
      token,
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
};