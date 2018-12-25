<template>
  <div class="lobby">lobby</div>
</template>

<script>
export default {
  name: 'lobby',
  data: function() {
    return {
      user: this.$store.state.login.user
    };
  },
  methods: {
    changeLanguage: function() {}
  }
};
</script>
