<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">Oscar's Book Recomendations</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/code-team">Code Team</nuxt-link></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle';
export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle,
  },
};
</script>

<style scoped lang="scss">
.header-container {
  height: 60px;
}
.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}
.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}
.logo a {
  text-decoration: none;
  color: white;
}
.spacer {
  flex: 1;
}
.navigation-items {
  display: block;
}
@media (max-width: $tabletP) {
  .navigation-items {
    display: none;
  }
}
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.nav-item {
  margin: 0 10px;
}
.nav-item a {
  text-decoration: none;
  color: white;
}
.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
