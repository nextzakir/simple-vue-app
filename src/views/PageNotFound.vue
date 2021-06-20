<template>
  <h1>404 - Page Not Found</h1>
  <button @click="goHome">Home</button>
</template>

<script>
export default {
  name: 'PageNotFound',
  methods: {
    goHome() {
      this.$router.push({ name: 'EventList' })
    },
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}
button {
  width: 80px;
  height: 30px;
  color: #ffffff;
  font-size: 16px;
  background-color: #42b983;
  border: 1px solid #42b983;
  border-radius: 2px;
}
</style>
