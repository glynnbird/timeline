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
<style>

.title {
  font-size: 0.85rem !important;
  font-weight: normal !important;
}
.time {
  font-size: 0.7rem !important;
}
</style>
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
        <v-card-text>
          <p class="title">{{ event.title }}</p>
          <p class="time">{{ event.ts.toLocaleTimeString() }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
