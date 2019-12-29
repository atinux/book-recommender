// store for the main page
const consola = require('consola');

export const state = () => ({
  newTitles: [],
});

export const mutations = {
  newTitles(state, newTitles) {
    state.newTitles = newTitles;
  },
};

export const actions = {
  async fetchBookTitles({ commit }, titleFromUser) {
    try {
      const newTitles = await this.$axios.$post('/title', titleFromUser);
      consola.ready({
        message: `newTitles: ${newTitles}`,
        badge: true,
      });
      commit('newTitles', newTitles);
    } catch {
      consola.error({
        message: 'Something went wrong',
        badge: true,
      });
    }
  },
};
