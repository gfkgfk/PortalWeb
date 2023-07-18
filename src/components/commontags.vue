<template>

  <div class="tags">
    <!-- tags标签页 -->
    <span style="width: 40px;display: inline-block; border-right: 1px solid #ccc;">
      <i class="el-icon-caret-left"></i>
      <i class="el-icon-caret-left"></i>
    </span>
    <el-tag
        :key="tag.name"
        type="info"
        v-for="(tag,index) in tags"
        :closable="tag.name!=='home'"
        :disable-transitions="false"
        @close="handleClose(tag,index)"
        @click="changeMenu(tag)"
        :effect="$route.name === tag.name ? 'dark' : 'plain'">
      {{ tag.label }}
    </el-tag>
    <span style="width: 40px;display: inline-block; position: absolute; left: 96.5%; top: 0%; border-left: 1px solid #ccc; ">
      <i class="el-icon-caret-right"></i>
      <i class="el-icon-caret-right"></i>
    </span>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
  name: 'commontags',
  computed: {
    ...mapState({
      tags: state => state.commontags.tabsList
    })
  },
  methods: {
    ...mapMutations('commontags', ['closeTab']),
    changeMenu(tag) {
      //在走一遍vuex中 selectMenu方法，将tag也是内容传递进去
      this.$store.commit('selectMenu', tag)
      this.$router.push({name: tag.name})
    },
    handleClose(tag, index) {
      let length = this.tags.length - 1
      this.close(tag)
      if (tag.name !== this.$route.name) {
        return
      }
      // 判断vuex中的tabsList下标，如果跟长度相等，跳转后最一个页面
      if (index === length) {
        this.$router.push({name: this.tags[index - 1].name})
      } else {
        this.$router.push({name: this.tags[index].name})
      }
    }
  }
}
</script>

<style scoped>
.el-tag {
  margin: 1px;
}

.tags {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 35px;
  background-color: #fff;
  border-bottom: 1px solid #49b0f3;
  line-height: 35px;
  box-shadow: -1px -2px 5px 0px rgba(16, 16, 16, 0.75);
  -webkit-box-shadow: -1px -2px 5px 0px rgba(16, 16, 16, 0.75);
  -moz-box-shadow: -1px -2px 5px 0px rgba(16, 16, 16, 0.75);
}

.tags .el-tag {
  border-left: 1px solid #ccc;
  color: #ccc;
  height: 30px;
  line-height: 28px;
  cursor: pointer;
}

.tags .el-tag:last-child {
  border-right: 1px solid #ccc;
}

.tags .el-tag--dark {
  background-color: rgb(84, 92, 100);
  color: #fff;
}

span {
  position: relative;
}

span i {
  color: #49b0f3;
  margin-left: 15px;
}

span i:nth-child(1) {
  position: absolute;
  top: 28%;
  left: -15%;
}
</style>