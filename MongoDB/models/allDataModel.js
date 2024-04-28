import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const allDataSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  dataType: {
    type: String,
    enum: ['calories', 'distance', 'steps', 'exerciseType', 'personalGoal'],
    required: true
  },
  data: {
    type: Schema.Types.Mixed,
    required: true
  }
});

const AllData = mongoose.model('AllData', allDataSchema);

export default AllData;
