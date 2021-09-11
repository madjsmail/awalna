<template>
  <div class="is-flex is-flex-direction-column">
    <loading
      class="is-align-self-center is-flex-direction-column"
      v-if="loading"
    />
    <section v-else class="container container__allword">
      <b-button
        class="box is-primary is-light"
        v-for="(d, index) in data.slice(
          (this.current - 1) * this.perPage,
          this.current * this.perPage
        )"
        :key="index"
        @click="(isCardModalActive = true) && (Word = d)"
      >
        {{ d.word }}
      </b-button>

      <b-modal
        v-model="isCardModalActive"
        :avitive="isCardModalActive"
        :width="640"
        scroll="keep"
      >
        <WordCard :Word="Word" />
      </b-modal>
    </section>

    <b-pagination
      v-if="data.length"
      class="mt-6 pag"
      :total="total"
      v-model="current"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :order="order"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
    </b-pagination>
    <div class="is-flex is-justify-content-space-around is-flex-wrap-wrap mt-6">
      <b-button class="box his-primary" @click="getpendingWords">
        get panding words
      </b-button>
      <b-button class="box his-primary" @click="getapprovedWords">
        get approved words
      </b-button>
    </div>
  </div>
</template>

<script>
import loading from "~/components/loading.vue";
export default {
  components: { loading },
   middleware: ["isAuthenticated", "isAdmin"],
  data() {
    return {
      loading: true,
      total: 0,
      current: 1,
      perPage: 21,
      rangeBefore: 2,
      rangeAfter: 1,
      order: "is-centered",
      size: "is-medium",
      isSimple: true,
      isRounded: true,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",

      isCardModalActive: false,
      Word: {},
      data: [],
      Allword: [],
    };
  },
  methods: {
    getpendingWords() {
      this.data = this.Allword.filter((word) => word.status == "pending");
      this.total = this.data.length;
    },
    getapprovedWords() {
      this.data = this.Allword.filter((word) => word.status == "approved");
      this.total = this.data.length;
    },
    paginations(start, end) {
      return (this.data = this.data.slice(start, end));
    },
  },
  async created() {
    await this.$axios.$get("/api/Word").then((data) => {
      this.Allword = data;
      this.loading = false;
    });
  },
};
</script>

<style scoped>
.box {
  width: 300px;
}

.pag {
  width: 90%;
  margin-inline: auto;
}

.container__allword {
  margin-top: 6rem !important;
  display: grid;
  grid-gap: 0.5rem;
  width: 90%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
}

@media only screen and (max-width: 800px) {
  .container__allword {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }
}
</style>
