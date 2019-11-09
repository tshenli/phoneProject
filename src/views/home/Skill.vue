<template>
    <div class="skill">
        <div class="skill-box">
            <div class="skill-title">
                <span>
                    <img :src="icons.skillPic" alt="京东秒杀">
                </span>
                <span>8点场</span>
                <span>01:18:00</span>
                <span>更多秒杀
                    <i class="fa fa-chevron-circle-right"></i>
                </span>
            </div>
            <SkillProduct></SkillProduct>
        </div>
        
    </div>
</template>

<script>
// 引入skillPic图片
import { icons } from "@/assets/index.js";

// 导入SkillProduct组件
import SkillProduct from "./SkillProduct.vue"
export default {
  name: "skill",
   components:{
       SkillProduct
   },
  data: function() {
    return {
      icons
    }
  },
 
}
</script>

<style lang="scss" scoped>
.skill {
  width: 100%;
  height: 4.666667rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > .skill-box {
    width: 9.466667rem;
    height: 4.133333rem;
    background: rgba(255, 255, 255, 1);
    > .skill-title {
      width: 100%;
      height: 0.906667rem;
      font-size: 0.32rem;
      line-height: 0.906667rem;
      span:nth-child(1) {
        width: 1.84rem;
        height: 0.933333rem;
        float: left;
        margin: 0.123rem 0.16rem 0rem 0.24rem;
        img {
          display: inline-block;
          width: 1.84rem;
          height: 0.72rem;
        }
      }
      span:nth-child(2) {
        width: 0.826667rem;
        text-align: center;
        float: left;
        font-weight: bolder;
      }
      span:nth-child(3) {
        width: 1.6rem;
        margin-left: .266667rem;
        float: left;
      }
      span:nth-child(4){
          width: 1.866667rem;
          color: #f23030;
        //   padding: 0rem .586667rem 0rem 0rem;
          float: right;
          >i{
              width: .293333rem;
              height: .293333rem
          }
      }
    }
  }
}
</style>
