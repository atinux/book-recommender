<template>
  <div class="member">
    <img src="@/assets/images/Jim.jpg" alt="Jim" />
    <h3>Jim</h3>
    <p>
      As a mostly self-taught programmer, I'm always on the lookout for great and interesting
      projects to add to my portfolio. So when Oscar came to me for some help getting this Book
      Recommender going, it was an easy 'yes' from me. Check out the rest of
      <a href="http://jimstrother.com/#/">my portfolio</a>.
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
    width: $imgWidth + 1em;
  }
  h3 {
    align-self: center;
  }
  a {
    text-decoration: none;
    &:hover {
      color: darken(#00ff00, 15%);
    }
    &:visited {
      color: #338bff;
    }
  }
}
</style>
