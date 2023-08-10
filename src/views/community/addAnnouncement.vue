<template>
  <div class="announcement">
    <el-card>
      <div slot="header">
        <div class="title">{{ title }}</div>
      </div>
      <div class="form-content">
        <el-form class="form-content-table" ref="form" :model="form" label-width="80px">
          <el-form-item label="公告名称">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.content" :autosize="{ minRows: 15, maxRows: 30}"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即发布</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

  </div>
</template>

<script>
import {dateFormat} from '@/utils/utils'

export default {
  name: "announcement",
  data() {
    return {
      title: '发布公告',
      form: {
        title: '',
        content: ''
      }
    }
  },
  mounted() {
    if (this.$route.query.id) {
      this.getAnnouncementById(this.$route.query.id)
    }
  },
  methods: {
    onSubmit() {
      let param = {title: this.form.title,content:this.form.content}
      this.$api.send('saveAnnouncement', param).then(res => {
        if (res.data.state == 200) {
          this.$message.success('操作成功');
          this.$router.push({path: '/mainpage3/mainsubpage3/mainsubpage31'})
        } else {
          this.$message.error('网络错误');
        }
      }).catch(error => {
        this.$message.error('网络请求错误');
      })
    }
  }


}
</script>

<style scoped>
.announcement {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-content {
  display: flex;
  justify-content: center;
  width: 100%;

}

.form-content-table {
  width: 1200px;
}
</style>