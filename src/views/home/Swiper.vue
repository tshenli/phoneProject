<template>
  <div class="swiper-box">
    <mt-swipe :auto="4000" class="swiper">
      <mt-swipe-item v-for="(item, idx) in swipe" :key="idx">
        <img :src="item.src" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>

</template>

<script>
import { swipe } from "@/assets/index.js";

export default {
  name: "swiper",
  data: function() {
    return {
      swipe
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper-box {
  height: 3.733333rem;
  background: rgba(142, 74, 1, 1);
  display: flex;
  justify-content: center;
  margin-top: 1.173333rem;
  .swiper {
    width: 9.333333rem;
    height: 3.733333rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.266667rem;
    }
  }
}
</style>
