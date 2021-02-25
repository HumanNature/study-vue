<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad"/>
    <div class="goods-item-info">
      <p :title="goodsItem.title">{{ goodsItem.title }}</p>
      <div>
        <span class="goodItem-price">{{ goodsItem.price }}</span>
        <span>收藏:{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    },
  },
  methods: {
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  },
};
</script>

<style scoped>
.goods-item {
  width: 46%;
  margin: 5px 0;
  text-align: center;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
}
.goods-item-info p {
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-item-info div {
  display: flex;
  justify-content: space-evenly;
}
.goodItem-price {
  color: pink;
  text-decoration: underline;
}
</style>