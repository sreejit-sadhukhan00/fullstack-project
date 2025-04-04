import http from "http";
import { app } from "./app.js";
import { initializeSocket } from "./socket.js";

const port = process.env.PORT || 3000;
const server = http.createServer(app);

initializeSocket(server);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
server.listen(port, () => {
  console.log("listening on port:", port);
});

export default server;