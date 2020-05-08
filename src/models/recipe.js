import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { IngredientSchema } from './ingredient';
import { RecipeCategorySchema } from './recipe-category';
import { TagSchema } from './tag';

export const RecipeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  ingredients: {
    type: [IngredientSchema],
    required: true,
  },
  cookTime: {
    type: Number,
  },
  categories: {
    type: [RecipeCategorySchema],
    required: false,
  },
  preparationInstructions: {
    type: String,
    required: false,
  },
  howManyWillItFeed: {
    type: Number,
    required: false,
  },
  tags: {
    type: [TagSchema],
    required: false,
  },
});

RecipeSchema.plugin(timestamps);

export const Recipe = mongoose.model('Recipe', RecipeSchema);
export const RecipeTC = composeWithMongoose(Recipe);
