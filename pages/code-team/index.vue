<template>
  <div class="code-team">
    <!-- <h1>HELLO</h1> -->
    <section v-for="(member, index) in teamMembers" :key="index" class="member">
      <Member :name="member.name" :imgSrc="member.imgSrc" :about="member.about" />
    </section>
  </div>
</template>

<script>
import Member from '@/components/CodeTeam/Member';

export default {
  components: {
    Member,
  },
  computed: {
    teamMembers() {
      return this.$store.state.codeTeam.members;
    },
  },
};
</script>

<style lang="scss" scoped></style>
