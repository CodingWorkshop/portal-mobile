<template>
  <div>
    <Tabs value="0">
      <TabPane v-for="(c,i) in category" :key="i" :label="tab(c)" :name="i.toString()">{{c}}</TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'CategoryTab',
  props: {
    category: Array,
    type: Number
  },
  data: function() {
    return {
      tab(category) {
        return h => {
          return h(
            'Dropdown',
            {
              props: {
                trigger: 'click'
              }
            },
            [
              h(
                'a',
                {
                  attrs: {
                    href: 'javascript:void(0)'
                  }
                },
                [
                  category.displayName,
                  h('icon', {
                    props: {
                      type: category.childList.length ? 'ios-arrow-down' : ''
                    }
                  })
                ]
              ),
              h(
                'DropdownMenu',
                {
                  slot: 'list'
                },
                category.childList.map(l => h('DropdownItem', l.displayName))
              )
            ]
          );
        };
      }
    };
  }
};
</script>

<style lang="less" scoped>
</style>
