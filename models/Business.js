const { model, Schema } = require("mongoose");

const businessSchema = new Schema(
  {
    businessName: {
      type: String,
      required: [true, "Business name required."],
    },
    phoneNumber: {
      type: Number,
      trim: true,
      required: [true, "Phone number required."],
    },
    additionalPhoneNumber: {
      type: Number,
      trim: true,
      required: false,
    },
    email: {
      type: String,
      trim: true,
      required: false,
    },
    description: {
      type: String,
      required: [true, "Description required."],
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: [true, "Category required"],
    },
    addressLine1: {
      type: String,
      required: [true, "Address required"],
    },
    addressLine2: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = model("Business", businessSchema);
