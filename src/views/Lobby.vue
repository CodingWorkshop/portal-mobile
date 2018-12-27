<template>
  <div class="lobby">
    <header-title></header-title>
    <announcement></announcement>
    <game-type></game-type>
    <category-tab
      :category="category"
      :type="type"
      @change-category="changeCategory"
      :current-category-key="currentCategoryKey"
    ></category-tab>
    <lobby-game
      :type="type"
      :current-category-name="currentCategoryName"
      :current-category-key="currentCategoryKey"
      :game-list="gameList"
    ></lobby-game>
  </div>
</template>

<script>
import HeaderTitle from '@/components/layout/HeaderTitle.vue';
import Announcement from '@/components/layout/Announcement.vue';
import GameType from '@/components/home/GameType.vue';
import CategoryTab from '@/components/lobby/CategoryTab.vue';
import LobbyGame from '@/components/lobby/LobbyGame.vue';
export default {
  name: 'lobby',
  components: {
    HeaderTitle,
    Announcement,
    GameType,
    CategoryTab,
    LobbyGame
  },
  data: function() {
    return {
      type: null,
      category: null,
      currentCategoryName: '',
      currentCategoryKey: '',
      gameList: []
    };
  },
  methods: {
    changeCategory: function($event) {
      let allKind = [];
      this.category.forEach(c => {
        if (!c.childList.length) {
          allKind.push(c);
        }
        allKind.push(...c.childList);
      });
      let currentCategory = allKind.filter(c => c.categoryKey === $event)[0];

      this.currentCategoryName = currentCategory.displayName;
      this.currentCategoryKey = currentCategory.categoryKey;
      this.axios
        .get(
          'https://next.json-generator.com/api/json/get/' +
            this.currentCategoryKey
        )
        .then(response => {
          this.gameList = response.ReturnObject;
        });
    }
  },
  mounted: function() {
    this.axios
      .get('https://next.json-generator.com/api/json/get/Ek0sR3cgL')
      .then(response => {
        this.categories = response.ReturnObject.filter(
          c => c.type === +this.$route.query.gameType
        )[0];
        this.type = this.categories.type;
        this.category = this.categories.category;
        this.changeCategory(this.category[0].categoryKey);
      });
  }
};
</script>
