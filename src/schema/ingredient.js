import { IngredientTC } from '../models/ingredient';

const IngredientQuery = {
  IngredientById: IngredientTC.getResolver('findById'),
  IngredientByIds: IngredientTC.getResolver('findByIds'),
  IngredientOne: IngredientTC.getResolver('findOne'),
  IngredientMany: IngredientTC.getResolver('findMany'),
  IngredientCount: IngredientTC.getResolver('count'),
  IngredientConnection: IngredientTC.getResolver('connection'),
  IngredientPagination: IngredientTC.getResolver('pagination'),
};

const IngredientMutation = {
  IngredientCreateOne: IngredientTC.getResolver('createOne'),
  IngredientCreateMany: IngredientTC.getResolver('createMany'),
  IngredientUpdateById: IngredientTC.getResolver('updateById'),
  IngredientUpdateOne: IngredientTC.getResolver('updateOne'),
  IngredientUpdateMany: IngredientTC.getResolver('updateMany'),
  IngredientRemoveById: IngredientTC.getResolver('removeById'),
  IngredientRemoveOne: IngredientTC.getResolver('removeOne'),
  IngredientRemoveMany: IngredientTC.getResolver('removeMany'),
};

export { IngredientQuery, IngredientMutation };
