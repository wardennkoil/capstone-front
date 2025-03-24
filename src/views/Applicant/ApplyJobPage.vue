<script>
import { XMarkIcon, CheckIcon } from "@heroicons/vue/24/solid";

export default {
  name: "ApplyJobPage",
  components: {
    XMarkIcon,
    CheckIcon,
  },
  data() {
    return {
      job: {
        companyLogo:
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        companyName: "Google",
        jobTitle: "Office Cleaner",
        wage: "20$/hour",
        dateRange: "14 September - 21 September 2024",
        description:
            "Job Overview: This is an Office Cleaner position maintaining cleanliness and a welcoming environment in our people-focused organization with a friendly teamwork culture. Play a key role in ensuring our spaces inspire innovation and productivity. Apply today!",
        tags: "#OfficeCleaner #Consistent",
      }
    };
  },
  methods: {
    applyForJob() {
      alert(`You have applied for the ${this.job.jobTitle} position!`);
    },
    cancelApplication() {
      alert("Application canceled.");
    },
  },
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <!-- Page Title -->
      <h1 class="mb-8 text-2xl font-bold text-gray-800">
        Apply to Job Opportunities
      </h1>

      <!-- Centered Card -->
      <div class="flex justify-center">
        <div class="w-full max-w-md rounded-lg bg-white p-6 shadow">
          <!-- Top Row: Company Logo and Job Title -->
          <div class="mb-4 flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  :src="job.companyLogo"
                  alt="Company Logo"
                  class="h-10 w-10 object-contain"
              />
              <span class="font-semibold text-gray-900">
                {{ job.companyName }}
              </span>
            </div>
            <span class="text-sm font-medium text-gray-600">
              {{ job.jobTitle }}
            </span>
          </div>

          <!-- Middle Row: Wage and Date Range -->
          <div class="mb-4 flex items-center justify-between">
            <span class="text-base font-medium text-gray-800">
              {{ job.wage }}
            </span>
            <span class="text-sm text-gray-600">
              {{ job.dateRange }}
            </span>
          </div>

          <!-- Job Description -->
          <p class="mb-4 text-sm text-gray-700">
            {{ job.description }}
          </p>

          <!-- Tags -->
          <p class="text-xs text-gray-500">
            {{ job.tags }}
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-8 flex justify-center space-x-16">
        <!-- Cancel -->
        <button
            @click="cancelApplication"
            class="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200"
            title="Cancel"
        >
          <XMarkIcon class="h-8 w-8" />
        </button>
        <!-- Apply -->
        <button
            @click="applyForJob"
            class="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200"
            title="Apply"
        >
          <CheckIcon class="h-8 w-8" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any page-specific Tailwind overrides here if needed */
</style>
