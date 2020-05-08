import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const IngredientCategorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
});

IngredientCategorySchema.plugin(timestamps);

export const IngredientCategory = mongoose.model(
  'IngredientCategory',
  IngredientCategorySchema
);
export const IngredientCategoryTC = composeWithMongoose(IngredientCategory);
