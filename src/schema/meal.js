import { MealTC } from '../models/meal';

const MealQuery = {
  MealById: MealTC.getResolver('findById'),
  MealByIds: MealTC.getResolver('findByIds'),
  MealOne: MealTC.getResolver('findOne'),
  MealMany: MealTC.getResolver('findMany'),
  MealCount: MealTC.getResolver('count'),
  MealConnection: MealTC.getResolver('connection'),
  MealPagination: MealTC.getResolver('pagination'),
};

const MealMutation = {
  MealCreateOne: MealTC.getResolver('createOne'),
  MealCreateMany: MealTC.getResolver('createMany'),
  MealUpdateById: MealTC.getResolver('updateById'),
  MealUpdateOne: MealTC.getResolver('updateOne'),
  MealUpdateMany: MealTC.getResolver('updateMany'),
  MealRemoveById: MealTC.getResolver('removeById'),
  MealRemoveOne: MealTC.getResolver('removeOne'),
  MealRemoveMany: MealTC.getResolver('removeMany'),
};

export { MealQuery, MealMutation };
