<template>
  <div class="me-serve" @click="fuliclick">
    <div class="serve-title">我的服务</div>
    <div class="serve-info">
      <div class="serve-icon">
        <img src="~assets/img/profile/fuwu/qianggou.svg" alt="" />
        <span>限时抢购</span>
      </div>
      <div class="serve-icon">
        <img src="~assets/img/profile/fuwu/tuijian.svg" alt="" />
        <span>商品推荐</span>
      </div>
      <div class="serve-icon">
        <img src="~assets/img/profile/fuwu/fuli.svg" alt="" />
        <span>专属福利</span>
      </div>
      <div class="serve-icon">
        <img src="~assets/img/profile/fuwu/jingpin.svg" alt="" />
        <span>精品礼箱</span>
      </div>
      <div class="serve-icon">
        <img src="~assets/img/profile/fuwu/faxian.svg" alt="" />
        <span>发现</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MeListServe",
  methods: {
    fuliclick() {
      window.location.href =
        "https://act.mogu.com/fastbuy/indexh5?acm=3.mce.1_10_1sdo0.140378.0.72upQsq0DA2Sk.pos_870-m_662012-sd_119-mf_4537_1211936-idx_0-mfs_1-dm1_5000&ptp=32._mf1_1239_4537.banner_140378.1.j8cliO2T";
    },
  },
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
  color: #888;
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