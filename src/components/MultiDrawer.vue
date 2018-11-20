<template>
    <div>
       <Drawer v-for="list in drawerList" 
               :key="list.name" 
               :title="list.name" 
               width="100" 
               v-model="list.open"
               @on-close="close(list.name)">
           <!--在動態切換元件過程中，我們可能會希望保存元件的狀態（例如：保留使用者輸入的資料）而避免重新載入元件-->
           <keep-alive>
              <component :is="'drawer-'+list.name"></component>
           </keep-alive>
       </Drawer>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import DrawerSearch from '@/components/drawer/Search.vue';
import DrawerFavorite from '@/components/drawer/Favorite.vue';
import DrawerLogin from '@/components/drawer/Login.vue';
import DrawerGameDetail from '@/components/drawer/GameDetail.vue';
import DrawerGameList from '@/components/drawer/GameList.vue';

export default {
  name: 'MultiDrawer',
  components: {
    DrawerSearch,
    DrawerFavorite,
    DrawerLogin,
    DrawerGameDetail,
    DrawerGameList
  },
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
