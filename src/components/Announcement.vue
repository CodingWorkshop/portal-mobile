<template>
    <div>
        <ul>
            <li v-for="i in asyncCount" :key="i">
                <font-awesome-icon icon="bullhorn" />
                即日起 任何品項的【{{i}}】通通88折起
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Announcement',
  components: {},
  mounted() {
    this.asyncCount = ['麵包'];
  },
  data() {
    return {
      asyncCount: '麵包'
    };
  }
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  li {
    font-size: 16px;
    height: 32px;
    background-color: #fd7e147a;
    padding: 2px 0 0 12px;
    text-align: left;
  }
}
</style>
