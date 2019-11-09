<template>
    <div class="banner">
        <img :src="banner.ban1" alt="">
        <img :src="banner.ban2" alt="">
        <img :src="banner.ban3" alt="">
    </div>
</template>

<script>
// 导入banner图片数据
import { banner } from "@/assets/index.js";
export default {
  name: "banner",
  data: function() {
    return {
      banner
    };
  }
};
</script>

<style lang="scss" scoped>
.banner{
    height: 2.666667rem;
    >img{
        width: 3.333333rem;
        height: 100%;
    }
}
</style>
