import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin', enum: ['admin'] }
}, {
  timestamps: true,
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
