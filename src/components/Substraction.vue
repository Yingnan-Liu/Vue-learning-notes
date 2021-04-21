<template>
  <div>
    <h3>减法器目前的值是：{{ count }}</h3>
    <button @click="handlebtnSub">-1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['sub']),
    handlebtnSub () {
      this.sub()
    }
  }
}
</script>

<style></style>
