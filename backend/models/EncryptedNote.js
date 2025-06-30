import mongoose, { model, Schema } from "mongoose";

export const noteSchema = new Schema(
  {
    encrypted: { type: String, required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

const EncryptedNote = model("EncryptedNote", noteSchema);
export default EncryptedNote;
