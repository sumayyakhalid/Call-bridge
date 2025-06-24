import React, { useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";

const CallPanel = () => {
  const [agentNumber, setAgentNumber] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleConnect = async () => {
    setStatus("🔄 Connecting call...");
    try {
      const res = await axios.post("http://localhost:5000/api/connect-call", {
        agentNumber,
        clientNumber,
      });
      if (res.data.success) setStatus("✅ Call connected!");
      else setStatus("❌ Failed to connect.");
    } catch (err) {
      setStatus("❌ Call failed.");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2
        style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "#0f172a" }}
      >
        📞 Call Connection Panel
      </h2>

      {/* Agent Input */}
      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          <FaUserAlt style={{ marginRight: 8 }} />
          Your Number
        </label>
        <input
          type="tel"
          value={agentNumber}
          onChange={(e) => setAgentNumber(e.target.value)}
          placeholder="+92 3xx xxx xxxx"
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "1px solid #cbd5e1",
            borderRadius: 8,
            fontSize: "1rem",
          }}
        />
      </div>

      {/* Client Input */}
      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          <FaPhoneAlt style={{ marginRight: 8 }} />
          Client Number
        </label>
        <input
          type="tel"
          value={clientNumber}
          onChange={(e) => setClientNumber(e.target.value)}
          placeholder="+92 3xx xxx xxxx"
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "1px solid #cbd5e1",
            borderRadius: 8,
            fontSize: "1rem",
          }}
        />
      </div>

      {/* Connect Button */}
      <div style={{ textAlign: "right", marginBottom: "1.5rem" }}>
        <button
          onClick={handleConnect}
          style={{
            backgroundColor: "#10b981", // emerald-500
            color: "#fff",
            padding: "0.6rem 1.2rem",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          🔗 Connect Call
        </button>
      </div>

      {/* Status Message */}
      {status && (
        <div
          style={{
            backgroundColor: "#f1f5f9",
            padding: "0.75rem 1rem",
            borderRadius: 8,
            color: "#0f172a",
            fontWeight: 500,
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          {status}
        </div>
      )}
    </div>
  );
};

export default CallPanel;
