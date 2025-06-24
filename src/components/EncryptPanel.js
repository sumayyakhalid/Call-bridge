import React, { useState } from "react";
import { encryptNote } from "../utils/crypto";
import { FaKey, FaStickyNote } from "react-icons/fa";

const EncryptPanel = ({ onEncrypt }) => {
  const [note, setNote] = useState("");
  const [key, setKey] = useState("");
  const [encrypted, setEncrypted] = useState("");

  const handleEncrypt = () => {
    const result = encryptNote(note, key);
    setEncrypted(result);
    onEncrypt(result);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2
        style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#0f172a" }}
      >
        📝 Secure Context Panel
      </h2>

      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          <FaStickyNote style={{ marginRight: 8 }} />
          Confidential Note
        </label>
        <textarea
          rows={4}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your message here..."
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "1px solid #cbd5e1",
            borderRadius: 8,
            resize: "vertical",
            fontSize: "1rem",
          }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          <FaKey style={{ marginRight: 8 }} />
          Secret Key
        </label>
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter secret key"
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "1px solid #cbd5e1",
            borderRadius: 8,
            fontSize: "1rem",
          }}
        />
      </div>

      <div style={{ textAlign: "right", marginBottom: "1.5rem" }}>
        <button
          onClick={handleEncrypt}
          disabled={!note || !key}
          style={{
            backgroundColor: !note || !key ? "#94a3b8" : "#38bdf8", // gray when disabled
            color: "#fff",
            padding: "0.6rem 1.2rem",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            cursor: !note || !key ? "not-allowed" : "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            opacity: !note || !key ? 0.6 : 1,
          }}
        >
          🔐 Encrypt Note
        </button>
      </div>

      <div>
        <label style={{ fontWeight: 600, marginBottom: 6, display: "block" }}>
          Encrypted String
        </label>
        <textarea
          value={encrypted}
          readOnly
          placeholder="Result will appear here"
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "1px solid #cbd5e1",
            borderRadius: 8,
            resize: "vertical",
            backgroundColor: "#f1f5f9",
            fontSize: "1rem",
          }}
        />
      </div>
    </div>
  );
};

export default EncryptPanel;
