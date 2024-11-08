const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const activityRoutes = require('./routes/activityRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/visualize-ascii', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());
app.use('/api/activities', activityRoutes);

// Socket.IO setup for real-time communication
io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('activity', (data) => {
    io.emit('activity-update', data);
  });
  
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
