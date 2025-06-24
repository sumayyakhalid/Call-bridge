import React, { useState } from "react";
import EncryptPanel from "./components/EncryptPanel";
import DecryptPanel from "./components/DecryptPanel";
import { FaLock, FaPhone, FaPhoneAlt, FaUnlock } from "react-icons/fa"; // Using Font Awesome icons
import JitsiRoom from "./components/CallPanel";

const tabList = [
  { key: "call", label: "Call", icon: <FaPhoneAlt /> },
  { key: "encrypt", label: "Encrypt", icon: <FaLock /> },
  { key: "decrypt", label: "Decrypt", icon: <FaUnlock /> },
];

function App() {
  const [activeTab, setActiveTab] = useState("call");
  const [encrypted, setEncrypted] = useState("");

  const renderPanel = () => {
    switch (activeTab) {
      case "encrypt":
        return <EncryptPanel onEncrypt={setEncrypted} />;
      case "call":
        return <JitsiRoom roomName={process.env.REACT_APP_ROOM_NAME} />;
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
      <div
        style={{
          width: 240,
          backgroundColor: "#1e293b",
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

      <div
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            background: "#f1f5f9", // slate-100
            padding: activeTab === "call" ? 0 : "2rem",
            overflow: "hidden",
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
