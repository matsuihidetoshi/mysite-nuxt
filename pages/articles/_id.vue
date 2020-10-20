<template>
  <detail content-type="articles" />
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
