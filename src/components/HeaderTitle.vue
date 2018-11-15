<template>
    <div>
        <x-header style="background-color: #fff; border-bottom:4px solid #fd7e14;">
            <img slot="overwrite-left" alt="Cake logo" src="../assets/cakeLogo.png" 
                style="width:100px;">
            <font-awesome-icon slot="right" icon="search" style="font-size: 26px;margin-right:15px;color:#fd7e14;" />
            <font-awesome-icon slot="right" icon="heart" style="font-size: 26px;color:#fd7e14;" />
        </x-header>
    </div>
</template>

<script>
import { XHeader } from 'vux';

export default {
  name: 'HeaderTitle',
  components: {
    XHeader
  }
};
</script>

<style lang="less">
.vux-header-left {
  top: 4px !important;
}
</style>
