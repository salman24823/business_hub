import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const testimonialModel =
  mongoose.models.testimonial ||
  mongoose.model("testimonial", testimonialSchema);

export default testimonialModel;
