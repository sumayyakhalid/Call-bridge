import React, { useState } from "react";
import EncryptPanel from "./components/EncryptPanel";
import DecryptPanel from "./components/DecryptPanel";
import JitsiRoom from "./components/CallPanel";
import {
  FaLock,
  FaPhone,
  FaPhoneAlt,
  FaStickyNote,
  FaUnlock,
} from "react-icons/fa";
import "./App.css";
import MyNotesPanel from "./components/NotesPanel";
import PhoneBridgePanel from "./components/PhoneBridgePanel";

const oldTabList = [
  { key: "call", label: "Call", icon: <FaPhoneAlt /> },
  { key: "encrypt", label: "Encrypt", icon: <FaLock /> },
  { key: "decrypt", label: "Decrypt", icon: <FaUnlock /> },
];
const currentTabList = [
  { key: "mynotes", label: "My Notes", icon: <FaStickyNote /> },
  { key: "phonebridge", label: "Phone Call", icon: <FaPhoneAlt /> },
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
      case "mynotes":
        return <MyNotesPanel />;
      case "phonebridge":
        return <PhoneBridgePanel />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>🔐 Secure Bridge</h2>
        {oldTabList.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
        <hr style={{ margin: "24px 0 8px 0" }} />
        <h4 style={{ color: "#b1e0f0", margin: "0 0 24px 8px" }}>
          Revised Features
        </h4>
        {currentTabList.map((tab) => (
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
            activeTab === "call" || activeTab === "phonebridge"
              ? "call-panel"
              : ""
          }`}
        >
          {renderPanel()}
        </div>
      </div>
    </div>
  );
}

export default App;
