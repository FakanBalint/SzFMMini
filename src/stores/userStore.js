import axios from 'axios';
import { defineStore } from 'pinia';
import { useErrorStore } from './errorStore';

const userState = {
    username: '',
    password: '',
    userToken:null,

};

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({ ...userState }),

  actions: {

    // post axios request to login user
    async loginUser(loginData) {
        try {
            
            const BASE_URL = 'http://localhost:3000';
            const response = await axios.post(`${BASE_URL}/login`,loginData);
            // Handle the response here
            this.updateUser(response.data);
            
            window.location.href = '/';
        } 
        catch (error) {
            const errorStore = useErrorStore();
            errorStore.setError(error);
        }
    },

    
    // post axios request to register user

    async registerUser() {
        try {
          const registerData = {
            username: this.username,
            password: this.password,
          };
          const BASE_URL = 'http://localhost:3000';
          const response = await axios.post(`${BASE_URL}/register`, registerData);
      
          const responseData = {
            id: response.data.id,
            username: this.username,
            password: this.password,
          };
      
          // Handle the response here
          console.log(responseData); // Modify this line to handle the modified response
      
          window.location.href = '/login';
        } catch (error) {
          const errorStore = useErrorStore();
          errorStore.setError(error);
        }
      },
    updateUser(user) {
      Object.assign(this, user);
    },
    clearUser() {
      Object.assign(this, userState.Token = null);
    },
  },
});
