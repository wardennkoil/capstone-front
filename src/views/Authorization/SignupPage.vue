<script>
import axiosInstance from "../../requests/axiosInstance.js";
import AuthSubmitButton from "../../components/AuthSubmitButton.vue";
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

export default {
  name: "SignupPage",
  components: {AuthSubmitButton, RadioGroup, RadioGroupOption, CheckCircleIcon},
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
      mailingLists: [
        { id: 1, title: 'Applicant',  },
        { id: 2, title: 'Manager', },
      ],
      selectedMailingLists: {},
    };
  },
  methods: {
    async handleSignup() {
      this.errorMessage = '';
      this.isLoading = true;

      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match";
        this.isLoading = false;
        return;
      }

      const SIGNUP_MUTATION = `
    mutation {
  user {
    signup(
      first_name: "${this.firstname}"
      last_name: "${this.lastname}"
      email: "${this.email}"
      password: "${this.password}"
      phone: "${this.phone}"
      type: "${this.selectedMailingLists.title.toLowerCase()}"
    ) {
      _id
      first_name
      last_name
      email
      phone
    }
  }
}`;

      const LOGIN_QUERY = `
    query Login($email: String!, $password: String!) {
      user {
        login(email: $email, password: $password)
      }
    }
  `;

      try {
        // Signup request
        await axiosInstance.post('', {
          query: SIGNUP_MUTATION,
        }).then((response) => {
          localStorage.setItem("userId", response.data.data.user.signup._id);
        }
        );

        // Login request
        const loginResponse = await axiosInstance.post('', {
          query: LOGIN_QUERY,
          variables: {
            email: this.email,
            password: this.password,
          },
        });

        const token = loginResponse.data.data.user.login;
        if (token) {
          localStorage.setItem("token", token);
          if (this.selectedMailingLists.title.toLowerCase() === 'applicant') {
            this.$router.push("/profile-create");
          } else {
            this.$router.push("/company-create");
          }
        }
      } catch (error) {
        this.errorMessage = error.response?.data?.errors?.[0]?.message || "Signup failed. Please try again.";
      }

      this.isLoading = false;
    }
  },
  mounted() {
    this.selectedMailingLists = this.mailingLists[0]
  }
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
          <div>
            <fieldset>
              <legend class="text-sm/6 font-semibold text-gray-900">Sign up as</legend>
              <RadioGroup v-model="selectedMailingLists" class="mt-2 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                <RadioGroupOption as="template" v-for="mailingList in mailingLists" :key="mailingList.id" :value="mailingList" :aria-label="mailingList.title" :aria-description="`${mailingList.description} to ${mailingList.users}`" v-slot="{ active, checked }">
                  <div :class="[active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-xs focus:outline-hidden']">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span class="block text-sm font-medium text-gray-900">{{ mailingList.title }}</span>

            </span>
          </span>
                    <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'size-5 text-indigo-600']" aria-hidden="true" />
                    <span :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-600' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true" />
                  </div>
                </RadioGroupOption>
              </RadioGroup>
            </fieldset>
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
