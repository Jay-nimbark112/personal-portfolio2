import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
