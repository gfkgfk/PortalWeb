<template>
  <div class="content">


    <el-menu class="menu"
             :style="{minWidth:isCollapse?'0px':'200px'}"
             :default-active="defaultActive"
             :collapse="isCollapse"
             @select="menuSelected"
             @open="handleOpen"
             @close="handleClose"
             :background-color="backgroundColor"
             :text-color="textColor"
             :active-text-color="activeTextColor">
      <leftmenuitem :menu-item-data="menuData"></leftmenuitem>

    </el-menu>
  </div>
</template>

<script>
import leftmenuitem from "@/components/leftmenuitem";

export default {
  name: "leftmenu",
  data() {
    return {
      defaultActive: '',
      backgroundColor: "#545c64",//菜单背景色
      textColor: "#fff",//菜单文字颜色
      activeTextColor: "#ffd04b",//菜单选中文字颜色
    }
  },
  components: {
    leftmenuitem
  },
  // isCollapse //左侧菜单展开/收缩状态
  props: ['isCollapse', 'menuData'],
  mounted() {
  },
  methods: {
    handleOpen(e) {
      console.log(e)
    },
    handleClose() {

    },
    menuSelected(index, indexPath,e) {
      console.log('index:', index, 'indexPath', indexPath)
      this.$emit('onMenuSelect', {index, indexPath})
    }

  }
}
</script>

<style scoped>
.content {

}

.menu {
  height: 100%;
}

.el-menu {
  border-right-width: 0;
}
</style>