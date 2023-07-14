<template>
  <div class="content">
    <el-container class="container">
      <el-header>
        <topheader :user-name = userName @isCollapse="toggleMenu"></topheader>
      </el-header>
      <el-container >
        <el-aside width="auto">
          <leftmenu :isCollapse = "isCollapse"></leftmenu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import topheader from "@/components/topheader";
import leftmenu from "@/components/leftmenu";
import * as utils from '@/utils/utils'
export default {
  name: "mainpage",
  components:{
    topheader,
    leftmenu
  },
  data(){
    return{
      userName: '--',
      isCollapse:false,
    }
  },
  mounted() {
    let userInfo = JSON.parse(utils.getStorage('userInfo'))
    this.userName =userInfo.userName
  },
  methods:{
    toggleMenu(isCollapse) {
      console.log(isCollapse)
      this.isCollapse = isCollapse
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  height: 100%;
}
.container{
  height: 100%;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  //background-color: #D3DCE6;
  color: #333;
  line-height: 200px;
  //min-width: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>