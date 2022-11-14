<template>
  <div v-if="!loading">
    <h1>Profilo</h1>
    {{ utente }}

    <ShareNetwork network="twitter" url="https://90days-2share.vercel.app/profile/2" title="Il mio profilo su 90 days!"
      description="Vieni a vedere i miei progressi e a supportarmi!"
      quote="quote quote quote lorem ipsum quote quote quote" hashtags="90days,performingtowin">
      Share on Twitter
    </ShareNetwork>


    <ShareNetwork network="facebook" url="https://90days-2share.vercel.app/profile/2" title="Il mio profilo su 90 days!"
      description="Vieni a vedere i miei progressi e a supportarmi!"
      quote="quote quote quote lorem ipsum quote quote quote" hashtags="90days,performingtowin">
      Share on Facebook
    </ShareNetwork>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const loading = ref(true)
const utente = ref()
async function getUtente() {
  loading.value = true
  await axios.get('https://bm5f9a2z.directus.app/items/Utenti?filter[id]=' + route.params.idUtente, {
    headers: {
      Authorization: 'Bearer xZFbgbEnVxrXlHxRT2ZM1LGNIe8xigDV'
    }
  })
    .then(res => {
      res.data.data[0].pubblico
        ? utente.value = res.data.data[0]
        : router.push('/404')
    })
    .catch(err => console.error(err))
    .finally(() => loading.value = false)
}

getUtente()
</script>