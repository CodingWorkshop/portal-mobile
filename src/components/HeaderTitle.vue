<template>
    <Row class="row">
        <i-col class="logo" span="6">
            <img alt="Cake logo" src="../assets/cakeLogo.png">
        </i-col>
        <i-col class="icon" span="18">
            <font-awesome-icon icon="search" />
            <font-awesome-icon icon="heart" />
        </i-col>
    </Row>
</template>

<script>
export default {
  name: 'HeaderTitle',
  components: {}
};
</script>
<style lang="sass" scoped>
.row
    background-color: #fff
    border-bottom: 4px solid #fd7e14
    .logo
        text-align: left
        img
            width: 120px;
    .icon
        text-align: right
        font-size: 26px
        color: #fd7e14
</style>
