import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const TagSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
});

TagSchema.plugin(timestamps);

export const Tag = mongoose.model('Tag', TagSchema);
export const TagTC = composeWithMongoose(Tag);
