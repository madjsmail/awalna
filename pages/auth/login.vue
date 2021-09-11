<template>
  <div class="container container__login">
    <form class="box" @submit.prevent="login">
      <AlertNotif :msg="message" v-if="message" />
      <AlertNotifRed
        v-if="errMsg"
        msg="wrong authentication data provided or user don't exist"
      />

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            v-model="loginData.email"
            type="email"
            placeholder="e.g. alex@example.com"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            class="input"
            v-model="loginData.password"
            type="password"
            placeholder="********"
          />
        </div>
      </div>

      <button class="button is-primary">Log in</button>
      <!-- <div class="error">{{ login_error }}</div> -->
    </form>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  auth: "guest",
  message: "",

  data() {
    return {
      errMsg: null,
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.loginData,
        });
        this.$router.push("/contribute");
      } catch (err) {
      
        this.errMsg = true;
      }
    },
  },
  created() {
    this.message = this.$route.query.msg;
    this.loginData.email = this.$route.query.email;
  },
};
</script>
<style scoped>
.container__login {
  max-width: 500px !important;
  margin-top: 30px !important;
}
</style>