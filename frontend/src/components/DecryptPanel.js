import React, { useState } from "react";
import { decryptNote } from "../utils/crypto";
import { FaLockOpen, FaKey } from "react-icons/fa";
import "./decryptPanel.css";

const DecryptPanel = () => {
  const [encrypted, setEncrypted] = useState("");
  const [key, setKey] = useState("");
  const [decrypted, setDecrypted] = useState("");

  const handleDecrypt = () => {
    const result = decryptNote(encrypted, key);
    setDecrypted(result || "❌ Failed to decrypt.");
  };

  return (
    <div className="decrypt-panel">
      <h2>🔍 Verification Panel</h2>

      <div className="decrypt-group">
        <label className="decrypt-label">
          <FaLockOpen style={{ marginRight: 8 }} />
          Encrypted String
        </label>
        <textarea
          rows={4}
          value={encrypted}
          onChange={(e) => setEncrypted(e.target.value)}
          placeholder="Paste the encrypted text here..."
          className="decrypt-textarea"
        />
      </div>

      <div className="decrypt-group">
        <label className="decrypt-label">
          <FaKey style={{ marginRight: 8 }} />
          Secret Key
        </label>
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter the secret key"
          className="decrypt-input"
        />
      </div>

      <div className="decrypt-button-wrapper">
        <button
          onClick={handleDecrypt}
          className="decrypt-button"
          disabled={!encrypted || !key}
        >
          🔓 Decrypt Note
        </button>
      </div>

      {decrypted && (
        <div>
          <label className="decrypt-label" style={{ display: "block" }}>
            Decrypted Note
          </label>
          <textarea
            value={decrypted}
            readOnly
            placeholder="Decrypted output will appear here"
            className="decrypt-textarea decrypt-output"
          />
        </div>
      )}
    </div>
  );
};

export default DecryptPanel;
