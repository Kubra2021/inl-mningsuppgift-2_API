import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const distanceSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  distance: {
    type: Number,
    required: true
  }
});

const Distance = mongoose.model('Distance', distanceSchema);

export default Distance;

