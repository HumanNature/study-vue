<template>
  <div class="header">
    <div class="login">
      <div class="login-left">
        <img src="~assets/img/profile/touxiang.svg" alt="" />
        <div>
          <span>登录/注册 ></span>
          <p>未绑定手机号</p>
        </div>
      </div>
      <div class="login-right">
        <div class="kongbai"></div>
        <div class="news">
          <img src="~assets/img/profile/xiaoxi.svg" alt="" />
          <span>消息</span>
        </div>
      </div>
    </div>
    <div class="notice">
      <div class="notice-info notice-collect">
        <img class="notice-icon" src="~assets/img/profile/shoucang.svg" alt="" />
        <span>收藏夹</span>
      </div>
      <div class="notice-info notice-seller">
        <img class="notice-icon" src="~assets/img/profile/guanzhu.svg" alt="" />
        <span>关注店家</span>
      </div>
      <div class="notice-info notice-record">
        <img class="notice-icon" src="~assets/img/profile/liulanjilu.svg" alt="" />
        <span>浏览记录</span>
      </div>
      <div class="notice-info notice-coupon">
        <img class="notice-icon" src="~assets/img/profile/youhuiquan.svg" alt="" />
        <span>优惠券</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeListHead",
};
</script>

<style scoped>
/* 头部 */
.header {
  height: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}
/* 登录 */
.login {
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  background-color: #FC86BF;
  color: #333;
}
.login-left {
  flex: 1;
  height: 4rem;
  width: 12rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 2rem;
}
.login-left img {
  width: 3rem;
  height: 3rem;
  margin: 0 0.5rem;
}
.login-left p {
  margin-top: 5px;
  color: #888;
  font-size: 12px;
}
.login-right {
  flex: 1;
  display: flex;
}
.kongbai{
  flex: 1;
  width: 1rem;
  height: 1rem;
}
.news {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}
.news img {
  width: 2rem;
  height: 2rem;
  margin-bottom: 5px;
}
/* 留意的内容 */
.notice {
  flex: 1;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FC86BF;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.notice-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.notice-info span {
  font-size: 12px;
  color: #fff;
}
.notice-icon {
  width: 2rem;
  height: 2rem;
  margin-bottom: 5px;
}
</style>