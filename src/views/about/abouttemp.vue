<template>
  <div>
    <h1>这是:{{this.$route.params.id}}</h1>



  </div>

</template>

<script>
export default {
  name: "abouttemp",
  props:['id']

}
</script>

<style scoped>

</style>