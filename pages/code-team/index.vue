<template>
  <div class="code-team">
    <img src="@/assets/images/OscarSelfie.jpg" />
    <img src="@/assets/images/Jim.jpg" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.code-team {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;

  img {
    transform: rotate(0deg); // this fixes a glitch that causes image to rotate needlessly
    align-self: center;
    height: $imgHeight;
    padding-top: $underHeaderGap;
  }
}
</style>
