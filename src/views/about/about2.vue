<template>
  <div>
    <h1>about2</h1>
    <button @click="test()">测试路由信息</button>
  </div>

</template>

<script>
export default {
  name: "about2",
  methods:{
    test(){
      console.log(this.$route)
      this.$router.push({path:'/home',query:{age:'99'}})
    }
  }

}
</script>

<style scoped>

</style>