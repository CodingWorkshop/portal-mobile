<template>
    <div>
        <p>
            <span class="text">{{ msg }}</span>
            <span class="more">更多 ></span>
        </p>
    </div>
</template>

<script>
export default {
  name: 'Subject',
  props: ['msg']
};
</script>
<style lang="sass" scoped>
div
    width: 100%
    background-color: rgb(253, 126, 20)
    height: 30px
    p
        color: #fff;
        .text
            padding: 2px 0 2px 6px
            float: left
        .more
            padding: 2px 6px 2px 0;
            float: right
</style>
