import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { ScheduleSchema } from './schedule';

export const MealPlanSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  lengthInDays: Number,
  schedules: [ScheduleSchema],
});

MealPlanSchema.plugin(timestamps);

export const MealPlan = mongoose.model('MealPlan', MealPlanSchema);
export const MealPlanTC = composeWithMongoose(MealPlan);
