<template>
  <div class="content">
    <el-container class="container">
      <el-header>
        <topheader class="topheader" :user-name=userName @isCollapse="toggleMenu"></topheader>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <leftmenu :menu-data="menuData" :isCollapse="isCollapse" @onMenuSelect="onMenuSelect"></leftmenu>
        </el-aside>
        <el-main>
            <!--  面包屑  -->
            <el-breadcrumb separator="/" v-if="currentPath" class="breadcrumb">

              <!--            <el-breadcrumb-item v-for="(item,index) in currentPath" :to="index==currentPath.length-1?{ path: '/mainpage/mainsubpage1' }:''">-->
              <!--              {{index}}{{ item }}</el-breadcrumb-item>-->
              <el-breadcrumb-item v-for="(item,index) in currentPath" :key="index">
                {{ getPathName(item, menuData).name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
            <el-breadcrumb separator="/" v-else class="breadcrumb">
              <el-breadcrumb-item>
                --
              </el-breadcrumb-item>
            </el-breadcrumb>
          <!--  视口  -->
          <router-view>
          </router-view>

        </el-main>
      </el-container>
      <el-footer>
        <bottomfooter class="footer"></bottomfooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import topheader from "@/components/topheader";
import leftmenu from "@/components/leftmenu";
import bottomfooter from "@/components/bottomfooter"
import commontags from "@/components/commontags"
import * as utils from '@/utils/utils'

export default {
  name: "mainpage",
  components: {
    topheader,
    leftmenu,
    bottomfooter,
    commontags
  },
  data() {
    return {
      userName: '--',
      isCollapse: false,
      menuData:
          [
            {
              name: '主页',
              type: 'submenu',
              path: '/mainpage',
              iconType: 's-home',
              submenu: [{
                name: '仪表板',
                path: '/mainpage/mainsubpage1',
                type: 'item',
                iconType: 's-marketing'
              }]
            },
            {
              name: '数据采集',
              type: 'submenu',
              path: '/mainpage2',
              iconType: 's-promotion',
              submenu: [{
                name: '数据采集明细',
                path: '/mainpage2/mainsubpage2',
                type: 'item',
                iconType: 's-order'
              }]
            },
            {
              name: '控制台',
              type: 'submenu',
              path: '/mainpage3',
              iconType: 's-operation',
              submenu: [{
                name: '控制台',
                path: '/mainpage3/mainsubpage3',
                type: 'submenu',
                iconType: 's-cooperation',
                submenu: [{
                  name: '控制台3-1-1 /-----------长度测试------------/',
                  path: '/mainpage3/mainsubpage3/mainsubpage31',
                  type: 'item',
                  iconType: 's-claim'
                }]
              }]
            }
          ],
      currentPath: '',
    }
  },
  mounted() {
    let userInfo = JSON.parse(utils.getStorage('userInfo'))
    this.userName = userInfo.userName
  },
  methods: {
    toggleMenu(isCollapse) {
      console.log(isCollapse)
      this.isCollapse = isCollapse
    },
    getPathName(path, data) {
      for (let i = 0; i < data.length; i++) {

        if (data[i].path && data[i].path == path) {
          return data[i]
        } else {
          if (data[i].submenu) {
            if (this.getPathName(path, data[i].submenu)) {
              return this.getPathName(path, data[i].submenu)
            } else {
              continue
            }
          } else {
            continue
          }
        }
      }
      return null
    },
    onMenuSelect(menu) {
      console.log('menu', menu)
      this.currentPath = menu.indexPath //路径列表
      this.navTo(menu.index)
    },
    navTo(path, query) {//query:{xxx:xxx}
      this.$router.push({path: path, query: query})
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  height: 100%;
}

.container {
  height: 100%;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0px;
}

.el-footer {
  padding: 0px;
}

.el-aside {
  //background-color: #D3DCE6;
  color: #333;
  line-height: 200px;
  //min-width: 200px;
}

.el-main {
  background-color: #E9EEF3;
  box-sizing: border-box;
  height: 100%;
}

.topheader {
  background-color: #49b0f3;
}

.footer {
  background-color: #49b0f3;
}

.breadcrumb {
  height: 5%;
  padding: 10px;
  box-sizing: border-box;
}
</style>