import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { MealSchema } from './meal';

export const SchedulePieceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  meals: [MealSchema],
});

SchedulePieceSchema.plugin(timestamps);

export const SchedulePiece = mongoose.model(
  'SchedulePiece',
  SchedulePieceSchema
);
export const SchedulePieceTC = composeWithMongoose(SchedulePiece);
