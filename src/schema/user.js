import { UserTC } from '../models/user';

const UserQuery = {
  userById: UserTC.getResolver('findById'),
  userByIds: UserTC.getResolver('findByIds'),
  userConnection: UserTC.getResolver('connection'),
};

const UserMutation = {
  userUpdateById: UserTC.getResolver('updateById'),
};

export { UserQuery, UserMutation };
