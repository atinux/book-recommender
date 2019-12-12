<template>
  <div class="member">
    <img src="@/assets/images/OscarSelfie.jpg" alt="Oscar!" title="I took a selfie!" />
    <h3>Oscar</h3>
    <p>
      Hi, I'm Oscar! I had a great idea to help my people find a new book to read! So, I built this!
      My typing skills aren't the best, so I asked Jim to help!
    </p>
  </div>
</template>

<style lang="scss" scoped>
.member {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 67%;
  text-align: center;
  padding-top: $underHeaderGap;
  img {
    align-self: center;
    height: $imgHeight;
    width: $imgWidth;
  }
  h3 {
    align-self: center;
  }
}
</style>
