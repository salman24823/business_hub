import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true }, // Add unique: true if needed
    message: { type: String, required: true },
  },
  { timestamps: true } // Auto-create createdAt & updatedAt fields
);

const formModel = mongoose.models.Form || mongoose.model("Form", formSchema);

export default formModel;
