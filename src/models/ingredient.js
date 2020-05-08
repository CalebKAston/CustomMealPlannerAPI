import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const IngredientSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'IngredientCategory',
  },
});

IngredientSchema.plugin(timestamps);

export const Ingredient = mongoose.model('Ingredient', IngredientSchema);
export const IngredientTC = composeWithMongoose(Ingredient);
