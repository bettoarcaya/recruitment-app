<template>
  <div>
    <div class="w-full max-w-sm mx-auto my-48">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p v-if="errorMsg" class="text-red-500 text-xs italic">{{errorMsg}}</p>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            v-model="form.email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            v-model="form.password"
          />
          <p v-if="msg" class="text-red-500 text-xs italic">{{msg}}</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="btn-teal font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click.prevent="login"
          >Sign In</button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="javascript:void(0)"
          >Forgot Password?</a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">&copy;2020 Humberto Arcaya. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  mounted() {
    this.initForm();
  },
  data() {
    return {
      form: {},
      msg: "",
      errorMsg: ""
    };
  },
  methods: {
    initForm() {
      this.form = {
        email: "",
        password: ""
      };
    },
    async login() {
      if (this.validate()) {
        const response = await AuthService.login(this.form);

        if (response.success) {
          const { token, user } = response.data;

          this.$store.dispatch("login", { token, user });
          this.$router.push("/jobs");
        } else {
          this.errorMsg = response.message;
        }
      } else {
        this.msg = "Please fill in the empty fields";
      }
    },
    validate() {
      return this.form.email != "" && this.form.password != "";
    }
  }
};
</script>
