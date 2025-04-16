<script>
import AuthSubmitButton from "../../components/AuthSubmitButton.vue";
import axiosInstance from "../../requests/axiosInstance.js"; // Import axiosInstance
require('graphql')
export default {
  name: "LoginPage",
  components: { AuthSubmitButton },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: null,
      isLoading: false,
    };
  },
  mounted() {
    // if (localStorage.getItem("token")) {
    //   this.$router.push("/loading");
    // }
  },
  methods: {
    async handleLogin() {
      this.errorMessage = null;
      this.isLoading = true;
      const LOGIN_QUERY = `
      query {
        user {
          login(email: ${this.email}, password: ${this.password})
        }
      }
        `;
      try {
        console.log("recieved login")
        const response = await axiosInstance.post("", {
          query: LOGIN_QUERY,
          variables: {
            email: this.email,
            password: this.password,
          },
        }).then((response) => {
          console.log(`user ${response.data.user.login} login`)
          localStorage.setItem("token", response.data.user.login);
          this.$router.push("/profile-create");
        });
        
        console.log("Login Successful:", response.data);
        // Handle success: Store token, redirect user, etc.
      } catch (error) {
        this.errorMessage = error.response?.data || "Login failed.";
        console.error("Login Error:", this.errorMessage);
      }
      this.isLoading = false;
    },

  },
};
</script>

<template>
  <div class="h-full w-full flex items-center justify-center">
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
            <div class="mt-2">
              <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
            <div class="mt-2">
              <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <AuthSubmitButton :is-loading="isLoading" text="Sign In" />
          </div>
        </form>

        <p v-if="errorMessage" class="mt-4 text-center text-sm text-red-600">
          {{ errorMessage }}
        </p>

        <p class="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?
          <router-link to="/signup" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign Up!</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
