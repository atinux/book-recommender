<template>
  <div class="container">
    <img src="@/assets/images/OscarPark.jpg" />
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
// * {
//   border: 1px solid red;
// }
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;

  img {
    transform: rotate(90deg); // this fixes a glitch that causes image to rotate needlessly
    padding-top: $underHeaderGap; // these 2 padding lines help to fix the placement of the image caused by the needless rotation
    padding-left: $underHeaderGap * 5;
    align-self: center;
    height: $imgHeight;
  }
}
</style>
