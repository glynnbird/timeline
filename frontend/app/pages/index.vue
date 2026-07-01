<script setup>
  const events = ref([])

  const config = useRuntimeConfig()
  const apiHome = config.public['apiBase'] || window.location.origin
  const route = useRoute()
  const apikey = route.query.apikey 

  const $api = $fetch.create({
    baseURL: apiHome,
    method: 'post',
    headers: {
      'content-type': 'application/json',
      apikey: apikey
    }
  })

  // load progs from the API
  async function loadFromAPI() {
    try {
      //  fetch the list from the API
      console.log('API', '/api/list')
      const r = await $api('/api/list')
      events.value = r.list
      events.value.map((e) => {
        e.ts = new Date(e.ts)
        return e
      })
    } catch (e) {
      console.error('failed to fetch list of events', e)
    }
  }

  await loadFromAPI()
</script>
<template>
  <v-btn icon="mdi-refresh" @click="loadFromAPI()"></v-btn>
  <v-timeline align="start">
    <v-timeline-item v-for="event in events" :key="event.id" size="large">
      <!--<template v-slot:opposite>
        Opposite content
      </template>-->
      <template v-slot:icon v-if="event.img">
        <v-avatar :image="event.img"></v-avatar>
      </template>
      <v-card>
        <v-card-title>{{ event.title }}</v-card-title>
        <v-card-subtitle>{{ event.ts.toLocaleTimeString() }}</v-card-subtitle>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
