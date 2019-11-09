<template>
    <div class="foot-nav">
        <router-link to='/home'>
            <div v-if="num == 1"><img :src='icon.icon1on' alt="首页"></div>
            <div v-else> <img :src='icon.icon1' alt="首页"></div>
        </router-link> 
        <router-link to='/cate'>
            <div v-if="num == 2"><img :src='icon.icon2on' alt="分类"></div>
            <div v-else><img :src='icon.icon2' alt="分类"></div>
        </router-link>
        <router-link to='/jdm'>
            <div><img :src='icon.icon3' alt="‘京’喜"></div>
        </router-link>
        <router-link to='/cart'>
            <div><img :src='icon.icon4' alt="购物车"></div>
        </router-link>
        <router-link to='/user'>
            <div v-if="num == 5"><img :src='icon.icon5on' alt="我的"></div>
            <div v-else><img :src='icon.icon5' alt="我的"></div>
        </router-link>
    </div>
</template>

<script>
// 引入底部navIcons图标
import { navIcons } from "@/assets/index.js";
export default {
  name: "navbar",
  props: ["num"],
  data: function() {
    return {
      icon: navIcons
    };
  }
};
</script>

<style lang="scss">
.foot-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.33rem;
  line-height: 1.33rem;
  background: white;
  display: flex;
  justify-content: space-around;
  div {
    width: 20%;
    text-align: center;
    box-sizing: border-box;
    img {
      display: inline-block;
      width: 1.6rem;
      height: 1.23rem;
    }
  }
}
</style>
