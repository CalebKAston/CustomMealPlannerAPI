import { ScheduleTC } from '../models/schedule';

const ScheduleQuery = {
  ScheduleById: ScheduleTC.getResolver('findById'),
  ScheduleByIds: ScheduleTC.getResolver('findByIds'),
  ScheduleOne: ScheduleTC.getResolver('findOne'),
  ScheduleMany: ScheduleTC.getResolver('findMany'),
  ScheduleCount: ScheduleTC.getResolver('count'),
  ScheduleConnection: ScheduleTC.getResolver('connection'),
  SchedulePagination: ScheduleTC.getResolver('pagination'),
};

const ScheduleMutation = {
  ScheduleCreateOne: ScheduleTC.getResolver('createOne'),
  ScheduleCreateMany: ScheduleTC.getResolver('createMany'),
  ScheduleUpdateById: ScheduleTC.getResolver('updateById'),
  ScheduleUpdateOne: ScheduleTC.getResolver('updateOne'),
  ScheduleUpdateMany: ScheduleTC.getResolver('updateMany'),
  ScheduleRemoveById: ScheduleTC.getResolver('removeById'),
  ScheduleRemoveOne: ScheduleTC.getResolver('removeOne'),
  ScheduleRemoveMany: ScheduleTC.getResolver('removeMany'),
};

export { ScheduleQuery, ScheduleMutation };
