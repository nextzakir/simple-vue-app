<template>
  <h1>Uh-oh!</h1>
  <h2>Please check your network connection and try again!</h2>
  <button @click="goBack">Try Again</button>
</template>

<script>
export default {
  name: 'NetworkError',
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
button {
  width: 100px;
  height: 30px;
  color: #ffffff;
  font-size: 16px;
  background-color: #42b983;
  border: 1px solid #42b983;
  border-radius: 2px;
}
</style>
