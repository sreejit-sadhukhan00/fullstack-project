# 🚗 RideShare Pro - Real-time Ride Sharing Platform 🌟

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Roboto&weight=700&size=30&duration=3000&pause=1000&color=1F8BF7&center=true&vCenter=true&width=500&lines=Welcome+to+RideShare+Pro!;Real-time+Ride+Sharing;Track+Your+Ride+Live;Connect+with+Captains" alt="Typing SVG" />
</div>

![RideShare Banner](./client/public/360_F_471467270_wdaTtaF6QWhqILrY0LGUZvpIXOtVEgGP.jpg)

<div align="center">

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=20232A)](https://reactjs.org/)
[![Powered by Node.js](https://img.shields.io/badge/Powered%20by-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=20232A)](https://nodejs.org/)
[![Real-time with Socket.IO](https://img.shields.io/badge/Real--time-Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white&labelColor=20232A)](https://socket.io/)

<img src="https://img.shields.io/github/stars/sreejit-sadhukhan00/fullstack-project?style=for-the-badge&color=yellow" alt="stars"/>
<img src="https://img.shields.io/github/forks/sreejit-sadhukhan00/fullstack-project?style=for-the-badge&color=orange" alt="forks"/>

<!-- Activity Animation -->
<img src="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake.svg" alt="Snake animation" />

</div>

## ✨ Features

- 🔐 **Secure Authentication** - Separate login/signup for users and captains
- 📍 **Real-time Location Tracking** - Live tracking of rides and drivers
- 🗺️ **Interactive Maps** - Location search and route visualization
- 🚦 **Live Ride Status** - Real-time updates on ride status and driver location
- 👨‍✈️ **Captain Management** - Dedicated captain portal and ride management
- 🔄 **Socket Integration** - Real-time communication between users and drivers

## 🏗️ Architecture

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png" alt="separator">
</div>

### Frontend (Client) 🎨
- Built with **React + Vite** for optimal performance
- **Tailwind CSS** for modern and responsive design
- **Context API** for state management
- Real-time updates using **Socket.IO Client**
- Protected routes for both users and captains

### Backend (Server) ⚙️
- **Node.js** and **Express.js** backend
- **MongoDB** for database management
- **Socket.IO** for real-time bi-directional communication
- JWT-based authentication
- MVC architecture with:
  - 🎮 Controllers
  - 📦 Models
  - 🛣️ Routes
  - 🔧 Services
  - 🛠️ Middlewares

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/rideshare-pro.git
   cd rideshare-pro
   ```

2. **Install dependencies**
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # In server directory
   cp .env.example .env
   # Configure your environment variables
   ```

4. **Start the application**
   ```bash
   # Start server
   cd server
   npm start

   # Start client
   cd client
   npm run dev
   ```

## 🌟 Key Components

### User Features 👤
- User registration and authentication
- Location search and ride booking
- Real-time driver tracking
- Ride history and status

### Captain Features 👨‍✈️
- Captain registration and verification
- Ride accept/reject functionality
- Navigation and route optimization
- Ride completion and history

### Real-time Features ⚡
- Live location updates
- Instant ride notifications
- Real-time chat between user and captain
- Live ride status updates

## 🔧 Technical Stack

### Frontend
- ⚛️ React.js
- 🎨 Tailwind CSS
- 📍 Maps Integration
- 🔄 Socket.IO Client

### Backend
- 🟢 Node.js
- 🚂 Express.js
- 🗄️ MongoDB
- 🔌 Socket.IO

## 📱 Screenshots

[Add your application screenshots here]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community

---

