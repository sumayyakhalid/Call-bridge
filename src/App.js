import React, { useState } from "react";
import EncryptPanel from "./components/EncryptPanel";
import CallPanel from "./components/CallPanel";
import DecryptPanel from "./components/DecryptPanel";
import { FaLock, FaPhone, FaPhoneAlt, FaUnlock } from "react-icons/fa"; // Using Font Awesome icons

const tabList = [
  { key: "encrypt", label: "Encrypt", icon: <FaLock /> },
  { key: "call", label: "Call", icon: <FaPhoneAlt /> },
  { key: "decrypt", label: "Decrypt", icon: <FaUnlock /> },
];

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
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Segoe UI, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 240,
          backgroundColor: "#1e293b", // slate-800
          color: "#fff",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ marginBottom: "2rem", color: "#38bdf8" }}>
          🔐 Secure Bridge
        </h2>

        {tabList.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              backgroundColor:
                activeTab === tab.key ? "#38bdf8" : "transparent",
              color: activeTab === tab.key ? "#000" : "#fff",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              marginBottom: "0.5rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "0.2s ease",
            }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "2rem",
          backgroundColor: "#fff",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            background: "#f1f5f9", // slate-100
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          {renderPanel()}
        </div>
      </div>
    </div>
  );
}

export default App;
