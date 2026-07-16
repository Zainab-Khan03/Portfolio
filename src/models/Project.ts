import { Schema, model, models, type InferSchemaType } from "mongoose";

const ProjectSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    tagline: { type: String, required: true, trim: true },
    excerpt: { type: String, required: true },
    body: { type: String, required: true }, // rich text / markdown for the case-study page
    role: { type: String, default: "" },
    year: { type: String, default: "" },
    stack: { type: [String], default: [] },
    coverImage: { type: String, default: "" }, // Cloudinary URL
    gallery: { type: [String], default: [] }, // Cloudinary URLs
    metrics: {
      type: [
        {
          label: String,
          value: String,
        },
      ],
      default: [],
    },
    links: {
      live: { type: String, default: "" },
      repo: { type: String, default: "" },
    },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export type ProjectDoc = InferSchemaType<typeof ProjectSchema>;

export default models.Project || model("Project", ProjectSchema);
