<template>
  <div class="noLogin">
    <div class="no_title">
      <i class="fa fa-chevron-left"></i>
      <div>购物车</div>
      <i class="fa fa-ellipsis-h"></i>
    </div>
    <div class="no_login">
      <span>登录后可同步账户购物车中的商品</span>
      <button  @touchstart='skipToLogin'>登录</button>
    </div>
    <div class="pro_lost">
      <img :src="icons.noLoginIcon" alt="">
      <span>登录后可同步购物车中的商品</span>
    </div>
    <div class="skill_title">
      ------------------------------------ 京东秒杀 ------------------------------------
    </div>
    <!-- 渲染秒杀组件 -->
    <Skill></Skill>
  </div>
</template>

<script>
import { icons } from "@/assets/index";
import Skill from "@/views/home/Skill.vue";

export default {
  name: "noLogin",
  components: {
    Skill
  },
  data: function() {
    return {
      icons
    };
  },
  methods: {
    // 跳转至登录页
    skipToLogin() {
      // 编程式跳转
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.no_title {
  height: 1.173333rem;
  background: #fff;
  text-align: center;
  > i {
    width: 1.173333rem;
    height: 1.173333rem;
    float: left;
    line-height: 1.173333rem;
    font-size: 0.5rem;
    color: rgba(93, 95, 106, 1);
  }
  > div:nth-child(2) {
    width: 7.653333rem;
    height: 1.173333rem;
    color: #333333;
    font-size: 0.48rem;
    line-height: 1.173333rem;
    float: left;
  }
}
.no_login {
  height: 1.6rem;
  background: #fff;
  margin-top: 0.026667rem;
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    width: 5.626667rem;
    height: 0.426667rem;
    font-size: 0.346667rem;
    vertical-align: center;
  }
  > button {
    border: none;
    outline: none;
    -webkit-appearance: none;
    background: rgba(242, 39, 12, 1);
    color: #fff;
    width: 1.866667rem;
    height: 0.8rem;
    font-size: 0.373333rem;
    text-align: center;
    border-radius: 0.2rem;
  }
}
.pro_lost {
  width: 100%;
  height: 6.826667rem;
  text-align: center;
  > img {
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    margin-top: 1.6rem;
  }
  > span {
    display: block;
    font-size: 0.43rem;
    color: #333;
  }
}
.skill_title {
  height: 0.373333rem;
  width: 100%;
  font-size: 0.32rem;
  color: #999;
  text-align: center;
}
</style>
