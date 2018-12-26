<template>
  <div>
    <Drawer
      v-for="list in pageList"
      :key="list.type"
      :closable="false"
      width="100"
      v-model="list.open"
      @on-close="close(list.type)"
      :style="{ zIndex: 1000+list.zIndex, position: 'relative' }"
    >
      <div slot="header">
        <v-touch v-on:swiperight="$store.commit('closeDrawerPage',list.type)">
          <h1>
            <Button type="text" @click="$store.commit('closeDrawerPage',list.type)">
              <font-awesome-icon icon="angle-left"/>
            </Button>
            {{list.name}}
          </h1>
        </v-touch>
      </div>
      <v-touch tag="body" v-on:swiperight="$store.commit('closeDrawerPage',list.type)"
                v-bind:swipe-options="{threshold: 180 }">
        <component :is="'drawer-'+list.type"></component>
      </v-touch>
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
<style lang="less" scoped>
</style>
