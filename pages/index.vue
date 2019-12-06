<template>
  <div class="container">
    <img src="@/assets/images/OscarSelfie.jpg" />
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;

  img {
    align-self: center;
    height: $imgHeight;
  }
}
</style>
