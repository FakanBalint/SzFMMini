import { defineStore } from 'pinia';

const treeState = {
  TreeID: 0,
  Plant_Date: null,
  TreeType: '',
};

export const useTreeStore = defineStore({
  id: 'tree',
  state: () => ({ ...treeState }),

  actions: {
    updateTree(tree) {
      Object.assign(this, tree);
    },
    clearTree() {
      Object.assign(this, treeState);
    },
  },
});
