import React, { useState } from "react";
import EncryptPanel from "./components/EncryptPanel";
import CallPanel from "./components/CallPanel";
import DecryptPanel from "./components/DecryptPanel";

function App() {
  const [encrypted, setEncrypted] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>🔐 Secure Call Bridge</h2>
      <EncryptPanel onEncrypt={setEncrypted} />
      <hr />
      <CallPanel />
      <hr />
      <DecryptPanel />
    </div>
  );
}

export default App;
