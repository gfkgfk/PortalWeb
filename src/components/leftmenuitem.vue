<template>
  <fragment>
    <template v-for="menu in menuItemData">
      <el-submenu
          v-if="menu.submenu && menu.submenu.length > 0"
          :index="menu.path"
      >
        <template slot="title">
          <!-- 自定义图标-->
          <!--          <i :class="'iconfont icon-'+menu.imageUrl" />-->
          <i :class="'el-icon-'+menu.iconType"/>
          <span>{{ menu.name }}</span>
        </template>
        <!-- 调用自身-->
        <leftmenuitem :menu-item-data="menu.submenu"></leftmenuitem>
      </el-submenu>

      <!-- 如果没有子菜单，则显示当前内容 -->
      <el-menu-item v-else :index="menu.path">
        <!--        <i :class="'iconfont icon-'+menu.imageUrl" />-->
        <i :class="'el-icon-'+menu.iconType"/>
        <span>{{ menu.name }}</span>
      </el-menu-item>
    </template>
  </fragment>

</template>

<script>
export default {
  name: "leftmenuitem",
  // inject: ['reload'],   //inject?
  props: {
    menuItemData: {},
  },
  watch: {},
  created() {
  },
  methods: {}
}

</script>

<style scoped>

</style>