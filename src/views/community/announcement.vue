<template>
  <div class="announcement">
    <el-card>
      <div slot="header">
        <div class="title">{{ title }}</div>
      </div>
      <div >
        <div class="time">{{ createTime }}</div>
        <div class="content">{{ content }}</div>
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
      title: 'XXXXXX',
      content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
      createTime: '2023-xx-xx',
    }
  },
  mounted() {
    if (this.$route.query.id) {
      this.getAnnouncementById(this.$route.query.id)
    }
  },
  methods: {
    getAnnouncementById(id) {
      let param = {
        id
      }
      this.$api.send('getAnnouncementById', param).then(res => {
        if (res.data.state == 200) {
          this.title = res.data.data.title
          this.content = res.data.data.content
          this.createTime =dateFormat("yyyy-MM-dd hh:mm:ss",res.data.data.createTime)
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
.title{
  font-size: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.time{
  padding-right: 60px;
  text-align: right;
  color: gray;
}
.content{
  padding: 50px;
  font-size: 16px;
  display: flex;
  align-items: center;
}
</style>