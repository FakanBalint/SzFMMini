import { defineStore } from 'pinia';

const errorState = {
  message: '',
  errorCode: null,
};

export const useErrorStore = defineStore({
  id: 'error',
  state: () => ({ ...errorState }),

  actions: {
    setError(message, errorCode = null) {
      this.message = message;
      this.errorCode = errorCode;
    },
    clearError() {
      this.message = '';
      this.errorCode = null;
    },
  },
});
