# timeline

A simple timeline storing data in Cloudflare KV

## API

### Add

```sh
curl -X POST -H'Content-type:application/json' -H"apikey: $APIKEY" -d'{"title":"A test event","img":"https://hacdn.glynnbird.com/glynn.jpg"}' "https://$URL/api/add" 
{"ok":true,"id":"1681482390981"}
```

### List

```sh
curl -X POST -H'Content-type:application/json' -H"apikey: $APIKEY" "https://$URL/api/list"
```
