<template>
  <div class="container">
    <img src="@/assets/images/OscarPark.jpg" alt="Oscar in the park" title="I love the park!" />
    <br />
    <form>
      <label for="title">Book Title:</label>
      <input v-model="titleFromUser" type="text" name="title" class="title" />
      <button @click.prevent="submit" class="submit">Find a Book!</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {},
  data() {
    return {
      titleFromUser: '',
    };
  },
  computed: mapState(['newTitles']),
  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/index',
      reconnection: false,
    });
  },
  methods: {
    submit() {
      this.$store.commit('SET_TITLE_FROM_USER', this.titleFromUser);
    },
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    transform: rotate(90deg); // this fixes a glitch that causes image to rotate needlessly
    padding-top: $underHeaderGap; // these 2 padding lines help to fix the placement of the image caused by the needless rotation
    padding-left: $underHeaderGap * 5;
    margin-bottom: $underHeaderGap * 5;
    height: $imgHeight;
  }
}
</style>
