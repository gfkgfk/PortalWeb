<template>
  <div class="sub-content">
    <el-table
        height="250"
        border
        style="width: 901px"
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
          prop="userName"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="measureValue"
          width="180"
          label="测量值">

      </el-table-column>
      <el-table-column
          prop="deviceType"
          width="180"
          label="测量设备">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.deviceType == 1 ? '血压计' : '未知' }}</span>
        </template>
      </el-table-column>
      <el-table-column
          width="180"
          label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="success"
              @click="handleEdit(scope.$index, scope.row)">反馈
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
import {dateFormat} from '@/utils/utils'

export default {
  name: "mainsubpage2",

  data() {
    return {
      tableData: [],
    }
  },
  mounted() {
    this.getMeasureHistory()
  },
  methods: {
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
      console.log(index, item)
      this.$message.error('功能暂未开放');
    },
    handleDelete(index, item) {
      console.log(index, item)
      this.$message.error('功能暂未开放');
    }
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
</style>