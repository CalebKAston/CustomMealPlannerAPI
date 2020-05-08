import { MealPlanTC } from '../models/meal-plan';

const MealPlanQuery = {
  MealPlanById: MealPlanTC.getResolver('findById'),
  MealPlanByIds: MealPlanTC.getResolver('findByIds'),
  MealPlanOne: MealPlanTC.getResolver('findOne'),
  MealPlanMany: MealPlanTC.getResolver('findMany'),
  MealPlanCount: MealPlanTC.getResolver('count'),
  MealPlanConnection: MealPlanTC.getResolver('connection'),
  MealPlanPagination: MealPlanTC.getResolver('pagination'),
};

const MealPlanMutation = {
  MealPlanCreateOne: MealPlanTC.getResolver('createOne'),
  MealPlanCreateMany: MealPlanTC.getResolver('createMany'),
  MealPlanUpdateById: MealPlanTC.getResolver('updateById'),
  MealPlanUpdateOne: MealPlanTC.getResolver('updateOne'),
  MealPlanUpdateMany: MealPlanTC.getResolver('updateMany'),
  MealPlanRemoveById: MealPlanTC.getResolver('removeById'),
  MealPlanRemoveOne: MealPlanTC.getResolver('removeOne'),
  MealPlanRemoveMany: MealPlanTC.getResolver('removeMany'),
};

export { MealPlanQuery, MealPlanMutation };
