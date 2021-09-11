<template>
  <div
    class="container is-flex-direction-column"
    style="display: flex; min-height: 100vh; flex-direction: column"
  >
    <DefaultNavbar />
    <Nuxt style="flex: 1" class="mt-6" />
    <DefaultFooter />
  </div>
</template>

<script>

export default {
  created () {

  if (! process.server) return
  if (this.getState('token')) {
    this.setState('loggedIn', true)
  
}
  }
}
</script>
<style scoped>
@media only screen and (max-width: 500px) {
  .container {
    padding: 1rem;
  }
}

@media only screen and (max-width: 1024px) {
  .container {
    padding: 1.2rem;
  }
}

/* @media only screen and (min-width: 700px) {
  .container {
    background: cyan;
  } 
}*/
</style>
