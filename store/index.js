import consola from 'consola';

const axiosHeaders = {
  'Content-Type': 'application/json',
};

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
        message: `titleFromUser in store action: ${titleFromUser}`,
        badge: true,
      });
      const { data } = await this.$axios.$post(
        '/title',
        { titleFromUser },
        { headers: axiosHeaders },
      );
      consola.ready(data);
      // commit('newTitles', data);
    } catch (error) {
      consola.error({
        message: `FETCH_BOOK_TITLES: Something went wrong: ${error}`,
        badge: true,
      });
    }
  },
};
