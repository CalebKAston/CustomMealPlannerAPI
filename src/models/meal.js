import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { RecipeSchema } from './recipe';
import { SchedulePiecesSchema } from './schedule-piece';
import { TagSchema } from './tag';

export const MealSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  recipes: {
    type: [RecipeSchema],
    required: true,
  },
  schedulePieces: {
    type: [SchedulePiecesSchema],
    required: false,
  },
  tags: {
    type: [TagSchema],
    required: false,
  },
});

MealSchema.plugin(timestamps);

export const Meal = mongoose.model('Meal', MealSchema);
export const MealTC = composeWithMongoose(Meal);
