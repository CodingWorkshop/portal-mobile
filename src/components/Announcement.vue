<template>
    <div>
        <marquee>
            <marquee-item v-for="i in asyncCount" :key="i" style="font-size: 16px;height: 32px;background-color: #fd7e147a;padding:2px 0 0 12px;;text-align:left;">
                <font-awesome-icon icon="bullhorn" />
                即日起 任何品項的【{{i}}】通通88折起
            </marquee-item>
        </marquee>
    </div>
</template>

<script>
import { Marquee, MarqueeItem } from 'vux';

export default {
  name: 'Announcement',
  components: {
    Marquee,
    MarqueeItem
  },
  mounted() {
    setTimeout(() => {
      this.asyncCount = ['麵包', '蛋糕', '牛奶'];
    }, 1000);
  },
  data() {
    return {
      asyncCount: '麵包'
    };
  }
};
</script>
