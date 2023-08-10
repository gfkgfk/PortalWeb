<template>
  <div class="sub-content">
    <div class="addNewBtn">

      <el-button
          size="mini"
          type="primary"
          @click="addAnnouncement()">
        新增
      </el-button>
    </div>
    <el-table
        height="250"
        border
        style="width: 100%"
        :data="tableData">
      <el-table-column
          prop="createTime"
          label="日期"
          width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ formatDateStr("yyyy-MM-dd hh:mm:ss", scope.row.createTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="title"
          label="标题"
          width="300">
      </el-table-column>
      <el-table-column
          prop="content"
          width="500"
          label="内容">
        <template slot-scope="scope">
          <span class="announcement-content">{{ scope.row.content}}</span>
        </template>
      </el-table-column>
      <el-table-column
          width="180"
          label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <el-dialog
        title="评估/反馈"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <div>删除后无法恢复，请确认是否要删除?</div>
      <div class="dialog-operation">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="confirm()">确 定</el-button>
      </div>

    </el-dialog>


  </div>

</template>

<script>
import {dateFormat} from '@/utils/utils'

export default {
  name: "mainsubpage3",

  data() {
    return {
      tableData: [],
      content: '',
      dialogVisible:false,
      selectedMeasure:{},
      selectedItem:{},
    }
  },
  mounted() {
    this.getAllAnnouncement()
  },
  methods: {
    addAnnouncement(){
      this.$router.push({path: '/mainpage/addAnnouncement'})
    },
    getAllAnnouncement() {
      let param = {}
      this.$api.send('getAllAnnouncement', param).then(res => {
        if (res.data.state == 200) {
          this.tableData = res.data.data
        } else {
          this.$message.error('网络错误');
        }
      }).catch(error => {
        this.$message.error('网络请求错误');
      })
    },
    deleteAnnouncement() {
      let param = {id:this.selectedItem.id}
      this.$api.send('deleteAnnouncement', param).then(res => {
        if (res.data.state == 200) {
          this.$message.success('操作成功');
          this.getAllAnnouncement()
        } else {
          this.$message.error('网络错误');
        }
      }).catch(error => {
        this.$message.error('网络请求错误');
      })
    },
    handleDelete(index, item) {
      console.log(index, item)
      this.dialogVisible=true
      this.selectedItem = item
    },

    confirm(){
      this.dialogVisible = false
      this.deleteAnnouncement()
    },
    cancel(){
      this.dialogVisible = false
    },


    getMeasureHistory() {
      let param = {}
      this.$api.send('getMeasureDetailsList', param).then(res => {
        if (res.data.state == 200) {
          this.tableData = res.data.data
        } else {
          this.$message.error('网络错误');
        }
      }).catch(error => {
        console.log(error)
        this.$message.error('网络请求错误');
      })
    },
    formatDateStr(fmt, date) {
      return dateFormat(fmt, date)
    },
    handleEdit(index, item) {

      console.log(item)
      this.selectedMeasure = item
      let param = {measureId:item.id}
      this.$api.send('getFeedBackById', param).then(res => {
        if (res.data.state == 200) {
          if(null==res.data.data){
            this.content = ''
          }else {
            this.content = res.data.data.content
          }
          this.dialogVisible = true
        } else {
          this.$message.error('网络错误');
        }
      }).catch(error => {
        console.log(error)
        this.$message.error('网络请求错误');
      })
    },
    handleClose(){
      this.dialogVisible = false;
    },


  }
}
</script>

<style scoped>
.sub-content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 95%;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  align-items: center;

}

.announcement-content{
  text-overflow: ellipsis;
  white-space: nowrap;
}

.addNewBtn{
  width: 100%;
  padding: 10px;
  margin-left: 20px;
}

.dialog-operation{
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>