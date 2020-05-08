import { RecipeTC } from '../models/recipe';

const RecipeQuery = {
  RecipeById: RecipeTC.getResolver('findById'),
  RecipeByIds: RecipeTC.getResolver('findByIds'),
  RecipeOne: RecipeTC.getResolver('findOne'),
  RecipeMany: RecipeTC.getResolver('findMany'),
  RecipeCount: RecipeTC.getResolver('count'),
  RecipeConnection: RecipeTC.getResolver('connection'),
  RecipePagination: RecipeTC.getResolver('pagination'),
};

const RecipeMutation = {
  RecipeCreateOne: RecipeTC.getResolver('createOne'),
  RecipeCreateMany: RecipeTC.getResolver('createMany'),
  RecipeUpdateById: RecipeTC.getResolver('updateById'),
  RecipeUpdateOne: RecipeTC.getResolver('updateOne'),
  RecipeUpdateMany: RecipeTC.getResolver('updateMany'),
  RecipeRemoveById: RecipeTC.getResolver('removeById'),
  RecipeRemoveOne: RecipeTC.getResolver('removeOne'),
  RecipeRemoveMany: RecipeTC.getResolver('removeMany'),
};

export { RecipeQuery, RecipeMutation };
