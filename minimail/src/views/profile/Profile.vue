<template>
  <div class="profile">
    <nav-bar class="navbar">
      <!-- <div slot="center">我 的</div> -->
      <div slot="right" class="right-icon">
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
  name: "Profile",
  components: {
    NavBar,
    MeList, 
  },
};
</script>

<style scoped>
.navbar {
  background-color: #FC86BF;
  color: #fff;
  font-weight: bold;
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