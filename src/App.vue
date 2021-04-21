<template>
  <div>
    <my-addition></my-addition>
    -------------------------------------
    <my-substraction></my-substraction>
  </div>
</template>

<script>
import Addition from './components/Addition'
import Substraction from './components/Substraction'

export default {
  data(){
    return{

    }
  },
  components: {
    'my-addition': Addition,
    'my-substraction': Substraction
  }
}
</script>

<style></style>
