<script setup>
  const { refresh } = useEvents()
</script>
<template>
  <v-app theme="light">
    <v-app-bar density="compact" color="#ffffff">
      <template v-slot:append>
       <v-btn  icon="mdi-refresh" @click="refresh"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
