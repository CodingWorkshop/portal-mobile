<template>
  <div class="account">
    <h1>Account Info</h1>
    <p><label>User:</label>{{user}}</p>
  </div>
</template>

<script>
export default {
  name: 'account',
  data: function() {
    return {
      user: this.$store.state.login.user
    };
  }
};
</script>
