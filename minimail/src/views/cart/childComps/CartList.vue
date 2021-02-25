<template>
  <scroll class="content" ref="scroll">
    <cart-list-item v-for="item in cartList" :key="item.iid" :itemInfo="item" />
  </scroll>
</template>
<script>
import { mapGetters } from "vuex";
import Scroll from "../../../components/common/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>
<style scoped>
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 93px;
}
</style>