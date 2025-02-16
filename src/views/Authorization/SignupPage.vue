<script>
import axiosInstance from "../../requests/axiosInstance.js";
import AuthSubmitButton from "../../components/AuthSubmitButton.vue";

export default {
  name: "SignupPage",
  components: {AuthSubmitButton},
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      lastname: '',
      phone: '',
      type: 'applicant', // Default user type
      errorMessage: '',
      isLoading: false,
    };
  },
  methods: {
    async handleSignup() {
      this.errorMessage = '';
      this.isLoading = true;
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match";
        return;
      }

      try {
        const response = await axiosInstance.post('/auth/signup', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          phone: this.phone,
          type: this.type,
        });
        console.log("Signup successful:", response.data);
        this.$router.push('/login'); // Redirect to login page
      } catch (error) {
        this.errorMessage = error.response?.data?.errors[0].msg || "Signup failed. Please try again.";
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
        <h2 class="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">Create a new account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="handleSignup" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-900">First Name</label>
            <input v-model="firstname" required class="input-field" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-900">Last Name</label>
            <input v-model="lastname" required class="input-field" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-900">Email address</label>
            <input type="email" v-model="email" required class="input-field" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-900">Phone</label>
            <input type="tel" v-model="phone" required class="input-field" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-900">Password</label>
            <input type="password" v-model="password" required class="input-field" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-900">Confirm Password</label>
            <input type="password" v-model="confirmPassword" required class="input-field" />
          </div>
          <div v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</div>
          <div>
            <AuthSubmitButton :text="'Sign Up'" :is-loading="isLoading" />
          </div>
        </form>
        <p class="mt-10 text-center text-sm text-gray-500">
          Already a member? <router-link to="/login" class="text-indigo-600 hover:text-indigo-500">Log In!</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-field {
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

</style>
