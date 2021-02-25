<template>
  <div class="profile">
    <nav-bar class="navbar">
      <div slot="center">个人中心</div>
      <div slot="right" class="right-icon" @click='btnClick'>
        <img src="~assets/img/profile/setup.svg" alt="">
      </div>
    </nav-bar>
    <me-list />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import MeList from './mechild/MeList'
export default {
  name: "Preson",
  components: {
    NavBar,
    MeList, 
  },
  methods: {
      btnClick(){
          this.$router.push('/SetUp')
      }
  },
};
</script>

<style scoped>
.navbar {
  background-color: #FC86BF;
  color: #fff;
}
.right-icon{
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right-icon img{
  width: 1.5rem;
  height: 1.5rem;
}
</style>