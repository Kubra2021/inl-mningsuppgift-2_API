import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const exerciseTypeSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  exerciseType: {
    type: String,
    required: true
  }
});

const ExerciseType = mongoose.model('ExerciseType', exerciseTypeSchema);

export default ExerciseType;
