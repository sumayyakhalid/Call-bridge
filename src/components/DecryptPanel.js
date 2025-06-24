import React, { useState } from "react";
import { decryptNote } from "../utils/crypto";
import { FaLockOpen, FaKey } from "react-icons/fa";

const DecryptPanel = () => {
  const [encrypted, setEncrypted] = useState("");
  const [key, setKey] = useState("");
  const [decrypted, setDecrypted] = useState("");

  const handleDecrypt = () => {
    const result = decryptNote(encrypted, key);
    setDecrypted(result || "❌ Failed to decrypt.");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2
        style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "#0f172a" }}
      >
        🔍 Verification Panel
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
          <FaLockOpen style={{ marginRight: 8 }} />
          Encrypted String
        </label>
        <textarea
          rows={4}
          value={encrypted}
          onChange={(e) => setEncrypted(e.target.value)}
          placeholder="Paste the encrypted text here..."
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
          placeholder="Enter the secret key"
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
          onClick={handleDecrypt}
          style={{
            backgroundColor: "#f59e0b",
            color: "#fff",
            padding: "0.6rem 1.2rem",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          🔓 Decrypt Note
        </button>
      </div>

      {/* Output */}
      {decrypted && (
        <div>
          <label style={{ fontWeight: 600, marginBottom: 6, display: "block" }}>
            Decrypted Note
          </label>
          <textarea
            value={decrypted}
            readOnly
            placeholder="Decrypted output will appear here"
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
      )}
    </div>
  );
};

export default DecryptPanel;
