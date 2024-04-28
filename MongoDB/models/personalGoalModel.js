import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const personalGoalSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  personalGoal: {
    type: String,
    required: true
  }
});

const PersonalGoal = mongoose.model('PersonalGoal', personalGoalSchema);

export default PersonalGoal;
