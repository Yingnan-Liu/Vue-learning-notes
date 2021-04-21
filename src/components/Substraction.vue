<template>
  <div>
    <!-- <h3>减法器目前的值是：{{ count }}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="handlebtnSub">-1</button>
    <button @click="subN(4)">-N</button>
    <button @click="subAsync(3)">Async-1</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync']),
    handlebtnSub () {
      this.sub()
    },
    handlebtnSubN () {
      this.subN(3)
    }
  }
}
</script>

<style></style>
