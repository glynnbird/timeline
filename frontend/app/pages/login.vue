<script setup>
// composables
const { login } = useAuth()
// local page items
const apiKey = ref('')

const doLogin = async () => {
  await login(apiKey.value)
  await navigateTo('/')
}


</script>
<template>
  <v-form>
    <v-text-field v-model="apiKey" label="Api Key" required></v-text-field>
    <v-btn :disabled="!apiKey" color="success" @click="doLogin">Submit</v-btn>
  </v-form>
</template>
