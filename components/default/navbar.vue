<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1 class="title titled is-1 has-text-black">AwalNa</h1>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/search' }">
        Search
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/contribute' }">
        Contribute
      </b-navbar-item>

      <b-navbar-dropdown
        label="Admin"
        v-if="isAuthenticated && getUserInfo.isAdmin"
      >
        <b-navbar-item tag="router-link" :to="{ path: '/admin/allword' }">
          allWords
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/admin/alluser' }">
          All Users
        </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-item tag="div">
        <div class="buttons">
          <b-navbar-item
            tag="router-link"
            :to="{ path: '/auth/signup' }"
            class="button is-primary"
            v-if="!isAuthenticated"
          >
            <strong>Sign up</strong>
          </b-navbar-item>
          <b-navbar-item
            tag="router-link"
            :to="{ path: '/auth/login' }"
            class="button is-light"
            v-if="!isAuthenticated"
          >
            Log in
          </b-navbar-item>
          <a class="button is-light" @click="logout" v-if="isAuthenticated">
            Log out
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    async logout() {
      await this.$auth.logout(); // this method will logout the user and make token to false on the local storage of the user browser
    },
  },
  computed: {
    ...mapGetters(["getUserInfo", "isAuthenticated"]),
  },
};
</script>

<style scoped>
</style>