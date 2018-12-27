<template>
  <div class="categoryTab">
    <div class="scroll" :style="{width:containerWidth+'px'}">
      <Dropdown
        class="dropdown"
        trigger="click"
        v-for="(c,i) in category"
        :key="i"
        @on-click="change"
        :class="{'current':currentCategoryKey===c.categoryKey}"
      >
        <a href="javascript:void(0)" @click="c.childList.length?'':change(c.categoryKey)">
          {{c.displayName}}
          <Icon v-if="c.childList.length" type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list" v-if="c.childList.length">
          <DropdownItem
            v-for="(child,j) in c.childList"
            :key="j"
            :name="child.categoryKey"
          >{{child.displayName}}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryTab',
  props: {
    category: Array,
    type: Number,
    currentCategoryKey: String
  },
  data: function() {
    return {
      containerWidth: 0
    };
  },
  updated: function() {
    if (!this.containerWidth) {
      this.category.forEach(c => {
        this.containerWidth += c.displayName.length * 10 + 60;
      });
    }
  },
  methods: {
    change(name) {
      this.$emit('change-category', name);
    }
  }
};
</script>

<style lang="less" scoped>
@import '../../style/mixins.less';
.categoryTab {
  border-bottom: 1px solid #ccc;
  overflow: auto;
  .dropdown {
    padding: 10px 25px;
    &.current {
      border-bottom: 1px solid @primary-color;
    }
  }
}
</style>
