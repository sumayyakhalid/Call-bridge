import React, { useState } from "react";
import axios from "axios";

const CallPanel = () => {
  const [agentNumber, setAgentNumber] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleConnect = async () => {
    setStatus("Connecting call...");
    try {
      const res = await axios.post("http://localhost:5000/api/connect-call", {
        agentNumber,
        clientNumber,
      });
      if (res.data.success) setStatus("Call connected!");
      else setStatus("Failed to connect.");
    } catch (err) {
      setStatus("Call failed.");
    }
  };

  return (
    <div>
      <h3>Call Connection Panel</h3>
      <input
        type="tel"
        value={agentNumber}
        onChange={(e) => setAgentNumber(e.target.value)}
        placeholder="Your Number"
      />
      <input
        type="tel"
        value={clientNumber}
        onChange={(e) => setClientNumber(e.target.value)}
        placeholder="Client's Number"
      />
      <button onClick={handleConnect}>Connect Call</button>
      <p>{status}</p>
    </div>
  );
};

export default CallPanel;
