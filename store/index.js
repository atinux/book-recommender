import consola from 'consola';

export const state = () => ({
  newTitles: [],
});

export const mutations = {
  SET_NEW_TITLES(state, newTitles) {
    state.newTitles = newTitles;
  },
};

export const actions = {
  async FETCH_BOOK_TITLES({ commit }, titleFromUser) {
    try {
      consola.ready({
        message: `'FETCH_BOOK_TITLES': titleFromUser: ${titleFromUser}`,
        badge: true,
      });
      const { data } = await this.$axios.$get('/api/title', { titleFromUser });
      consola.ready({
        message: `data returned from api: ${data}`,
        badge: true,
      });
      commit('SET_NEW_TITLES', data);
    } catch (error) {
      consola.error({
        message: `FETCH_BOOK_TITLES: Something went wrong: ${error}`,
        badge: true,
      });
      throw new Error(error);
    }
  },
};
