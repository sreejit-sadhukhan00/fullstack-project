import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_BASE_URL || "http://localhost:5000", {
      withCredentials: true,
      transports: ["websocket"],
    });

    newSocket.on("connect", () => console.log("✅ Connected to socket server"));
    newSocket.on("disconnect", () => console.log("❌ Disconnected from socket server"));
    newSocket.on("connect_error", (err) => console.error("⚠️ Socket error:", err.message));
    newSocket.on("reconnect_attempt", () => console.log("🔄 Attempting to reconnect..."));

    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const sendMessage = (eventName, message) => {
    if (socket) socket.emit(eventName, message);
  };

  const receiveMessage = (eventName, callback) => {
    if (socket) {
      socket.off(eventName); // ✅ Prevent duplicate listeners
      socket.on(eventName, callback);
    }
  };

  return (
    <SocketContext.Provider value={{ sendMessage, receiveMessage,socket,setSocket}}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
