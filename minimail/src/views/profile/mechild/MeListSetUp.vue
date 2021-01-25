<template>
  <div class="me-set-up">
    <div class="setUp-title">我的设置</div>
    <div class="setUp-info">
      <div class="setUp-icon">
        <img src="~assets/img/profile/setUp/shouhuodizhi.svg" alt="" />
        <span>收货地址</span>
      </div>
      <div class="setUp-icon">
        <img src="~assets/img/profile/setUp/anquan.svg" alt="" />
        <span>安全设置</span>
      </div>
      <div class="setUp-icon">
        <img src="~assets/img/profile/setUp/anquan.svg" alt="" />
        <span>字体设置</span>
      </div>
      <div class="setUp-icon">
        <img src="~assets/img/profile/setUp/zhifu.svg" alt="" />
        <span>支付设置</span>
      </div>
      <div class="setUp-icon">
        <img src="~assets/img/profile/setUp/tongyong.svg" alt="" />
        <span>通用</span>
      </div>
      <div class="setUp-icon">
        <img src="~assets/img/profile/setUp/dangan.svg" alt="" />
        <span>我的档案</span>
      </div>
      <div class="setUp-icon">
        <img src="~assets/img/profile/setUp/guanyu.svg" alt="" />
        <span>关于</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeListSetUp",
};
</script>

<style scoped>
.me-set-up {
  background-color: #fff;
  border-radius: 5px;
  width: 95%;
  margin: 0 auto;
  padding: 1rem 1rem 0 1rem;
}
.setUp-title {
  font-weight: bold;
  font-size: 13px;
}
.setUp-info {
  display: flex;
  flex-flow: wrap;
  margin-top: 10px;
}
.setUp-icon {
  height: 3rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
}
.setUp-icon img {
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 5px;
}
.setUp-icon span {
  font-size: 12px;
  color: #888;
}
</style>