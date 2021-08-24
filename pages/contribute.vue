<template>
  <form class="box">
    <div class="field">
      <label class="label">Word</label>
      <div class="control">
        <input
          class="input"
          v-model="Word"
          name="Word"
          type="text"
          placeholder="Example"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">synonyms</label>
      <div class="control">
        <input
          class="input"
          v-model="synonyms"
          name="synonyms"
          type="text"
          placeholder="Example"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">origin</label>
      <div class="control">
        <input
          class="input"
          v-model="origin"
          name="origin"
          type="text"
          placeholder="Example"
        />
      </div>
    </div>

    <b-field label="Description">
      <editor
        type="textarea"
        :options="editorOptions"
        :html="editorHtml"
        :visible="editorVisible"
        v-model="Description"
        previewStyle="bar"
        height="300px"
        mode="markdown"
        placeholder="Example"
      />
    </b-field>
    <b-button
      type="is-primary"
      @click="submitWord"
      :disabled="!this.allowSubmit ? true : false"
      >submit</b-button
    >
  </form>
</template>

<script>
import { Editor } from "@toast-ui/vue-editor";

export default {
  middleware: "isAuthenticated", // it will use `isAuthenticated` middleware
  components: {
    editor: Editor,
  },
  data() {
    return {
      Word: "",
      synonyms: "",
      origin: "",
      Description: "",
      editorText: "This is initialValue.",
      editorOptions: {
        hideModeSwitch: true,
        language: "an_US",
        toolbarItems: [
          "heading",
          "bold",
          "italic",
          "strike",
          "divider",
          "hr",
          "quote",
          "divider",
          "ul",
          "ol",
          "divider",

          "outdent",
          "divider",

          "link",
          "divider",
        ],
        language: "ar",
      },
      editorHtml: "",
      editorVisible: false,
    };
  },
  methods: {
    async submitWord() {
      try {
        const user = await this.$axios
          .$post("/api/Word", {
            word: this.Word,
            synonyms: this.synonyms,
            origin: this.origin,
            description: this.Description,
            AddBy: this.getUserInfo.fullname,
          })
          .then(() => {
            this.Word = "";
            this.synonyms = "";
            this.origin = "";
            this.Description = "";
          });

        // console.log("word subbmited");
        this.$buefy.toast.open({
          message: "word added successfully!!",
          // message: "word subbmited correctly!",

          type: "is-success",
        });
      } catch (err) {
        console.log(err);
        this.$buefy.toast.open({
          duration: 5000,
          message: `Something's not good, 😢`,
          type: "is-danger",
        });
      }
    },
  },
  computed: {
    getUserInfo() {
      return this.$store.getters.getUserInfo;
    },
    allowSubmit() {
      if ((this.Word && this.synonyms) || (this.Word && this.Description))
        return true;
      else return false;
    },
  },
};
</script>

<style></style>
