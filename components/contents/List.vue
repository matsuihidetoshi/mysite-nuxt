<template>
  <div>
    <h1
      class="
        text-center
        ma-2
      "
    >
      <name :message="title" />
    </h1>

    <v-pagination
      v-model="page"
      :length="pageLength"
      @input="getContentList()"
    />

    <v-row>
      <v-col
        v-for="(content, index) in contents"
        :key="index"
        xs="12"
        sm="6"
        md="4"
        class="pa-3"
      >
        <nuxt-link
          :to="contentType + '/' + content.id"
        >
          <v-card
            v-ripple
          >
            <v-img
              :src="content.image"
              height="120"
            />

            <v-card-title
              class="
                text-truncate
                ml-2
              "
            >
              <name :message="content.title" />
            </v-card-title>

            <v-card-text
              class="ml-2"
            >
              <name :message="new Date(content.date).toLocaleDateString()" />
            </v-card-text>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>

    <v-pagination
      v-model="page"
      :length="pageLength"
      @input="getContentList()"
    />

    <v-btn
      to="/"
      class="
        mt-3
        mb-3
        float-right
      "
    >
      back
    </v-btn>

    <v-overlay :value="overlay">
      <v-progress-circular
        v-if="!loaded"
        indeterminate
        :size="80"
        :width="10"
      />
    </v-overlay>
  </div>
</template>
<script>
import Name from '~/components/Name.vue'

export default {
  components: {
    Name
  },
  props: {
    contentType: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      contents: [],
      page: 1,
      pageLength: 0,
      limit: 6,
      skip: 0,
      overlay: true,
      loaded: false
    }
  },
  mounted () {
    this.getContentList().then(() => {
      this.getTotalLength()
      this.overlay = false
      this.loaded = true
    })
  },
  methods: {
    async getContentList () {
      this.contents = []
      this.skip = (this.page - 1) * this.limit
      this.contents = await this.$content(this.contentType).sortBy('date', 'desc').skip(this.skip).limit(this.limit).fetch()
    },
    async getTotalLength () {
      const contents = await this.$content(this.contentType).fetch()
      this.pageLength = Math.ceil(contents.length / this.limit)
    }
  }
}
</script>
