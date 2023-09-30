import mongoose from 'mongoose';


const projectSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }

});

export default mongoose.model('Project', projectSchema);
