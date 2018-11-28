<template>
  <div>
    <Drawer v-for="list in pageList" :key="list.name" :scrollable="true"
      :closable="false" width="100" v-model="list.open" @on-close="close(list.name)"
      :style="{ zIndex: 1000+list.zIndex, position: 'relative' }">
      <div slot="header">
        <v-touch v-on:swiperight="$store.commit('closeDrawerPage',list.name)">
          <h1>
            <Button type="text" @click="$store.commit('closeDrawerPage',list.name)">
              <font-awesome-icon icon="angle-left" />
            </Button>
            {{list.name}}
          </h1>
        </v-touch>
      </div>
      <!--在動態切換元件過程中，我們可能會希望保存元件的狀態（例如：保留使用者輸入的資料）而避免重新載入元件-->
      <keep-alive>
        <v-touch tag="body" v-on:swiperight="$store.commit('closeDrawerPage',list.name)">
          <component :is="'drawer-'+list.name"></component>
        </v-touch>
      </keep-alive>
    </Drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DrawerSearch from '@/views/drawer/Search.vue';
import DrawerFavorite from '@/views/drawer/Favorite.vue';
import DrawerLogin from '@/views/drawer/Login.vue';
import DrawerGameDetail from '@/views/drawer/GameDetail.vue';
import DrawerGameList from '@/views/drawer/GameList.vue';

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
      pageList: state => state.drawer.pageList
    })
  },
  methods: {
    close: function(pageName) {
      this.$store.commit('closeDrawerPage', pageName);
    }
  }
};
</script>
<style lang="sass" scoped>
</style>
