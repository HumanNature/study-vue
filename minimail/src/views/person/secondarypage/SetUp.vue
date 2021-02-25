<template>
  <div class="aa">
    <nav-bar class="nav">
      <div slot="left" class="back" @click="BackClick">
        <img src="~assets/img/profile/setUp/fanhui.svg" alt="" />
      </div>
      <div slot="center">设置</div>
    </nav-bar>
    <li @click='btnClick1'>
      <span>收货地址</span>
      <div class="kongbai"></div>
      <i></i>
    </li>
    <li @click='btnClick2'>
      <span>账号与安全</span>
      <div class="kongbai"></div>
      <i></i>
    </li>
    <li @click='btnClick3'>
      <span>支付设置</span>
      <div class="kongbai"></div>
      <i></i>
    </li>
    <div class="br"></div>
    <li @click='btnClick4'>
      <span>字体设置</span>
      <div class="kongbai"></div>
      <i></i>
    </li>
    <li @click='btnClick5'>
      <span>消息接收设置</span>
      <div class="kongbai"></div>
      <i></i>
    </li>
    <li @click='btnClick6'>
      <span>我的档案</span>
      <div class="kongbai"></div>
      <i></i>
    </li>
    <div class="br"></div>
    <li @click='btnClick7'>
      <span>通用</span>
      <div class="kongbai"></div>
      <i></i>
    </li>
    <li @click='btnClick8'>
      <span>关于</span>
      <div class="kongbai"></div>
      <i></i>
    </li>
    <li @click='btnClick9'>
      <span>常见问题</span>
      <div class="kongbai"></div>
      <i></i>
    </li>
    <div class="br"></div>
    <li>
      <span class="logout">退出登录</span>
    </li>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  name: "SetUp",
  methods: {
    BackClick() {
      this.$router.back();
    },
    btnClick1(){
      this.$router.push('/SetUp/ReceivingAddress')
    },
    btnClick2(){
      this.$router.push('/SetUp/AccountSecurity')
    },
    btnClick3(){
      this.$router.push('/SetUp/Payment')
    },
    btnClick4(){
      this.$router.push('/SetUp/Typeface')
    },
    btnClick5(){
      this.$router.push('/SetUp/MessageReceipt')
    },
    btnClick6(){
      this.$router.push('/SetUp/MyFiles')
    },
    btnClick7(){
      this.$router.push('/SetUp/Currency')
    },
    btnClick8(){
      this.$router.push('/SetUp/About')
    },
    btnClick9(){
      this.$router.push('/SetUp/CommonProbleme')
    },
  },
};
</script>

<style scoped>
.aa {
  background-color: #eee;
  height: 100vh;
}
.nav {
  background-color: #fc86bf;
  color: #fff;
}
.back img {
  margin-left: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
}
li {
  text-indent: 1rem;
  list-style: none;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  position: relative;
}
li span {
  flex: 10;
  font-size: 16px;
}
.kongbai {
  flex: 1;
  width: 1rem;
  height: 1rem;
}
li i {
  flex: 1;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: url("../../../assets/img/profile/setUp/qianjin.svg") no-repeat;
  background-size: 1rem;
}
.br {
  height: 1rem;
  background-color: #eee;
}
.logout {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
</style>