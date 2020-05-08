import { RecipeCategoryTC } from '../models/recipe-category';

const RecipeCategoryQuery = {
  RecipeCategoryById: RecipeCategoryTC.getResolver('findById'),
  RecipeCategoryByIds: RecipeCategoryTC.getResolver('findByIds'),
  RecipeCategoryOne: RecipeCategoryTC.getResolver('findOne'),
  RecipeCategoryMany: RecipeCategoryTC.getResolver('findMany'),
  RecipeCategoryCount: RecipeCategoryTC.getResolver('count'),
  RecipeCategoryConnection: RecipeCategoryTC.getResolver('connection'),
  RecipeCategoryPagination: RecipeCategoryTC.getResolver('pagination'),
};

const RecipeCategoryMutation = {
  RecipeCategoryCreateOne: RecipeCategoryTC.getResolver('createOne'),
  RecipeCategoryCreateMany: RecipeCategoryTC.getResolver('createMany'),
  RecipeCategoryUpdateById: RecipeCategoryTC.getResolver('updateById'),
  RecipeCategoryUpdateOne: RecipeCategoryTC.getResolver('updateOne'),
  RecipeCategoryUpdateMany: RecipeCategoryTC.getResolver('updateMany'),
  RecipeCategoryRemoveById: RecipeCategoryTC.getResolver('removeById'),
  RecipeCategoryRemoveOne: RecipeCategoryTC.getResolver('removeOne'),
  RecipeCategoryRemoveMany: RecipeCategoryTC.getResolver('removeMany'),
};

export { RecipeCategoryQuery, RecipeCategoryMutation };
