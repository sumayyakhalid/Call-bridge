import React, { useState } from "react";
import EncryptPanel from "./components/EncryptPanel";
import DecryptPanel from "./components/DecryptPanel";
import JitsiRoom from "./components/CallPanel";
import { FaLock, FaPhoneAlt, FaUnlock } from "react-icons/fa";
import "./App.css";

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
    <div className="app-container">
      <div className="sidebar">
        <h2>🔐 Secure Bridge</h2>
        {tabList.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="panel-container">
        <div
          className={`panel-wrapper ${
            activeTab === "call" ? "call-panel" : ""
          }`}
        >
          {renderPanel()}
        </div>
      </div>
    </div>
  );
}

export default App;
