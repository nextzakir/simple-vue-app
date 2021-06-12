<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <h3>@ {{ event.time }} on {{ event.date }}</h3>
  </div>
</template>

<script>
import EventService from '../services/EventService'

export default {
  name: 'EventDetails',
  props: ['id'],
  data() {
    return {
      event: null,
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status === 404) {
          this.$router.push('/page-not-found')
        }
      })
  },
}
</script>
