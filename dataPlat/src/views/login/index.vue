<template>

</template>

<script>
    export default {
        name: "index",
      mounted(){
          this.$store.commit('setLogin',true);
          console.log(this.$store.state.isLogin)
      }
    }
</script>
<style scoped>

</style>
