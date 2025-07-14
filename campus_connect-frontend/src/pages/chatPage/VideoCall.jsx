// import React, { useEffect, useRef, useState } from "react";
// import Peer from "simple-peer";

// const VideoCall = ({ socket, myId, ...props }) => {
//   const [callAccepted, setCallAccepted] = useState(false);
//   const [callEnded, setCallEnded] = useState(false);
//   const [stream, setStream] = useState();
//   const [call, setCall] = useState({});

//   const myVideo = useRef();
//   const userVideo = useRef();
//   const connectionRef = useRef();

//   useEffect(() => {
//     // Request camera and microphone permissions
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((currentStream) => {
//         setStream(currentStream);
//         if (myVideo.current) {
//           myVideo.current.srcObject = currentStream;
//         }
//       });

//     // Listen for incoming calls
//     socket.on("callIncoming", ({ from, name: callerName, signal }) => {
//       setCall({ isReceivingCall: true, from, name: callerName, signal });
//     });

//     // Handle call ended
//     socket.on("callEnded", () => {
//       setCallEnded(true);
//       connectionRef.current?.destroy();
//       window.location.reload();
//     });
//   }, []);

//   // Function to call another user
//   const callUser = (id) => {
//     const peer = new Peer({
//       initiator: true,
//       trickle: false,
//       stream: stream,
//     });

//     peer.on("signal", (data) => {
//       socket.emit("callUser", {
//         userToCall: id,
//         signalData: data,
//         from: myId,
//         name: props.name,
//       });
//     });

//     peer.on("stream", (currentStream) => {
//       userVideo.current.srcObject = currentStream;
//     });

//     socket.on("callAccepted", (signal) => {
//       setCallAccepted(true);
//       peer.signal(signal);
//     });

//     connectionRef.current = peer;
//   };

//   // Function to answer an incoming call
//   const answerCall = () => {
//     setCallAccepted(true);

//     const peer = new Peer({
//       initiator: false,
//       trickle: false,
//       stream: stream,
//     });

//     peer.on("signal", (data) => {
//       socket.emit("answerCall", { signal: data, to: call.from });
//     });

//     peer.on("stream", (currentStream) => {
//       userVideo.current.srcObject = currentStream;
//     });

//     peer.signal(call.signal);
//     connectionRef.current = peer;
//   };

//   // Function to end the call
//   const leaveCall = () => {
//     setCallEnded(true);
//     socket.emit("endCall", { to: call.from });
//     connectionRef.current.destroy();
//     window.location.reload();
//   };

//   return (
//     <div className="video-container">
//       {/* Your video */}
//       <div className="video">
//         {stream && <video playsInline muted ref={myVideo} autoPlay />}
//       </div>

//       {/* Other participant's video */}
//       <div className="video">
//         {callAccepted && !callEnded && (
//           <video playsInline ref={userVideo} autoPlay />
//         )}
//       </div>

//       {/* Call controls */}
//       <div className="call-controls">
//         {callAccepted && !callEnded ? (
//           <button onClick={leaveCall}>End Call</button>
//         ) : (
//           <button onClick={() => callUser(props.idToCall)}>Call User</button>
//         )}

//         {call.isReceivingCall && !callAccepted && (
//           <div className="incoming-call">
//             <h1>{call.name} is calling:</h1>
//             <button onClick={answerCall}>Answer</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoCall;
