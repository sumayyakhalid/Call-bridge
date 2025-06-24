import React, { useState } from "react";
import { decryptNote } from "../utils/crypto";

const DecryptPanel = () => {
  const [encrypted, setEncrypted] = useState("");
  const [key, setKey] = useState("");
  const [decrypted, setDecrypted] = useState("");

  const handleDecrypt = () => {
    const result = decryptNote(encrypted, key);
    setDecrypted(result || "Failed to decrypt.");
  };

  return (
    <div>
      <h3>Verification Panel</h3>
      <div
        style={{
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <textarea
          value={encrypted}
          onChange={(e) => setEncrypted(e.target.value)}
          placeholder="Paste Encrypted String"
        />
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Secret Key"
        />
        <button onClick={handleDecrypt}>Decrypt</button>
        <textarea value={decrypted} readOnly placeholder="Decrypted Note" />
      </div>
    </div>
  );
};

export default DecryptPanel;
