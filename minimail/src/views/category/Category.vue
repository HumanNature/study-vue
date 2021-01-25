<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem" />
      <scroll id="tab-content" :data="[categoryData]" ref="scroll">
        <tab-content-category :subcategories="showSubcategory" />
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import TabMenu from "./childComps/TabMenu";
import TabContentCategory from "./childComps/TabContentCategory";
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import { getCategory, getSubcategory } from "network/category";
export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,

    Scroll,
    TabContentCategory,
    GoodsList,
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
    };
  },
  created() {
    // 1.请求分类数据
    this._getCategory();
    // 2.监听图片加载完成
    this.$bus.$on("imgLoad", () => {
      this.$refs.scroll.refresh();
    });
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        // 1.获取分类数据
        this.categories = res.data.data.category.list;
        // console.log(res);
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        // console.log(res);
        this.categoryData[index].subcategories = res.data.data;
        this.categoryData = { ...this.categoryData };
      });
    },

    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this._getSubcategories(index);
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}

.nav-bar {
  background-color: #FC86BF;
  font-weight: 700;
  color: #fff;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 3.5rem;

  display: flex;
}

#tab-content {
  height: 100%;
  flex: 1;
}
</style>
