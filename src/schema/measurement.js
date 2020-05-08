import { MeasurementTC } from '../models/measurement';

const MeasurementQuery = {
  MeasurementById: MeasurementTC.getResolver('findById'),
  MeasurementByIds: MeasurementTC.getResolver('findByIds'),
  MeasurementOne: MeasurementTC.getResolver('findOne'),
  MeasurementMany: MeasurementTC.getResolver('findMany'),
  MeasurementCount: MeasurementTC.getResolver('count'),
  MeasurementConnection: MeasurementTC.getResolver('connection'),
  MeasurementPagination: MeasurementTC.getResolver('pagination'),
};

const MeasurementMutation = {
  MeasurementCreateOne: MeasurementTC.getResolver('createOne'),
  MeasurementCreateMany: MeasurementTC.getResolver('createMany'),
  MeasurementUpdateById: MeasurementTC.getResolver('updateById'),
  MeasurementUpdateOne: MeasurementTC.getResolver('updateOne'),
  MeasurementUpdateMany: MeasurementTC.getResolver('updateMany'),
  MeasurementRemoveById: MeasurementTC.getResolver('removeById'),
  MeasurementRemoveOne: MeasurementTC.getResolver('removeOne'),
  MeasurementRemoveMany: MeasurementTC.getResolver('removeMany'),
};

export { MeasurementQuery, MeasurementMutation };
