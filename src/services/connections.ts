// services/connections.ts

import io from 'socket.io-client';
const socket = io('http://localhost:5000');

export const SocketService = {
  onActivityUpdate: (callback: (activity: any) => void) => {
    socket.on('activityUpdate', callback);
  },
  emitActivity: (activity: any) => {
    socket.emit('newActivity', activity);
  }
};
