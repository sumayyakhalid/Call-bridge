import { useState } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

const JitsiRoom = ({ roomName = "PleaseUseAGoodRoomName" }) => {
  const [showMeeting, setShowMeeting] = useState(false);

  const handleStartCall = () => {
    setShowMeeting(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {!showMeeting ? (
        <button
          onClick={handleStartCall}
          style={{
            fontSize: "24px",
            padding: "16px 32px",
            backgroundColor: "#3F6AC9",
            marginTop: "30px",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Start Call
        </button>
      ) : (
        <JitsiMeeting
          domain={process.env.REACT_APP_DOMAIN_NAME}
          roomName={roomName}
          configOverwrite={{
            startWithAudioMuted: true,
            disableModeratorIndicator: true,
            startScreenSharing: true,
            enableEmailInStats: false,
          }}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          }}
          onApiReady={(externalApi) => {
            console.log("Jitsi API is ready");
          }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = "100vh";
            iframeRef.style.width = "100%";
          }}
        />
      )}
    </div>
  );
};

export default JitsiRoom;
