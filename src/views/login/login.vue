<template>
  <div class="content">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="header-title">登录</span>
      </div>
      <div class="login">
        <el-input class="user-input"
                  placeholder="请输入用户名"
                  v-model="userName"
                  clearable>
        </el-input>
        <div>
          <el-input class="user-input" placeholder="请输入密码" v-model="userPwd" show-password>
          </el-input>
          <div class="forget" @click="forget()">忘记密码 ></div>
        </div>
        <el-button class="login-btn" type="primary" :loading="loading" @click="login">登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      userName: '',
      userPwd: '',
      loading: false,
    }
  },
  methods: {
    login() {
      let param = {
        userName: this.userName,
        password: this.userPwd,
      }
      this.$api.send('login', param).then(res => {
        console.log('登录', res)
        if (res.statusCode == 200 && res.data.resultCode == 200) {
          this.$router.push({path: '/home'})
        } else {
          this.$message.error('用户名密码错误');
        }
      }).catch(error => {
        this.$message.error('用户名密码错误');
      })
    },
    forget() {
      this.$message.error('暂未开放该功能');
    }

  }
}
</script>

<style scoped lang="scss">
.content {
  background: url("../../assets/img/bg.jpeg") no-repeat;
  background-size: cover;
  height: 100%;
}

.header-title {
  font-weight: 600;
}

.box-card {
  position: fixed; /* 外层容器使用 position: fixed */
  top: 50%; /* top定位值为50% */
  left: 50%; /* left定位值为50% */
  border: 1px solid #ccc; /* 边框 */
  margin-left: -220px;
  margin-top: -160px;

  width: 440px;
  height: 320px;
}

.login {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  height: 200px; /* new */
}

.user-input {
  font-size: 16px;
  width: 280px;
}

.login-btn {
  width: 180px;
}

::v-deep .el-input__inner {
  font-size: 14px;
  //background-color: red !important;
}

.forget {
  margin-top: 4px;
  font-size: 10px;
  color: #49b0f3;
  text-align: right;
}

.forget:hover {
  cursor: pointer;
}


</style>