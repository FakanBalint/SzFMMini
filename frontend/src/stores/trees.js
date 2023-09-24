import {defineStore} from "pinia";
import axios from "axios";
import {useErrorsStore} from "./errors";


export const useTreesStore = defineStore({
    id: 'trees',
    state: () => {
        return {
            trees: []
        };
    },


    actions: {


        setForest(forest) {
            this.trees = forest;
        },

        async fetchForest() {

            try {
                const url_forest = `/api/forest`;
                await axios.get(url_forest)
                    .then((response) => {
                        this.setForest(response.data)
                    })
            } catch (err) {
                const storeErrors = useErrorsStore();
                const error = {
                    message: err.message,
                    message_public: 'Az erdő adatainak az elérése sikertelen!'
                };
                storeErrors.addError(error);
            }
        },


        async plantTree(user_id, data) {
            const url_plant_tree = `/api/plant-tree/${user_id}`

            try {
                await axios.post(url_plant_tree, data)
                    .then(() => {

                    })
            } catch (err) {
                const storeErrors = useErrorsStore();
                const error = {
                    message: err.message,
                    message_public: 'A fa ültetése sikertelen!'
                };
                storeErrors.addError(error);
            }

        },

        async cutoutTree(tree_id, data) {
            const url_cutout_tree = `/api/cutout-tree/${tree_id}`

            try {
                await axios.post(url_cutout_tree, data)
                    .then(() => {

                    })
            } catch (err) {
                const storeErrors = useErrorsStore();
                const error = {
                    message: err.message,
                    message_public: 'A fa kivágása sikertelen!'
                };
                storeErrors.addError(error);
            }

        },


    },

    getters: {},
});