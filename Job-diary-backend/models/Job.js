import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const jobSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    platform: { type: String, required: true },
    companyName: { type: String, required: true },
    role: { type: String, required: true },
    package: { type: String },
    location: { type: String },
    applicationDate: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ['Applied', 'Interviewing', 'Offered', 'Rejected', 'Accepted'],
      default: 'Applied',
    },
    notes: { type: String },
  },
  { timestamps: true }
);

export default model('Job', jobSchema);