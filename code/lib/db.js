export const get = async function (kv, id) {
  const r = await kv.get(id)
  if (r === null) {
    return { ok: false }
  } else {
    const j = JSON.parse(r)
    return { ok: true, doc: j }
  }
}

export const list = async function (kv) {
  const l = await kv.list()
  const output = l.keys.map((k) => {
    return {
      id: k.name,
      ...k.metadata
    }
  })
  return output
}



export const add = async function (kv, json) {
  if (!json.id) {
    json.id = new Date().getTime().toString()
  }
  const metadata = json

  // if there's all the parts we need
  if (json && json.id && metadata) {
    await kv.put(json.id, JSON.stringify({}), { metadata, expirationTtl: 60 * 60 * 24 }) // 1 day TTL

    // send response
    return { ok: true, id: json.id }
  }

  // oops
  return { ok: false }
}

export const del = async function (kv, id) {

  // delete original doc
  await kv.delete(id)

  return { ok: true }
}
