<template>
  <div class="home">
    <header-title></header-title>
    <announcement></announcement>
    <slide></slide>
    <game-type></game-type>
    <subject msg="熱門蛋糕" type="hot"></subject>
    <game-grid type="hot"></game-grid>
    <subject msg="新進蛋糕" type="new"></subject>
    <game-grid type="new"></game-grid>
    <category title="奶油蛋糕"></category>
    <category title="草莓蛋糕"></category>
    <category title="香草蛋糕"></category>
  </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle.vue';
import Announcement from '@/components/Announcement.vue';
import Slide from '@/components/Slide.vue';
import GameType from '@/components/GameType.vue';
import Subject from '@/components/Subject.vue';
import GameGrid from '@/components/GameGrid.vue';
import Category from '@/components/Category.vue';

export default {
  name: 'home',
  components: {
    HeaderTitle,
    Announcement,
    Slide,
    GameType,
    Subject,
    GameGrid,
    Category
  }
};
</script>
