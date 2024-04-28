import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const stepsSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  steps: {
    type: Number,
    required: true
  }
});

const Steps = mongoose.model('Steps', stepsSchema);

export default Steps;
