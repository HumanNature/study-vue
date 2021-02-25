<template>
  <div>
    <nav-bar class="nav">
      <div slot="left" class="back" @click="BackClick">
        <img src="~assets/img/profile/setUp/fanhui.svg" alt="" />
      </div>
      <div slot="center">收货地址</div>
    </nav-bar>
    <mt-button type="default" @click="aa">default</mt-button>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import { MessageBox } from 'mint-ui'

export default {
  components: {
    NavBar,
  },
  name: "ReceivingAddress",
  data() {
    return {
      show3: false,
    };
  },
  methods: {
    BackClick() {
      this.$router.back();
    },
    aa() {
      MessageBox({
        title: "系统提示",
        message: "请问是否清空购物车?",
        showCancelButton: true,
      })
        .then((action) => {
          if (action === "confirm") {
            console.log(1);
          }
          if (action === "cancel") {
            console.log(2);
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>