<template>
  <div class="content">
    <div class="logo">医疗智能设备数据采集信息系统</div>
    <div class="toggle">
      <i :class="isCollapse?'el-icon-s-fold user-setting':'el-icon-s-unfold user-setting'" @click="toggleMenu()"></i>
    </div>

    <div class="user">
      <div class="user-name">{{ userName }}</div>
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link setting-dropdown-icon">
          <i class="el-icon-setting user-setting"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="info">个人资料</el-dropdown-item>
          <el-dropdown-item command="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
  </div>

</template>

<script>
import * as utils from '@/utils/utils'

export default {
  name: "topheader",
  props: ['userName'],
  data() {
    return {
      isCollapse: false
    }
  },
  mounted() {
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "info":
          break;
        case "logout":
          utils.clearInfo();
          this.$router.replace({path: '/login'})
          location.reload();
          break;
        default:
          break;
      }
    },
    toggleMenu() {
      this.isCollapse = !this.isCollapse
      this.$emit('isCollapse',this.isCollapse)
    }
  }
}
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
  display: flex;
}

.logo {
  margin-left: 20px;
}

.toggle {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.user {
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.user-name {
  font-size: 20px;
  margin-right: 20px;
}

.setting-dropdown-icon {
  display: flex;
  align-items: center;
}

.user-setting {
  font-size: 28px;
}

.user-setting:hover {
  color: white;
}

</style>