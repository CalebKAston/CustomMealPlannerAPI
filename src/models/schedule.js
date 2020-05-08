import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { SchedulePieceSchema } from './schedule-piece';

export const ScheduleSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  schedulePieces: {
    type: [SchedulePieceSchema],
    required: false,
  },
});

ScheduleSchema.plugin(timestamps);

export const Schedule = mongoose.model('Schedule', ScheduleSchema);
export const ScheduleTC = composeWithMongoose(Schedule);
