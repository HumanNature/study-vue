<template>
  <div class="list">
      <div class="item" v-for="(item, index) in subcategories.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
  </div>
</template>
<script>
  import GridView from 'components/common/gridView/GridView'
  export default {
    name: "TabContentCategory",
    components: {
      GridView
    },
    props: {
      subcategories: {
        type: Object,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .list{
    display: flex;
    flex-flow: wrap;
    padding: 1rem 0.5rem 0 0.5rem;
  }
  .item {
    text-align: center;
    font-size: 12px;
    margin-top: 5px;
    width: 33.3%;
  }

  .item-img {
    width: 5rem;
    height: 5rem;
  }

  .item-text {
    margin-top: 1rem;
  }
</style>
