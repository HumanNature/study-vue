<template>
  <div class="DetailNavBar">
    <!-- 导航栏 -->
    <nav-bar>
      <div slot="left" class="back" @click="BackClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div class="title" slot="center">
        <div
          v-for="(item, index) in titles"
          class="title-item"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    BackClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
/* 导航栏 */
.back img {
  margin-left: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
}
.title {
  font-size: 13px;
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: #fc86bf;
}
</style>