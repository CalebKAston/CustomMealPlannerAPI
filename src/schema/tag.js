import { TagTC } from '../models/tag';

const TagQuery = {
  TagById: TagTC.getResolver('findById'),
  TagByIds: TagTC.getResolver('findByIds'),
  TagOne: TagTC.getResolver('findOne'),
  TagMany: TagTC.getResolver('findMany'),
  TagCount: TagTC.getResolver('count'),
  TagConnection: TagTC.getResolver('connection'),
  TagPagination: TagTC.getResolver('pagination'),
};

const TagMutation = {
  TagCreateOne: TagTC.getResolver('createOne'),
  TagCreateMany: TagTC.getResolver('createMany'),
  TagUpdateById: TagTC.getResolver('updateById'),
  TagUpdateOne: TagTC.getResolver('updateOne'),
  TagUpdateMany: TagTC.getResolver('updateMany'),
  TagRemoveById: TagTC.getResolver('removeById'),
  TagRemoveOne: TagTC.getResolver('removeOne'),
  TagRemoveMany: TagTC.getResolver('removeMany'),
};

export { TagQuery, TagMutation };
