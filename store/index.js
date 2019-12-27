/* eslint-disable no-console */
// store for the main page
import axios from 'axios';

export const state = () => ({
  newTitles: [],
});

export const mutations = {
  newTitles(state, newTitles) {
    state.newTitles = newTitles;
  },
};

export const actions = {
  async fetchBookTitles({ commit }, title) {
    const newTitles = await axios.get(
      `https://tastedive.com/api/similar?q=${title}&type=books&info=1&k=${process.env.TASTE_DIVE_API_KEY}`,
    );
    console.log('newTitles', newTitles);
    commit('newTitles', newTitles);
  },
};
