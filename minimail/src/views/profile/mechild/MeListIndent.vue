<template>
  <div class="indent">
    <div class="indent-all">
      <span>全部订单</span>
      <i></i>
    </div>
    <div class="indent-list">
      <div class="indent-list-info">
        <img src="~assets/img/profile/fashouhuo/fukuan.svg" alt="" />
        <span>待付款</span>
      </div>
      <div class="indent-list-info">
        <img src="~assets/img/profile/fashouhuo/fahuo.svg" alt="" />
        <span>待发货</span>
      </div>
      <div class="indent-list-info">
        <img src="~assets/img/profile/fashouhuo/shouhuo.svg" alt="" />
        <span>待收货</span>
      </div>
      <div class="indent-list-info">
        <img src="~assets/img/profile/fashouhuo/shouhou.svg" alt="" />
        <span>退还/售后</span>
      </div>
      <div class="indent-list-info">
        <img src="~assets/img/profile/fashouhuo/pingjia.svg" alt="" />
        <span>评价</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeListIndent",
};
</script>

<style scoped>
.indent {
  height: 8rem;
  width: 95%;
  padding: 1rem 0.5rem;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
}
.indent-list {
  height: 6rem;
  font-size: 13px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.indent-all {
  /* height: 16px;
  line-height: 16px; */
  font-size: 12px;
  padding: 0 1rem;
}
.indent-all i {
  float: right;
  width: 12px;
  height: 12px;
  background: url('../../../assets/img/profile/youjiantou.svg')no-repeat;
  background-size: cover;
}
.indent-list-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.indent-list-info img {
  width: 1.8rem;
  height: 1.8rem;
  margin-bottom: 5px;
}
</style>