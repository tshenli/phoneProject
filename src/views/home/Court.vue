<template>
    <div class="court_con">
        <!-- court上半部分标题结构 -->
        <!-- v-if做判断：当type===1时，使用court1布局，否则使用court2布局 -->
        <div class="court1" v-if="item.type===1">
            <div v-text="item.list[0].title"></div>
            <div v-text="item.list[0].desc"></div>
        </div>
        <!-- court下半部分标题结构 -->
        <div class="court2" v-else>
            <div>
                <div v-text="item.list[0].title">TCL</div>
                <div v-text="item.list[0].desc">TCL专区</div>
            </div>
            <div>
                <div v-text="item.list[1].title">傲娇女王</div>
                <div v-text="item.list[1].desc">自信而美丽</div>
            </div>        
        </div>
        <!-- court整体图片布局 -->
        <div class="picture">
            <div>
                <img :src="item.list[0].src" alt="">
            </div>       
            <div>
                <img :src="item.list[1].src" alt="">
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: "court",
  props: ["item"]
};
</script>

<style lang="scss" scoped>
.court_con {
  background-color: white;
  width: 4.6rem;
  height: 3.2rem;
  padding: .19rem;
  box-sizing: border-box;
  overflow: hidden;
  display: inline-block;
  margin-right: .066667rem;
  .court1 {
    text-align: left;
    > div:nth-child(1) {
      font-size: .43rem;
      color: rgba(25, 123, 251, 1);
    }
    > div:nth-child(2) {
       color: #666771;
      font-size: .32rem;
    }
  }
  .court2 {
    display: flex;
    text-align: left;
    > div {
      flex: 1;
      > div:nth-child(1) {
        display: block;
        font-size: 0.43rem;
        color: #000;
      }
      > div:nth-child(2) {
        font-size: 0.32rem;
        color: #666771;
      }
    }
  }
  .picture {
    display: flex;
    > div {
      flex: 1;
      text-align: center;
      vertical-align: middle;
      height: 100%;
      > img {
        width: 1.6rem;
        height: 1.6rem;
        display: inline-block;
        margin-top: 0.22rem;
      }
    }
  }
}
</style>
