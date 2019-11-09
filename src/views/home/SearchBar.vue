<template>
    <div class="search">
        <div>
            <i class="fa fa-navicon"></i>
            <header>
                <span>JD</span>
                <i class="fa fa-search"></i>
                <input type="text" placeholder="电脑主机">
            </header>
            <span>登录</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "searchbar"
};
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
  > div {
    height: 1.173333rem;
    background: rgba(142, 74, 1, 1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 10rem;
    > i {
      width: 0.533333rem;
      height: 0.48rem;
      color: #fff;
      line-height: 0.48rem;
      font-size: 0.64rem;
    }
    header {
      width: 7.28rem;
      height: 0.8rem;
      background: #f7f7f7;
      border-radius: 0.4rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      > span {
        width: 1rem;
        height: 0.5rem;
        color: red;
        font-size: 0.466667rem;
        font-weight: bolder;
        box-sizing: border-box;
        border-right: 0.026667rem solid #ccc;
        margin-right: 0.213333rem;
        text-align: center;
      }
      i {
        width: 0.48rem;
        height: 0.533333rem;
        font-size: 0.5rem;
        color: #ccc;
      }
      input {
        width: 5.2rem;
        height: 0.666667rem;
        border: none;
        outline: none;
        background: #f7f7f7;
        margin-left: 0.266667rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: 0.333333rem;
      }
    }
    span {
      width: 0.746667rem;
      height: 0.56rem;
      color: #fff;
      font-size: 0.373333rem;
    }
  }
}
</style>
