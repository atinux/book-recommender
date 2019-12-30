import consola from 'consola';

export const state = () => ({
  titleFromUser: '',
  newTitles: [],
});

export const mutations = {
  SET_TITLE_FROM_USER(state, titleFromUser) {
    state.titleFromUser = titleFromUser;
    consola.ready({
      message: `titleFromUser in store: ${titleFromUser}`,
      badge: true,
    });
  },
  SET_NEW_TITLES(state, newTitles) {
    state.newTitles = newTitles;
  },
};
