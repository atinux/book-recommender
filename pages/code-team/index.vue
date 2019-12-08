<template>
  <div class="code-team">
    <Oscar />
    <Jim />
  </div>
</template>

<script>
import Oscar from '@/components/CodeTeam/Oscar';
import Jim from '@/components/CodeTeam/Jim';

export default {
  components: {
    Oscar,
    Jim,
  },
};
</script>

<style lang="scss" scoped>
.code-team {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
