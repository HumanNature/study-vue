<template>
  <div>
    <nav-bar class="nav">
      <div slot="left" class="back" @click="BackClick">
        <img src="~assets/img/profile/setUp/fanhui.svg" alt="" />
      </div>
      <div slot="center">全部订单</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      @tabClick="tabClick"
      :titles="['待付款', '待发货', '待收货', '退还/售后', '评价']"
    />
    <div class="box">
      <div class="d1">空 空</div>
      <div class="d2">如 也</div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../../../components/common/navbar/NavBar.vue";
import TabControl from "../../../../components/content/tabcontrol/TabControl.vue";
export default {
  components: { NavBar, TabControl },
  name: "IndentList",
  data() {
    return {
      currentType: "A",
    };
  },
  methods: {
    BackClick() {
      this.$router.back();
    },
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "A";
          break;
        case 1:
          this.currentType = "B";
          break;
        case 2:
          this.currentType = "C";
          break;
        case 3:
          this.currentType = "D";
          break;
        case 4:
          this.currentType = "E";
          break;
      }
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: #fc86bf;
  color: #fff;
}
.back img {
  margin-left: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
}
.tab-control {
  border-bottom: 1px solid #eee;
}
body {
  perspective: 400px;
}
.box {
  position: relative;
  width: 20rem;
  height: 20rem;
  margin: 100px auto;
  animation: move 2s infinite;
  transform-style: preserve-3d;
}
.d1,
.d2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 20rem;
}
.d1 {
  background-color: #fc86bf;
  transition: all 1s;
}
.d2 {
  background-color: #fc86bf;
  transform: rotateY(180deg);
}
@keyframes move {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
</style>