<template>
    <div style="width:100%;background-color:rgb(253, 126, 20); height:30px;">
        <p style="color:#fff;">
            <span style="padding:2px 0 2px 6px;float:left;">{{ msg }}</span>
            <span style="padding:2px 6px 2px 0;float:right;">更多 ></span>
        </p>
    </div>
</template>

<script>
export default {
  name: 'Subject',
  props: ['msg']
};
</script>
