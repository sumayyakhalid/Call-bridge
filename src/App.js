import React, { useState } from "react";
import EncryptPanel from "./components/EncryptPanel";
import CallPanel from "./components/CallPanel";
import DecryptPanel from "./components/DecryptPanel";

function App() {
  const [activeTab, setActiveTab] = useState("encrypt");
  const [encrypted, setEncrypted] = useState("");

  const renderPanel = () => {
    switch (activeTab) {
      case "encrypt":
        return <EncryptPanel onEncrypt={setEncrypted} />;
      case "call":
        return <CallPanel encryptedData={encrypted} />;
      case "decrypt":
        return <DecryptPanel encryptedData={encrypted} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Sidebar */}
      <div
        style={{
          width: 200,
          backgroundColor: "#f4f4f4",
          padding: 20,
          borderRight: "1px solid #ddd",
        }}
      >
        <h3>🔐 Secure Call</h3>
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 20,
          }}
        >
          {/* <button onClick={() => setActiveTab("encrypt")}>Encrypt</button> */}
          <button
            onClick={() => setActiveTab("encrypt")}
            style={{
              backgroundColor: activeTab === "encrypt" ? "#ddd" : "transparent",
              border: "none",
              textAlign: "left",
              padding: "8px 12px",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Encrypt
          </button>

          {/* <button onClick={() => setActiveTab("call")}>Call</button> */}
          <button
            onClick={() => setActiveTab("call")}
            style={{
              backgroundColor: activeTab === "call" ? "#ddd" : "transparent",
              border: "none",
              textAlign: "left",
              padding: "8px 12px",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Call
          </button>

          <button onClick={() => setActiveTab("decrypt")}>Decrypt</button>
        </nav>
      </div>

      {/* Main Panel */}
      <div style={{ flex: 1, padding: 20 }}>{renderPanel()}</div>
    </div>
  );
}

export default App;
