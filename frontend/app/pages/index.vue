<script setup>
  const { auth, login } = useAuth()
  const { events, refresh } = useEvents()

  // look for querystring apikey
  const route = useRoute()
  const apikey = route.query.apikey 
  if (apikey) {
    login(apikey)
  }
  await refresh()
</script>
<template>
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
