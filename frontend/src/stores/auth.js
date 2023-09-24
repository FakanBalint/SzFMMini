import {defineStore} from "pinia";
import axios from "axios";
import {useErrorsStore} from "./errors";
import router from '../router';

const api_host = 'https://localhost:8000';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        username: null,
        token: null
    }),

    actions: {


        setUserName(username) {
            this.username = username;
        },
        setToken(token) {
            this.token = token;
        },

        async login(loginData) {
            try {
                const url_login = `${api_host}/api/login`;
                const response = await axios.post(url_login, loginData);
                this.setUserName(loginData.username);
                this.setToken(response.data);
                await router.push('/main');
            } catch (err) {
                const storeErrors = useErrorsStore();
                const error = {
                    message: err.message,
                    message_public: 'A belépés sikertelen!'
                };
                storeErrors.addError(error);
            }
        },

        async register(registerData) {
            try {
                const url_register = `${api_host}/api/register`;
                await axios.post(url_register, registerData);
                window.location.href = '/login';

            } catch (err) {
                const storeErrors = useErrorsStore();
                const error = {
                    message: err.message,
                    message_public: 'A regisztráció sikertelen!'
                };
                storeErrors.addError(error);
            }
        },

        logout() {
            router.push('/')
            this.setUserName(null);
            this.setToken(null);
        }

    },

    getters: {},
});
