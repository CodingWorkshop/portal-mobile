<template>
    <div>
       <Drawer v-for="list in drawerList" 
               :key="list.name" 
               :title="list.name" 
               width="100" 
               v-model="list.open"
               @on-close="close(list.name)">
           <h1>{{list.name}}</h1>
           
       </Drawer>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'MultiDrawer',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      openPage: state => state.drawer.openPage
    }),
    ...mapGetters({
      drawerList: 'pageOpenList'
    })
  },
  methods: {
    close: function(pageName) {
      this.$store.commit('closeDrawerPage', pageName);
    }
  },
  created: function() {
    this.$store.commit('openDrawerPage', 'none');
    this.$store.commit('closeDrawerPage', 'none');
  }
};
</script>
<style lang="sass" scoped>
</style>
