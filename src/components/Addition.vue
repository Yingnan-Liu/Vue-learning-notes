<template>
  <div>
    <h3>加法器目前的值是：{{ $store.state.count }}</h3>
    <button @click="handlebntAdd">+1</button>
    <button @click="handlebntAddN">+N</button>
    <button @click="handlebntAddAsync">Async+1</button>
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
    handlebntAddAsync () {
      this.$store.dispatch('addAsync')
    }
  }
}
</script>

<style></style>
