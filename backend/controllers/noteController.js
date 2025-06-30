import { asyncMiddleware } from "../middlewares/asyncMiddleware.js";
import EncryptedNote from "../models/EncryptedNote.js";
import { decryptNote, encryptNote } from "../utils/crypto.js";

const STATIC_USER_ID = "SecureUser123";

export const createNote = asyncMiddleware(async (req, res) => {
  try {
    const { note } = req.body; // plain text from frontend
    const encrypted = encryptNote(note);
    const encryptedNote = new EncryptedNote({
      encrypted,
      userId: STATIC_USER_ID,
    });
    await encryptedNote.save();
    res.status(201).json({ message: "Notes have been saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to store note." });
  }
});

export const getNote = asyncMiddleware(async (req, res) => {
  try {
    const notes = await EncryptedNote.find({ userId: STATIC_USER_ID });
    if (!notes) return res.status(404).json({ error: "Note not found." });
    const decryptedNotes = notes.map((note) => ({
      _id: note._id,
      note: decryptNote(note.encrypted),
      createdAt: note.createdAt,
    }));
    res.json({ encrypted: decryptedNotes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve note." });
  }
});
