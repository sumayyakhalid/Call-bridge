import React, { useEffect, useState } from "react";
import { fetchNotes, saveNote } from "../api/api";

const MyNotesPanel = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all notes for demonstration (in real app, use user auth)
  const loadNotes = async () => {
    setLoading(true);
    try {
      console.log("hitting");
      const data = await fetchNotes();
      console.log("data", data);
      setNotes(data.encrypted);
    } catch {
      setNotes([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleSave = async () => {
    if (!note.trim()) return;
    setLoading(true);
    await saveNote(note);
    setNote("");
    loadNotes();
  };

  return (
    <div style={{ padding: 24 }}>
      <h3>My Notes</h3>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note..."
        rows={3}
        style={{ width: "100%", marginBottom: 8 }}
      />
      <button onClick={handleSave} disabled={loading || !note.trim()}>
        Save Note
      </button>
      <hr style={{ margin: "24px 0" }} />
      <h4>Saved Notes</h4>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {notes.map((n) => (
            <li key={n._id} style={{ marginBottom: 8 }}>
              {n.note}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyNotesPanel;
