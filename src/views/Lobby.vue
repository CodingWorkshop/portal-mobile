<template>
  <div class="lobby">
    <header-title></header-title>
    <announcement></announcement>
    <game-type></game-type>
    <category-tab :category="category" :type="type"></category-tab>
  </div>
</template>

<script>
import HeaderTitle from '@/components/layout/HeaderTitle.vue';
import Announcement from '@/components/layout/Announcement.vue';
import GameType from '@/components/home/GameType.vue';
import CategoryTab from '@/components/lobby/CategoryTab.vue';
export default {
  name: 'lobby',
  components: {
    HeaderTitle,
    Announcement,
    GameType,
    CategoryTab
  },
  data: function() {
    return {
      type: null,
      category: null
    };
  },
  methods: {},
  mounted: function() {
    this.axios
      .get('https://next.json-generator.com/api/json/get/Ek0sR3cgL')
      .then(response => {
        this.categories = response.ReturnObject.filter(
          c => c.type === +this.$route.query.gameType
        )[0];
        this.type = this.categories.type;
        this.category = this.categories.category;
      });
  }
};
</script>
