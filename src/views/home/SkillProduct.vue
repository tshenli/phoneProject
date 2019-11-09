<template>
    <div class="pro-list">
        <ul>
            <li v-for="(item,idx) in skillList" :key="idx" @click="buy(item)">
                <div><img :src="item.src" alt=""></div>
                <div>{{item.current_price | currency}}</div>
                <div>{{item.original_price | currency}}</div>
            </li>
        </ul>
    </div>
</template> 

<script>
// 导入vuex mapState/mapActions 方法
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: ["item"],
  name: "skillProduct",
  computed: {
    ...mapState(["skillList"])
  },
  mounted() {
    this.getSkillList();
  },
  methods: {
    ...mapActions(["getSkillList"]),
    ...mapMutations(['updateProductList']),
    // 购买商品
    buy(item) {      
      this.$messagebox.confirm('确定购买此商品吗？').then(action=>{
        if (action === 'confirm') {
          // 构造一个商品item
          // 使用时间戳来指定商品的唯一性
          let item1 = {
            ...item,
            t: Date.now()
          }
          console.log(item)
          this.updateProductList({type:"insert", item: item1})
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.pro-list {
  width: 9.466667rem;
  height: 3.2rem;
  overflow: scroll;
  ul {
    width: 26rem;
    height: 100%;
    float: left;
    color: #666;
    padding: 0rem 0rem 0rem 0.133333rem;
  }
  li {
    width: 2.026667rem;
    height: 100%;
    float: left;
    padding: 0rem 0.133333rem;
    text-align: center;
    > div:nth-child(1) {
      height: 1.76rem;
      > img {
        display: inline-block;
        width: 1.76rem;
        height: 100%;
      }
    }
    div:nth-child(2) {
      height: 0.426667rem;
      line-height: 0.426667rem;
      color: #e93b3d;
      font-size: 0.426667rem;
      font-weight: bolder;
      margin: 0.266667rem 0rem 0rem;
    }
    div:nth-child(3) {
      height: 0.32rem;
      line-height: 0.32rem;
      font-size: 0.32rem;
      color: #999;
      margin: 0.106667rem 0rem 0.293333rem;
      text-decoration: line-through;
    }
  }
}
</style>
