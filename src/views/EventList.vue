<template>
  <h1>National Events</h1>
  <div class="events">
    <img v-if="events == null" class="loader" :src="image" />
    <EventCard v-else v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        class="previous"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page !== 1"
        >&#60; Previous</router-link
      >
      <router-link
        class="next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link
      >
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'
import { watchEffect } from 'vue'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard,
  },
  data() {
    return {
      image: 'https://i.gifer.com/ZZ5H.gif',
      events: null,
      totalEvents: 0,
    }
  },
  created() {
    watchEffect(() => {
      this.events = null
      EventService.getEvents(3, this.page)
        .then((response) => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch((error) => {
          console.log(error)
        })
    })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalEvents / 3)
      return this.page < totalPages
    },
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #42b983;
}
.previous {
  text-align: left;
  text-transform: uppercase;
}
.next {
  text-align: right;
  text-transform: uppercase;
}
.loader {
  width: 50px;
  margin: 200px 0;
}
</style>
