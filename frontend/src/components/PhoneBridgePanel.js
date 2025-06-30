import React, { useState } from "react";
import { connectCall } from "../api/api";
import "./call.css";

const PhoneBridgePanel = () => {
  const [agentNumber, setAgentNumber] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStartCall = async () => {
    if (!agentNumber.trim() || !clientNumber.trim()) {
      setStatus("Please enter both numbers.");
      return;
    }
    setLoading(true);
    setStatus("Initiating call...");
    try {
      const data = await connectCall(agentNumber, clientNumber);

      if (data) {
        setStatus("Call initiated! Call SID: " + data.sid);
      } else {
        setStatus(data.error || "Failed to initiate call.");
      }
    } catch (err) {
      setStatus("Server error.");
    }
    setLoading(false);
  };

  return (
    // <div style={{ padding: 24 }}>
    //   <h3>Bridge Phone Call</h3>
    //   <div style={{ marginBottom: 12 }}>
    //     <label>
    //       Agent Number:
    //       <input
    //         type="tel"
    //         value={agentNumber}
    //         onChange={(e) => setAgentNumber(e.target.value)}
    //         placeholder="+1234567890"
    //         style={{ marginLeft: 8 }}
    //       />
    //     </label>
    //   </div>
    //   <div style={{ marginBottom: 12 }}>
    //     <label>
    //       Client Number:
    //       <input
    //         type="tel"
    //         value={clientNumber}
    //         onChange={(e) => setClientNumber(e.target.value)}
    //         placeholder="+1234567890"
    //         style={{ marginLeft: 8 }}
    //       />
    //     </label>
    //   </div>
    //   <button onClick={handleStartCall} disabled={loading}>
    //     {loading ? "Connecting..." : "Start Call"}
    //   </button>
    //   {status && (
    //     <div
    //       style={{
    //         marginTop: 16,
    //         color: status.startsWith("Call initiated") ? "green" : "red",
    //       }}
    //     >
    //       {status}
    //     </div>
    //   )}
    // </div>
    <div className={`jitsi-room`}>
      <div className="jitsi-heading">Start a Secure Call</div>
      <label>
        Agent Number:
        <input
          type="tel"
          value={agentNumber}
          onChange={(e) => setAgentNumber(e.target.value)}
          placeholder="+1234567890"
        />
      </label>
      <label>
        Client Number:
        <input
          type="tel"
          value={clientNumber}
          onChange={(e) => setClientNumber(e.target.value)}
          placeholder="+1234567890"
        />
      </label>

      <button onClick={handleStartCall} className="call-button">
        <span role="img" aria-label="phone" style={{ marginRight: 10 }}>
          📞
        </span>
        {loading ? "Connecting..." : "Start Call"}
      </button>
      {status && (
        <div
          style={{
            marginTop: 16,
            color: status.startsWith("Call initiated") ? "#8ff7a8" : "red",
          }}
        >
          {status}
        </div>
      )}
      <div style={{ color: "#e0e7ef", marginTop: "18px", fontSize: "1rem" }}>
        Your call will be private and encrypted.
      </div>
    </div>
  );
};

export default PhoneBridgePanel;
