<template>
  <div class="member">
    <img :src="imgSrc" />
    <h3>{{ name }}</h3>
    <p>{{ about }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
