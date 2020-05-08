import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const RecipeCategorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
});

RecipeCategorySchema.plugin(timestamps);

export const RecipeCategory = mongoose.model(
  'RecipeCategory',
  RecipeCategorySchema
);
export const RecipeCategoryTC = composeWithMongoose(RecipeCategory);
