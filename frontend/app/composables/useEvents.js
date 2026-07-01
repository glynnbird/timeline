// the default export
const { auth } = useAuth()

export default function () {
  const events = useState('events', () => [])

  const config = useRuntimeConfig()
  const apiHome = config.public['apiBase'] || window.location.origin

  const $api = $fetch.create({
    baseURL: apiHome,
    method: 'post',
    headers: {
      'content-type': 'application/json',
      apikey: auth.value.apiKey
    }
  })

  // load progs from the API
  async function refresh() {
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

  return { events, refresh}

}
