<template>
  <div class="melist">
    <me-list-head />
    <me-list-indent class="title"/>
    <me-list-serve class="title" />
    <me-list-set-up class="title" />
    <me-list-member class="title" />
  </div>
</template>

<script>
import MeListHead from './MeListHead.vue';
import MeListIndent from './MeListIndent.vue';
import MeListMember from './MeListMember.vue';
import MeListServe from './MeListServe.vue';
import MeListSetUp from './MeListSetUp.vue';
export default {
  components: { MeListHead, MeListIndent, MeListMember, MeListServe, MeListSetUp },
  name: "MeList",
};
</script>

<style scoped>
/* 页面 */
.melist {
  height: 100%;
  width: 100%;
  background-color: #eee;
}
.title{
  margin-top: 1rem;
}
</style>