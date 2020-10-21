<template>
  <detail
    content-type="articles"
    content-id="1"
  />
</template>
<script>
import { Component, Vue } from 'nuxt-property-decorator'
import Detail from '~/components/contents/Detail.vue'

@Component({
  components: {
    Detail
  }
})

export default class Id extends Vue { }
</script>
