import { defineStore } from 'pinia';

const userState = {
  UID: '',
  Username: '',
  Password: '',
  Last_login: null,
  Date_joined: null,
  PlantedTrees: 0,
};

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({ ...userState }),

  actions: {
    updateUser(user) {
      Object.assign(this, user);
    },
    clearUser() {
      Object.assign(this, userState);
    },
  },
});
