<template>
  <div class="cart">
    <div v-if="isLogin">
      <div v-if="productList.length > 0">
        <Product v-for="(item, idx) in productList" :key="idx" :item="item"></Product>
      </div>
      <div v-else class="no_pro">
        <img :src="icons.noDataIcon" alt="">
        <span>购物车暂无商品</span>
      </div>
    </div>
    <div v-else>
      <NoLogin></NoLogin>
    </div>

    <!-- 总计、提交按钮 -->
    <div class="cart_submit">
      <div>
        <span>共计：</span>
        <span class="total_submit" v-text="productList.length"></span>
      </div>
      <div>
        <span>总价：</span>
        <span class="total_submit" v-text="total"></span>
      </div>
      <div @touchstart="submit">提交</div>
    </div>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import NoLogin from "@/components/NoLogin.vue";
import Product from "./Product.vue";
import { icons } from "@/assets/index";
import { mapState, mapMutations } from "vuex";

export default {
  name: "cart",
  components: {
    NavBar,
    Product,
    NoLogin
  },
  data: function() {
    return {
      icons
    };
  },
  computed: {
    ...mapState(["userinfo", "productList"]),
    // 计算总价格
    total() {
      let t = 0;
      this.productList.map(ele => {
        t += ele.current_price;
      });
      return t;
    },
    // 判断用户是否登录了
    isLogin() {
      let res = localStorage.getItem("login");
      return res && JSON.parse(res).isLogin === 1;
    }
  },
  // 做提交删除商品订单功能
  methods: {
    ...mapMutations(["updateProductList"]),
    submit() {
      this.updateProductList({ type: "deleteAll" });
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  box-sizing: border-box;
  padding: 0.27rem 0;
  .no_pro {
    text-align: center;
    padding-top: 0.67rem;
    img {
      width: 3.89rem;
      height: 2.56rem;
    }
    span {
      display: block;
      font-size: 0.56rem;
      color: #333;
    }
  }
  .cart_submit {
    font-size: 0.45rem;
    box-sizing: border-box;
    padding-left: 0.27rem;
    line-height: 1.6rem;
    height: 1.6rem;
    width: 100%;
    overflow: hidden;
    background: white;
    position: fixed;
    bottom: 1.47rem;
    left: 0;
    right: 0;
    > div:nth-child(1) {
      float: left;
    }
    > div:nth-child(2) {
      float: left;
      margin-left: 0.27rem;
    }
    > div:nth-child(3) {
      float: right;
      width: 2.67rem;
      background-color: rgb(242, 39, 12);
      color: white;
      text-align: center;
    }
    .total_submit {
      color: rgb(242, 39, 12);
      font-weight: bold;
    }
  }
}
</style>



