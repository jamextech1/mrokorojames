import mongoose, { Document, Model, Schema } from "mongoose";

interface IProject extends Document {
  name: string;
  desc: string;
  stacks: string;
  link: string;
  github: string;
  image: string;
  imageId: string;
  topRated: boolean;
}

const ProjectSchema: Schema<IProject> = new Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    stacks: { type: String, required: true },
    link: { type: String, required: true },
    github: { type: String, required: true },
    image: { type: String, required: true },
    imageId: { type: String, required: true },
    topRated: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
