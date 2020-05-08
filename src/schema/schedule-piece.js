import { SchedulePieceTC } from '../models/schedule-piece';

const SchedulePieceQuery = {
  SchedulePieceById: SchedulePieceTC.getResolver('findById'),
  SchedulePieceByIds: SchedulePieceTC.getResolver('findByIds'),
  SchedulePieceOne: SchedulePieceTC.getResolver('findOne'),
  SchedulePieceMany: SchedulePieceTC.getResolver('findMany'),
  SchedulePieceCount: SchedulePieceTC.getResolver('count'),
  SchedulePieceConnection: SchedulePieceTC.getResolver('connection'),
  SchedulePiecePagination: SchedulePieceTC.getResolver('pagination'),
};

const SchedulePieceMutation = {
  SchedulePieceCreateOne: SchedulePieceTC.getResolver('createOne'),
  SchedulePieceCreateMany: SchedulePieceTC.getResolver('createMany'),
  SchedulePieceUpdateById: SchedulePieceTC.getResolver('updateById'),
  SchedulePieceUpdateOne: SchedulePieceTC.getResolver('updateOne'),
  SchedulePieceUpdateMany: SchedulePieceTC.getResolver('updateMany'),
  SchedulePieceRemoveById: SchedulePieceTC.getResolver('removeById'),
  SchedulePieceRemoveOne: SchedulePieceTC.getResolver('removeOne'),
  SchedulePieceRemoveMany: SchedulePieceTC.getResolver('removeMany'),
};

export { SchedulePieceQuery, SchedulePieceMutation };
