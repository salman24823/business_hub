import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const newsletterModel =
  mongoose.models.newsletter || mongoose.model("newsletter", newsletterSchema);

export default newsletterModel;
