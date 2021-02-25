<template>
  <div>
      <nav-bar class="nav">
        <div slot="left" class="back" @click="BackClick">
        <img src="~assets/img/profile/setUp/fanhui.svg" alt="" />
      </div>
        <div slot="center">账号与安全</div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
    name:'AccountSecurity',
    methods: {
      BackClick(){
        this.$router.back()
      }
    },
}
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
</style>