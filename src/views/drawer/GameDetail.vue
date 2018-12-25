<template>
  <div class="game-detail">
    <img src="https://via.placeholder.com/140x140">
    <Button type="primary" @click="$store.commit('openDrawerPage',{type:'login'})" long>登入註冊</Button>
    <ul>
      <li>
        <font-awesome-icon icon="gamepad" class="fa-2x icon"/>
        <p>電子大廳</p>
      </li>
      <li>
        <font-awesome-icon :icon="['fas' , 'heart']" class="fa-2x icon"/>
        <p>加入最愛</p>
      </li>
      <li>
        <font-awesome-icon icon="child" class="fa-2x icon"/>
        <p>我要試玩</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'DrawerGameDetail',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      gameId: state => state.drawer.gameId
    })
  },
  mounted: function() {
    console.log(this.gameId);
  }
};
</script>

<style lang="less" scoped>
@import '../../style/mixins.less';
.game-detail {
  text-align: center;
  img {
    margin-bottom: 15px;
  }
  ul {
    margin-top: 30px;
    display: inline-block;
    list-style: none;
    li {
      float: left;
      position: relative;
      padding: 10px 20px;

      &:not(:last-child):after {
        content: '';
        position: absolute;
        top: 30%;
        right: 0;
        width: 1px;
        height: 40%;
        background: #d4d4d4;
      }
      .icon {
        color: @primary-color;
      }
      p {
        margin-top: 5px;
      }
    }
  }
}
</style>
