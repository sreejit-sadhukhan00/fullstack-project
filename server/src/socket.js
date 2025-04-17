import { Server } from "socket.io";
import { User } from "./models/user.model.js";
import { Captain } from "./models/captain.model.js";

let io;

export function initializeSocket(server) {
  io = new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN || "http://localhost:5173/"||"https://taxigo-sand.vercel.app/",
      methods: ["GET", "POST"],
      credentials: true,
    },
    transports: ["websocket", "polling"]
  });

  io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);

    socket.on("join", async (data) => {
      try {
        const { userId, userType } = data;

        if (userType === "user") {
          const user = await User.findById(userId);
          if (user) {
            user.socketId = socket.id;
            await user.save();
            console.log(`User ${userId} joined with socket ${socket.id}`);
          }
        } else if (userType === "captain") {
          const captain = await Captain.findById(userId);
          if (captain) {
            captain.socketId = socket.id;
            await captain.save();
            console.log(`Captain ${userId} joined with socket ${socket.id}`);
          }
        }
      } catch (error) {
        console.error("Error in join event:", error);
      }
    });

    socket.on('update-location-captain', async(data) => {
      try {
        const {userId, location} = data;
        if (!location || !location.ltd || !location.lng) {
          socket.emit('error', { message: 'Invalid location data' });
          return;
        }
        
        const captainToUpdate = await Captain.findById(userId);
        if (captainToUpdate) {
          captainToUpdate.location = {
            ltd: location.ltd,
            lng: location.lng
          };
          await captainToUpdate.save();
          console.log(`Updated location for captain ${userId}`);
        }
      } catch (error) {
        console.error("Error updating captain location:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
}

export function sendMessageToSocketId(socketId, messageObj) {
  if (io) {
    io.to(socketId).emit(messageObj.event, messageObj.data);
  } else {
    console.error("Socket.io is not initialized");
  }
}