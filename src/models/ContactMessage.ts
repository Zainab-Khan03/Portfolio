import { Schema, model, models, type InferSchemaType } from "mongoose";

const ContactMessageSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, default: "", trim: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export type ContactMessageDoc = InferSchemaType<typeof ContactMessageSchema>;

export default models.ContactMessage || model("ContactMessage", ContactMessageSchema);
