import mongoose from "mongoose";


const tasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date_start: {
    type: Date,
    default: Date.now,
    required: true
  },
  date_end: {
    type: Date,
    default: 0
  },
  priority: {
    type: String,
    enum: ['high', 'normal', 'low'],
    default: 'normal',
  },
  status: {
    type: String,
    enum: ['queue', '', 'development', 'done'],
    default: 'queue',
  },
  subtasks: [{
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
});


export default mongoose.model('Tasks', tasksSchema);
