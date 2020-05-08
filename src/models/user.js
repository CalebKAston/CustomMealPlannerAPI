import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { RecipeSchema } from './recipe';
import { MealPlanSchema } from './meal-plan';
import { IngredientSchema } from './ingredient';
import { SchedulePieceSchema } from './schedule-piece';
import { ScheduleSchema } from './schedule';
import { MealSchema } from './meal';
import { MeasurementSchema } from './measurement';
import { IngredientCategorySchema } from './ingredient-category';
import { RecipeCategorySchema } from './recipe-category';
import { TagSchema } from './tag';

export const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true,
  },
  recipes: [RecipeSchema],
  mealPlans: [MealPlanSchema],
  ingredients: [IngredientSchema],
  schedulePieces: [SchedulePieceSchema],
  scheduleTemplates: [ScheduleSchema],
  meals: [MealSchema],
  measurements: [MeasurementSchema],
  ingredientCategories: [IngredientCategorySchema],
  recipeCategories: [RecipeCategorySchema],
  tags: [TagSchema],
});

UserSchema.plugin(timestamps);
UserSchema.plugin(require('mongoose-bcrypt'));

export const User = mongoose.model('User', UserSchema);
export const UserTC = composeWithMongoose(User);
