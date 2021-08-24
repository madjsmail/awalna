<template>
  <section>
    <p class="content is-2">
      <b>Selected:</b> {{ selected ? selected.word : "" }}
    </p>
    <b-field label="Find a Word">
      <b-autocomplete
        :data="data"
        placeholder="e.g. marhba"
        :clearable="clearable"
        @typing="getAsyncData"
        @select="(option) => (selected = option)"
        @click="(Word) => (Word = selected)"
      >
        <template slot-scope="props">
          <loading v-if="isFetching" />
          <div v-else class="media">
            <div class="media-content">
              {{ props.option.word }}
              <br />
              <small> Synonyms : {{ props.option.synonyms }}, </small>
            </div>
          </div>
        </template>
      </b-autocomplete>
    </b-field>
    <WordCard v-if="selected" :Word="selected" />
  </section>
</template>

<script>
import debounce from "lodash/debounce";
import loading from "~/components/loading.vue";

export default {
  components: { loading },
  data() {
    return {
      Word: "",
      openOnFocus: true,
      clearable: true,
      data: [],
      selected: null,
      isFetching: false,
    };
  },
  methods: {
    // You have to install and import debounce to use it,
    // it's not mandatory though.
    getAsyncData: debounce(function (name) {
      if (!name.length) {
        this.data = [];
        return;
      }
      this.isFetching = true;
      this.$axios
        .$get("/api/Word")
        .then((data) => {
          this.data = data;
          this.data = this.data.filter((d) => d.status === "approved");
        })
        .catch((error) => {
          this.data = [];
          throw error;
        })
        .finally(() => {
          this.isFetching = false;
        });
    }, 500),
  },
};
</script>