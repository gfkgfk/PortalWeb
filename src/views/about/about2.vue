<template>
  <div>
    <h1>about2</h1>
    <button @click="test()">测试路由信息</button>
    <div>Vuex测试</div>
    <div>{{count}}</div>
    <div @click="vuex1()">test1</div>
    <div @click="vuex2()">mapstate</div>
    <div @click="vuex3()">getters</div>
    <div @click="vuex4()">mutation</div>
    <div @click="vuex5()">mutation param</div>
    <div @click="vuex6()">action</div>
  </div>

</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'; // 从vuex中导入mapState

export default {
  name: "about2",
  data(){
    return {
      count:99,
    }
  },
  computed:{
    ...mapState('demo',['number']),
  },
  methods:{
    ...mapGetters('demo',['getNumber']),
    ...mapMutations('demo',['setNumber']),
    ...mapActions('demo',['setNumAction2']),
    test(){
      console.log(this.$route)
      this.$router.push({path:'/home',query:{age:'99'}})
    },
    vuex1(){
      console.log(this.$store.state.demo.number)

    },
    vuex2(){
      console.log(this.number)
    },
    vuex3(){
      console.log(this.$store.getters["demo/getNumber"]);
      // console.log(this.getNumber())
      console.log(this.getNumber())
    },
    vuex4(){
      console.log(`旧值：${this.$store.state.demo.number}`);
      this.$store.commit('demo/setNumber');
      console.log(`新值：${this.$store.state.demo.number}`);
    },
    vuex5(){
      console.log(`旧值：${this.$store.state.demo.number}`);
      this.$store.commit('demo/setNumberWithParam',{param:5});
      this.setNumber();
      console.log(`新值：${this.$store.state.demo.number}`);
    },
    async vuex6(){
      console.log(`旧值：${this.$store.state.demo.number}`);
      await this.$store.dispatch('demo/setNumAction');
      await this.setNumAction2({param:99});
      console.log(`新值：${this.$store.state.demo.number}`);
    }
  }

}
</script>

<style scoped>

</style>