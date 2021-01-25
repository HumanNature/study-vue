<template>
  <div class="me-serve">
    <div class="serve-title">我的服务</div>
    <div class="serve-info">
      <div class="serve-icon">
        <img src="~assets/img/profile/fuwu/fuli.svg" alt="" />
        <span>专属福利</span>
      </div>
      <div class="serve-icon">
        <img src="~assets/img/profile/fuwu/tuijian.svg" alt="" />
        <span>商品推荐</span>
      </div>
      <div class="serve-icon">
        <img src="~assets/img/profile/fuwu/faxian.svg" alt="" />
        <span>发现</span>
      </div>
      <div class="serve-icon">
        <img src="~assets/img/profile/fuwu/kefu.svg" alt="" />
        <span>客服中心</span>
      </div>
      <div class="serve-icon">
        <img src="~assets/img/profile/fuwu/bangzhu.svg" alt="" />
        <span>帮助与反馈</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeListServe",
};
</script>

<style scoped>
.me-serve {
  background-color: #fff;
  border-radius: 5px;
  width: 95%;
  margin: 0 auto;
  padding: 1rem 1rem 0 1rem;
}
.serve-title {
  font-weight: bold;
  font-size: 13px;
}
.serve-info {
  display: flex;
  flex-flow: wrap;
  margin-top: 10px;
}
.serve-icon {
  height: 3rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
}
.serve-icon img {
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 5px;
}
.serve-icon span {
  font-size: 12px;
  color: #888;
}
</style>