import React, { useState } from "react";
import { encryptNote } from "../utils/crypto";
import { FaKey, FaStickyNote } from "react-icons/fa";
import "./encryptPanel.css";

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
    <div className="encrypt-panel">
      <h2>📝 Secure Context Panel</h2>

      <div className="encrypt-group">
        <label className="encrypt-label">
          <FaStickyNote style={{ marginRight: 8 }} />
          Confidential Note
        </label>
        <textarea
          rows={4}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your message here..."
          className="encrypt-textarea"
        />
      </div>

      <div className="encrypt-group">
        <label className="encrypt-label">
          <FaKey style={{ marginRight: 8 }} />
          Secret Key
        </label>
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter secret key"
          className="encrypt-input"
        />
      </div>

      <div className="encrypt-button-wrapper">
        <button
          onClick={handleEncrypt}
          disabled={!note || !key}
          className="encrypt-button"
        >
          🔐 Encrypt Note
        </button>
      </div>

      <div>
        <label className="encrypt-label" style={{ display: "block" }}>
          Encrypted String
        </label>
        <textarea
          value={encrypted}
          readOnly
          placeholder="Result will appear here"
          className="encrypt-textarea encrypt-output"
        />
      </div>
    </div>
  );
};

export default EncryptPanel;
