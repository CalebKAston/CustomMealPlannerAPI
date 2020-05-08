import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { UserQuery, UserMutation } from './user';
import {
  IngredientCategoryQuery,
  IngredientCategoryMutation,
} from './ingredient-category';
import { IngredientQuery, IngredientMutation } from './ingredient';
import { MealPlanQuery, MealPlanMutation } from './meal-plan';
import { MealQuery, MealMutation } from './meal';
import { MeasurementQuery, MeasurementMutation } from './measurement';
import { RecipeCategoryQuery, RecipeCategoryMutation } from './recipe-category';
import { RecipeQuery, RecipeMutation } from './recipe';
import { SchedulePieceQuery, SchedulePieceMutation } from './schedule-piece';
import { ScheduleQuery, ScheduleMutation } from './schedule';
import { TagQuery, TagMutation } from './tag';

schemaComposer.Query.addFields({
  ...UserQuery,
  // ...IngredientCategoryQuery,
  // ...IngredientQuery,
  // ...MealPlanQuery,
  // ...MealQuery,
  // ...MeasurementQuery,
  // ...RecipeCategoryQuery,
  // ...RecipeQuery,
  // ...SchedulePieceQuery,
  // ...ScheduleQuery,
  // ...TagQuery,
});

schemaComposer.Mutation.addFields({
  ...UserMutation,
  // ...IngredientCategoryMutation,
  // ...IngredientMutation,
  // ...MealPlanMutation,
  // ...MealMutation,
  // ...MeasurementMutation,
  // ...RecipeCategoryMutation,
  // ...RecipeMutation,
  // ...SchedulePieceMutation,
  // ...ScheduleMutation,
  // ...TagMutation,
});

export default schemaComposer.buildSchema();
