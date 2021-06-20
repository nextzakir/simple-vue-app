<template>
  <h1>Oops!</h1>
  <h2>404 - {{ titleCase(resource) }} Not Found</h2>
  <button @click="goHome">Home</button>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'EventList' })
    },
    titleCase(str) {
      let splitStr = str.toLowerCase().split(' ')
      for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
      }

      return splitStr.join(' ')
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
