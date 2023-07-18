<template>
  <div class="sub-content">
    <div class="title">仪表板</div>
    <el-divider></el-divider>
    <div class="dashboard">
      <!--  统计面板  -->
      <el-row :gutter="0" class="static">
        <el-col :span="6">
          <div>
            <el-statistic group-separator="," :precision="2" :value="119" title="今日新增人数"></el-statistic>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-statistic title="年度采集总数量">
              <template slot="formatter"> 23232 </template>
            </el-statistic>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-statistic group-separator="," :precision="2" decimal-separator="." :value="1200" title="本年总人数">
              <template slot="prefix">
                <i class="el-icon-s-flag" style="color: red"></i>
              </template>
              <template slot="suffix">
                <i class="el-icon-s-flag" style="color: blue"></i>
              </template>
            </el-statistic>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-statistic :value="520" title="本月诊疗建议">
              <template slot="suffix">
              <span >
                <i class="el-icon-star-off" ></i>
              </span>
              </template>
            </el-statistic>
          </div>
        </el-col>
      </el-row>

      <el-row class="notice" >
        <el-col :span="5" >
            <el-card >
              <div slot="header" class="clearfix">
                <span>今日公告</span>
                <el-button style="float: right; padding: 3px 0" type="text">详情</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="notice-text">
                {{'公告内容 ' + o }}
              </div>
            </el-card>
        </el-col>


        <el-col :span="5" style="margin-left: 40px" >
          <el-card>
            <div slot="header" class="clearfix">
              <span>文章精选</span>
              <el-button style="float: right; padding: 3px 0" type="text">详情</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="notice-text">
              {{'文章精选 ' + o }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="10" style="margin-left: auto" class="enter-list">
          <el-card shadow="always" class="enter-card" @click.native="tohome()">
            <i class="el-icon-s-marketing enter-card-icon" style="color: #409eff" ></i>
            仪表盘
          </el-card>
          <el-card shadow="always" class="enter-card"  @click.native="tocollect">
            <i class="el-icon-s-order enter-card-icon"  style="color: #409eff"></i>
            采集数据
          </el-card>
          <el-card shadow="always" class="enter-card"  @click.native="tocontrol">
            <i class="el-icon-s-claim enter-card-icon"></i>
            控制台
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainsubpage1",
  data(){
    return {

    }
  },
  methods:{
    tohome(){

    },
    tocollect(){
      console.log('collect')
      this.$router.push({path:'/mainpage2/mainsubpage2'})
    },
    tocontrol(){
      console.log('collect')
      this.$router.push({path:'/mainpage3/mainsubpage3/mainsubpage31'})
    }
  }
}
</script>

<style scoped lang="scss">
.sub-content {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 95%;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.title {
  display: flex;
  padding-left: 28px;
  padding-top: 28px;
  color: black;
  font-size: 28px;
  font-weight: 600;
}

.dashboard {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.static{
  width: 100%;
}
.notice{
  display: flex;
  width: 100%;
  padding: 50px;

}
.notice-text{
  font-size: 14px;
}
.cir-progress{
  padding: 20px;
}
.enter-list{
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  padding: 10px;
  justify-content: space-between;
  .enter-card{
    width: 180px;
    height: 60px;
    .enter-card-icon{
      font-size: 20px;
      color: #409eff
    }
  }
}

</style>