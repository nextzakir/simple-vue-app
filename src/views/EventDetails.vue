<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <h3>@ {{ event.time }} on {{ event.date }}</h3>
    <button @click="goBack">Go Back</button>
  </div>
  <img v-else class="loader" :src="image" />
</template>

<script>
import EventService from '../services/EventService'

export default {
  name: 'EventDetails',
  props: ['id'],
  data() {
    return {
      event: null,
      image: 'https://i.gifer.com/ZZ5H.gif',
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          this.$router.push({ name: 'NotFound', params: { element: 'event' } })
        }
      })
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
button {
  width: 80px;
  height: 30px;
  color: #ffffff;
  background-color: #42b983;
  border: 1px solid #42b983;
  border-radius: 2px;
}
.loader {
  width: 50px;
  margin: 50px 0;
}
</style>
