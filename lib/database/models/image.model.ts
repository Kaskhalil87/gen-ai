import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string;
  TransformationType: string;
  publicId: string;
  secureUrl: URL;
  width?: number;
  height?: number;
  config?: Record<string, any>;
  transforationUrl?: URL;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const imageSchema = new Schema({
  title: { type: String, required: true },
  TransformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transforationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, dufault: Date.now },
});

const Image = models?.Image || model("Image", imageSchema);

export default Image;
