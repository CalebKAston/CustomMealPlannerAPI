import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const MeasurementSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  display: {
    type: String,
    required: true,
    trim: true,
  },
  weightOunces: Number,
  fluidOunces: Number,
});

MeasurementSchema.plugin(timestamps);

export const Measurement = mongoose.model('Measurement', MeasurementSchema);
export const MeasurementTC = composeWithMongoose(Measurement);
