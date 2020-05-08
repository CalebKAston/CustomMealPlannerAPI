import { IngredientCategoryTC } from '../models/ingredient-category';

const IngredientCategoryQuery = {
  IngredientCategoryById: IngredientCategoryTC.getResolver('findById'),
  IngredientCategoryByIds: IngredientCategoryTC.getResolver('findByIds'),
  IngredientCategoryOne: IngredientCategoryTC.getResolver('findOne'),
  IngredientCategoryMany: IngredientCategoryTC.getResolver('findMany'),
  IngredientCategoryCount: IngredientCategoryTC.getResolver('count'),
  IngredientCategoryConnection: IngredientCategoryTC.getResolver('connection'),
  IngredientCategoryPagination: IngredientCategoryTC.getResolver('pagination'),
};

const IngredientCategoryMutation = {
  IngredientCategoryCreateOne: IngredientCategoryTC.getResolver('createOne'),
  IngredientCategoryCreateMany: IngredientCategoryTC.getResolver('createMany'),
  IngredientCategoryUpdateById: IngredientCategoryTC.getResolver('updateById'),
  IngredientCategoryUpdateOne: IngredientCategoryTC.getResolver('updateOne'),
  IngredientCategoryUpdateMany: IngredientCategoryTC.getResolver('updateMany'),
  IngredientCategoryRemoveById: IngredientCategoryTC.getResolver('removeById'),
  IngredientCategoryRemoveOne: IngredientCategoryTC.getResolver('removeOne'),
  IngredientCategoryRemoveMany: IngredientCategoryTC.getResolver('removeMany'),
};

export { IngredientCategoryQuery, IngredientCategoryMutation };
