<template>
  <div>
    <section class="hero is-white mt-5 has-text-centered-mobile">
      <div class="hero-body">
        <div class="columns is-vcentered reverse-columns">
          <div
            class="
              column
              is-10-mobile
              is-offset-1-mobile
              is-10-tablet
              is-offset-1-tablet
              is-5-desktop
              is-offset-1-desktop
              is-5-widescreen
              is-offset-1-widescreen
              is-5-fullhd
              is-offset-1-fullhd
            "
            data-aos="fade-down"
          >
            <p class="title" v-if="isAuthenticated">
              Welcome {{ getUserInfo.fullname }}
              {{ getUserInfo.role }}
            </p>
            <h1 class="title titled is-1 mb-6">
              absurd illustrations that make sense
            </h1>
            <h2
              class="
                subtitled
                subtitle
                has-text-grey
                is-4
                has-text-weight-normal
                is-family-sans-serif
              "
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              cupiditate dolorum vitae dolores nesciunt totam magni quas.
            </h2>
            <div
              class="
                is-flex-mobile
                is-justify-content-space-around
                is-align-items-center
              "
            >
              <NuxtLink class="button is-primary" to="/search">Search</NuxtLink>
              <NuxtLink class="button is-primary is-outlined" to="/contribute"
                >Contribute</NuxtLink
              >
            </div>
          </div>
          <div
            data-aos="fade-right"
            class="
              column
              is-10-mobile
              is-offset-1-mobile
              is-10-tablet
              is-offset-1-tablet
              is-4-desktop
              is-offset-1-desktop
              is-4-widescreen
              is-offset-1-widescreen
              is-4-fullhd
              is-offset-1-fullhd
              is-hidden-mobile
            "
          >
            <figure class="is-flex is-justify-content-center">
              <HomeWzrd />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium has-text-centered">
      <div class="hero-body">
        <div class="columns is-centered">
          <div data-aos="zoom-in-up" class="column is-8">
            <h1 class="title titled is-1 mb-6">Primary bold title</h1>
            <h2 class="subtitle subtitled">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              cupiditate dolorum vitae dolores nesciunt totam magni quas. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit.
            </h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
 // middleware :'guest',
  computed: {
    ...mapGetters(["getUserInfo", "isAuthenticated"]),
  },
};
</script>

<style>
</style>