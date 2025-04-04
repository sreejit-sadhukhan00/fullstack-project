import { Server } from "socket.io";
import { User } from "./models/user.model.js";
import { Captain } from "./models/captain.model.js";

let io;

export function initializeSocket(server) {
  io = new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN,
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    socket.on("join", async (data) => {
      const { userId, userType } = data;

      if (userType === "user") {
        const user = await User.findById(userId);
        user.socketId = socket.id;
        await user.save();
      } else if (userType === "captain") {
        const captain = await Captain.findById(userId);
        captain.socketId = socket.id;
        await captain.save();
      }
    });

  socket.on('update-location-captain',async(data)=>{
    const {userId,location}=data;
    console.log(location)
      if (!location ||  ! location.ltd || ! location.lng ) {
        socket.emit('error', { message: 'Invalid location data' });
        return;
      }
      
    const captaintoupdate=await Captain.findById(userId);

    if (captaintoupdate) {
      captaintoupdate.location = {
        ltd: location.ltd,
        lng: location.lng
      };
      await captaintoupdate.save();
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
