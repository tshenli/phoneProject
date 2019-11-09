<template>
    <div class="rec_list">
        <div>
            <img :src="item.src" alt="">
        </div>
        <div class="desc" >
            <img :src="item.desc_src" alt="">
            <span v-text="item.desc"></span>          
        </div>
        <div class="current1">
            <div>{{item.current_price | currency}}</div>
            <div class="look">看相似</div>
        </div> 
        <div class="current2">
            <div v-text="item.puls_price"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "recommend",
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.rec_list {
  width: 4.72rem;
  height: 7.12rem;
  float: left;
  padding: 0rem 0rem 0.106667rem 0.053333rem;
  box-sizing: border-box;
  background: #fff;
  > div {
    width: 4.666667rem;
    height: 4.666667rem;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    width: 4.666667rem;
    height: 0.826667rem;
    color: #232326;
    font-size: 0.346667rem;
    margin: 0.133333rem 0rem 0.08rem;
    padding: 0rem 0.106667rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; // 要显示的行数
    -webkit-box-orient: vertical;
    > img {
      width: 1.253333rem;
      height: 0.306667rem;
      margin: 0rem 0.106667rem 0rem 0rem;
    }
  }
  .current1 {
    font-size: 0.346667rem;
    overflow: hidden;
    height: 0.693333rem;
    > div:nth-child(1) {
      //   width: 1.253333rem;
      //   height: 0.666667rem;
      line-height: 0.666667rem;
      color: #f23030;
      font-size: 0.43rem;
      padding: 0rem 0.133333rem 0rem 0.053333rem;
      font-weight: bolder;
      float: left;
    }
    > .look {
      float: right;
      text-align: center;
      color: #686868;
      font-size: 0.32rem;
      //   width: 1.306667rem;
      //   height: 0.64rem;
      line-height: 0.64rem;
      padding: 0 0.13rem;
      border-radius: 0.07rem;
      border: 1px solid #686868;
    }
  }
  .current2 {
    font-size: 0.346667rem;
    overflow: hidden;
    height: 0.693333rem;
    > div {
      height: 0.693333rem;
      outline: 0.373333rem;
      font-size: 0.346667rem;
      padding-left: 0.106667rem;
      vertical-align: middle;
      color: #232326;
    }
  }
}
</style>
