import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  replies: [this],
});

export default mongoose.model('Comment', commentSchema);
