<template>
    <div class="home">
        <SearchBar></SearchBar>
        <Swiper></Swiper>
        <Category></Category>
        <Banner></Banner>
        <Skill></Skill>
        <div class="court_wrap">
          <div class="court_pic">
            <img :src="icons.courtPic" alt="东家小院">
          </div> 
            <Court v-for="(item, idx) in courtList" :key="idx" :item="item"></Court>
        </div>
        <div class="rec_warp">
          <div class="rec_pic">
            <img :src="icons.recommendPic" alt="为你推荐">
          </div>
          <Recommend v-for="(item, idx) in recommendList" :key="idx" :item="item"></Recommend>
        </div>
        <NavBar :num="1"></NavBar>
    </div>
    
</template>

<script>
import SearchBar from "./SearchBar.vue"; //搜索栏
import Swiper from "./Swiper.vue"; //轮播图
import Category from "./Category.vue"; //分类列表
import Banner from "./Banner.vue"; //banner图
import Skill from "./Skill.vue"; //秒杀活动
import Court from "./Court.vue"; //东家小院
import Recommend from "./Recommend.vue"; //为你推荐

import NavBar from "@/components/NavBar.vue"; //底部导航栏
// 引入vuex中mapActiocs,mapState方法
import { mapActions, mapState } from "vuex";
// 引入court图片
import { icons } from "@/assets/index.js";
// 引入Betterscroll
import BScroll from "@better-scroll/core";

export default {
  name: "home",
  data: function() {
    return {
      icons,
      page: 1 //默认页数：1
    };
  },
  components: {
    SearchBar,
    Swiper,
    Category,
    Banner,
    Skill,
    Court,
    Recommend,
    NavBar
  },
  computed: {
    ...mapState(["courtList", "recommendList"])
  },
  mounted() {
    // 实现数据缓存
    if (this.courtList.length === 0) {
      this.getCourtList();
    }
    if (this.recommendList.length === 0) {
      this.getRecommendList(this.page);
    }
    // 实现滚动加载页面
    let bs = new BScroll(".rec_warp", {
      probeType: 3,
      pullUpLoad: true
    });
    // 滚动开始位置
    // bs.on("srcoll", () => {
    //   console.log("srcoll");
    // });
    // 滚动结束后位置
    bs.on("scrollEnd", () => {
      console.log("scroll end");
      this.page++;
      this.getRecommendList(this.page);
      this.timer = setTimeout(() => {
        bs.refresh();
      }, 1000);
    });
  },
  methods: {
    ...mapActions(["getCourtList", "getRecommendList"])
  },
  destoryed() {
    // 清除定时器
    this.timer = null;
    clearTimeout(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 2.67rem;
  .court_wrap {
    padding: 0 0.31rem;
    > .court_pic {
      width: 100%;
      height: 0.933333rem;
      > img {
        width: 100%;
        height: 0.933333rem;
        display: inline-block;
      }
    }
  }
  .rec_warp {
    padding: 0 0.28rem;
    > .rec_pic {
      width: 100%;
      height: 0.933333rem;
      box-sizing: border-box;
      > img {
        width: 100%;
        height: 0.933333rem;
        display: inline-block;
      }
    }
  }
}
</style>
