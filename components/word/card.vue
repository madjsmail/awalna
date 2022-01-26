<template>
  <div class="card">
    <div class="card-content">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <b>id :</b> <small>{{ Word._id }}</small>
              <br />
            </p>
            <p>
              <b>Word :</b> <small>{{ Word.word }}</small>
              <br />
            </p>

            <p>
              <b>synonyms :</b> <small>{{ Word.synonyms }}</small>
              <br />
            </p>

            <p>
              <b>Origin :</b> <small>{{ Word.Origin }}</small>
              <br />
            </p>

            <p style="max-width: 100%; overflow-wrap: anywhere">
              <b>Description :</b>
              <small>
                <TuiEditorViewer :value="Word.description" />
              </small>
              <br />
            </p>

            <p>
              <b>Add by :</b> <small>{{ Word.AddBy }}</small>
              <br />
            </p>
          </div>
        </div>
      </article>

      <div
        class="content is-flex is-justify-content-space-between"
        v-if="isAuthenticated && getUserInfo.isAdmin"
      >
        <b-button
          type="is-success is-light"
          :disabled="Word.status === 'approved' ? true : false"
          @click="approveWord(Word._id)"
          >Approve</b-button
        >
        <b-button type="is-danger is-light" @click="deletword(Word._id)"
          >Delete</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    Word: {
      type: Object,
      required: false,
    },
  },
  computed: {
    ...mapGetters(["getUserInfo", "isAuthenticated"]),
  },
  methods: {
    success(msg) {
      this.$buefy.toast.open({
        message: msg,
        type: "is-success",
      });
    },
    danger() {
      this.$buefy.toast.open({
        duration: 5000,
        message: ` <b>ERROR</b>`,

        type: "is-danger",
      });
    },
    async approveWord(id) {
      await this.$axios
        .$put(
          `/api/word/aprove/${id}`,
          {
            status: "approved",
          }
          // ,
          // {
          //   cancelToken: source.token,
          // }
        )
        .then(() => {
          this.$emit("getallwords");
          this.$emit("getpendingWords");
          this.$parent.close();
          this.success("word updated successfully");
        })
        .catch((err) => {
          console.log("err");
          this.danger();
        });
    },
    async deletword(id) {
      await this.$axios
        .$delete(`/api/word/${id}`)
        .then(() => {
          // if (this.$props.Word === "pending") {
          //   this.$emit("getpendingWords");
          // } else {
          //   this.$emit("getapprovedWords");
          // }
          this.$emit("getallwords");
          this.$parent.close();
          this.success("word deleted successfully");
        })
        .catch((err) => {
          console.log("err");
          this.danger();
        });
    },
  },
};
</script>

<style></style>
