<template>
  <div class="container container__login">
    <form class="box" @submit.prevent="register">
      <div v-if="error">
        <AlertNotifRed :msg="error" />
      </div>
      <div class="field">
        <label class="label">Full Name</label>
        <div class="control">
          <input
            class="input"
            v-model="registerData.fullname"
            type="text"
            placeholder="mohamed benmohamed"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="email"
            v-model="registerData.email"
            placeholder="e.g. alex@example.com"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            class="input"
            v-model="registerData.password"
            type="password"
            placeholder="********"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">conferm Password</label>
        <div class="control">
          <input
            class="input"
            v-model="cPassword"
            type="password"
            placeholder="********"
          />
        </div>
      </div>
      <button class="button is-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerData: {
        fullname: "",
        email: "",
        password: "",
      },
      // loginData: {
      //   email: this.registerData.email,
      //   password: this.registerData.password,
      // },
      cPassword: "",
      hasError: true,
      error: "",
    };
  },
  computed: {},
  methods: {
    async register() {
      try {
        const user = await this.$axios
          .$post("/api/auth/signin", {
            fullname: this.registerData.fullname,
            email: this.registerData.email,
            password: this.registerData.password,
          })
         
         this.$router.push({ path:"/auth/login", query: {msg:"user registered successfully",email: this.registerData.email }});
      } catch (err) {
        this.error = "OPPS! Try again...";
      }
    },
  },
};
</script>
<style scoped>
.container__login {
  max-width: 500px !important;
  margin-top: 30px !important;
}
</style>
