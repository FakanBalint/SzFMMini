import { defineStore } from 'pinia';

const userTreeConnectionState = {
  UserID: '',
  TreeID: 0,
};

export const useUserTreeConnectionStore = defineStore({
  id: 'userTreeConnection',
  state: () => ({ ...userTreeConnectionState }),

  actions: {
    updateUserTreeConnection(connection) {
      Object.assign(this, connection);
    },
    clearUserTreeConnection() {
      Object.assign(this, userTreeConnectionState);
    },
  },
});
