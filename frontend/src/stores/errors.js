import {defineStore} from "pinia";

export const useErrorsStore = defineStore({
    id: 'errors',
    state: () => {
        return {
            errors: []
        };
    },
    actions: {
        addError(error) {
            this.errors.push(error)
        },
        clearErrors() {
            this.errors = []
        }
    },
    getters: {},
});
