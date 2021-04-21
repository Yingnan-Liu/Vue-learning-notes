<template>
  <div>
    <!-- <h3>加法器目前的值是：{{ $store.state.count }}</h3> -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="handlebntAdd">+1</button>
    <button @click="handlebntAddN">+N</button>
    <button @click="handlebntAddAsync">Async+1</button>
    <button @click="handlebntAddNAsync">Async+N</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handlebntAdd () {
      // 调用store中mutations里的函数
      this.$store.commit('add')
    },
    handlebntAddN () {
      this.$store.commit('addN', 3)
    },
    // 触发action中的异步任务
    handlebntAddAsync () {
      this.$store.dispatch('addAsync')
    },
    handlebntAddNAsync () {
      this.$store.dispatch('addNAsync', 4)
    }
  }
}
</script>

<style></style>
