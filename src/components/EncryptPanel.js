import React, { useState } from "react";
import { encryptNote } from "../utils/crypto";

const EncryptPanel = ({ onEncrypt }) => {
  const [note, setNote] = useState("");
  const [key, setKey] = useState("");
  const [encrypted, setEncrypted] = useState("");

  const handleEncrypt = () => {
    const result = encryptNote(note, key);
    setEncrypted(result);
    onEncrypt(result); // share with parent
  };

  return (
    <div>
      <h3>Secure Context Panel</h3>
      <div
        style={{
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Confidential Note"
        />
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Secret Key"
        />
        <button onClick={handleEncrypt}>Encrypt Note</button>
        <textarea value={encrypted} readOnly placeholder="Encrypted String" />
      </div>
    </div>
  );
};

export default EncryptPanel;
