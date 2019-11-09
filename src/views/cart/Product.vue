<template>
  <!-- 第一种方法：右划删除订单 -->
  <!-- <mt-cell-swipe
        title="text"
        :right="[
        {
            content: '删除',
            style: { background: 'red', color: '#fff', fontSize:'0.5rem'},
            handler: () => this.$messagebox('delete')
        }
    ]">
    <div class="pro_item">
        <img src="../../assets/icons/nodata.png" alt="">
        <span class="oi_decs" v-text="item.desc">desc</span>
        <span class="oi_price" v-text="item.current_price">10</span>
    </div>
    </mt-cell-swipe> -->

  <!-- 第二种订单删除方法：长按删除 -->
  <div class="pro_item" @touchstart='start' @touchend='end'>
    <img :src="item.src" alt="">
    <span class="oi_price">{{item.current_price | currency}}</span>
    <span class="oi_decs" v-text="item.desc">desc</span>
    <span class="oi_time">{{item.t | time}}</span>
  </div>

</template>

<script>
// 引入mapMutations
import { mapMutations } from "vuex";
import moment from "moment";
export default {
  props: ["item"],
  data: function() {
    return {
      startTime: 0
    };
  },
  // 局部过滤器  时间戳
  filters: {
    time(value) {
      return moment(value).format("YYYY-MM-DD");
    }
  },
  methods: {
    ...mapMutations(["updateProductList"]),
    // 开始时间戳
    start() {
      this.startTime = Date.now();
    },
    // 结束时间戳
    end() {
      //   用touch时间、时间戳来模拟长按事件
      //   当前时间-开始按的时间，大于1s表示长按
      if (Date.now() - this.startTime > 1000) {
        //   添加一个用户提示框
        this.$messagebox.confirm("你确定要删除这个订单吗？").then(action => {
          if (action === "confirm") {
            // 执行删除
            // 构造一个payload,type表示删除一个商品
            this.updateProductList({ type: "delete", item: this.item });
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pro_item {
  height: 1.6rem;
  display: block;
  width: 10rem;
  overflow: hidden;
  background: white;
  border-bottom: 1px solid #ddd;
  line-height: 1.6rem;
  > img {
    float: left;
    width: 1.33rem;
    height: 1.33rem;
    margin-top: 0.13rem;
    margin-left: 0.27rem;
  }
  .oi_decs {
    font-size: 0.43rem;
    float: left;
    margin-left: 0.27rem;
    width: 4rem;
    // 超出宽度，显示省略号
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .oi_price {
    float: right;
    font-size: 0.53rem;
    color: rgba(242, 39, 12, 1);
    margin-right: 0.27rem;
  }
  .oi_time {
    font-size: 0.186667rem;
    margin: 0rem 0.133333rem;
    float: right;
  }
}
</style>
