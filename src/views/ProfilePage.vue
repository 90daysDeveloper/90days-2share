<template>
  <div>
    id Profile :

    {{ route.params.idUtente }}


    <h1>Profilo</h1>
    {{ utente }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const utente = ref()
async function getUtente() {
  await axios.get('https://bm5f9a2z.directus.app/items/Utenti?filter[id]=' + route.params.idUtente, {
    headers: {
      Authorization: 'Bearer xZFbgbEnVxrXlHxRT2ZM1LGNIe8xigDV'
    }
  })
    .then(res => {
      if (res.data.data[0].pubblico) {
        utente.value = res.data.data[0]
      }
      else {
        router.push('/404')
      }

    })
    .catch(err => console.error(err))
}

getUtente()
</script>