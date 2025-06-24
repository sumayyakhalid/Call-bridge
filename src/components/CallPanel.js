// import { useState } from "react";
// import { JitsiMeeting } from "@jitsi/react-sdk";

// const JitsiRoom = ({ roomName = "PleaseUseAGoodRoomName" }) => {
//   const [showMeeting, setShowMeeting] = useState(false);

//   const handleStartCall = () => {
//     setShowMeeting(true);
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       {!showMeeting ? (
//         <button
//           onClick={handleStartCall}
//           style={{
//             fontSize: "24px",
//             padding: "16px 32px",
//             backgroundColor: "#3F6AC9",
//             marginTop: "30px",
//             color: "#fff",
//             border: "none",
//             borderRadius: "8px",
//             cursor: "pointer",
//           }}
//         >
//           Start Call
//         </button>
//       ) : (
//         <JitsiMeeting
//           domain={process.env.REACT_APP_DOMAIN_NAME}
//           roomName={roomName}
//           configOverwrite={{
//             startWithAudioMuted: true,
//             disableModeratorIndicator: true,
//             startScreenSharing: true,
//             enableEmailInStats: false,
//           }}
//           interfaceConfigOverwrite={{
//             DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
//           }}
//           onApiReady={(externalApi) => {
//             console.log("Jitsi API is ready");
//           }}
//           getIFrameRef={(iframeRef) => {
//             iframeRef.style.height = "100vh";
//             iframeRef.style.width = "100%";
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default JitsiRoom;
import { useState } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import "./call.css";

const JitsiRoom = ({ roomName }) => {
  const [showMeeting, setShowMeeting] = useState(false);
  const handleStartCall = () => {
    setShowMeeting(true);
  };

  return (
    <div className={`jitsi-room ${showMeeting ? "active" : ""}`}>
      {!showMeeting ? (
        <>
          <div className="jitsi-heading">Start a Secure Call</div>
          <button onClick={handleStartCall} className="call-button">
            <span role="img" aria-label="phone" style={{ marginRight: 10 }}>
              📞
            </span>
            Start Call
          </button>
          <div
            style={{ color: "#e0e7ef", marginTop: "18px", fontSize: "1rem" }}
          >
            Your call will be private and encrypted.
          </div>
        </>
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
