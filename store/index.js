/* eslint-disable no-console */
// store for the main page

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
    const newTitles = await this.$axios.$get('/title', titleFromUser);
    console.log('newTitles', newTitles);
    commit('newTitles', newTitles);
  },
};
