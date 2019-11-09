<template>
<div class="cates">
  <mt-swipe :continuous='false' :auto='0' :showIndicators='false'>
    <mt-swipe-item>
      <div class="cates_item">
        <div v-for="(item, idx) in cates1" :key='idx'>
          <img :src="item.src" alt="cate">
          <span v-text="item.cate"></span>
        </div>
      </div>
    </mt-swipe-item>

    <mt-swipe-item>
      <div class="cates_item">
        <div v-for="(item,idx) in cates2" :key='idx'>
          <img :src='item.src' alt="cate">
          <span v-text='item.cate'></span>
        </div>
      </div>
    </mt-swipe-item>

  </mt-swipe>
</div>
</template>

<script>
import { cateArr } from "@/assets/index.js";
export default {
  name: "category",
  data: function() {
    return {
      cateArr
    };
  },
  computed: {
    //  将cateArr截取为两段  slice():两个参数时，包前不包后，一个参数时表示从此数开始截取到该组数据最后一个元素
    cates1() {
      // 第一组截取到下标从0~9的数据
      return this.cateArr.slice(0, 10);
    },
    cates2() {
      // 第二组截取到下标从10到结尾的下标
      return this.cateArr.slice(10);
    }
  }
};
</script>

<style lang="scss" scoped>
.cates {
  height: 4.27rem;
  background: rgba(246,246,246,1);
  .cates_item {
    height: 100%;
    width: 100%;
    overflow: hidden;
    > div {
      float: left;
      width: 20%;
      text-align: center;
      padding: 0.13rem 0;
      > img {
        display: inline-block;
        width: 1.07rem;
        height: 1.07rem;
      }
      > span {
        display: block;
        font-size: 0.32rem;
        color: #666666;
      }
    }
  }
}
</style>
