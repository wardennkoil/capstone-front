<script>
import { XMarkIcon, CheckIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'ReviewApplicantPage',
  components: {
    XMarkIcon,
    CheckIcon
  },
  data() {
    return {
      applicant: {
        fullName: 'Margret Foster',
        applicationFor: 'Job Opportunity Role',
        email: 'margretfoster@example.com',
        about:
            'Fugiat ipsum deserunt culpa velit dolore non mollit esse incididunt ullamco duis. ' +
            'Tempor quis nostrud exercitation. Sit ex irure nulla nostrud consequat. ' +
            'Ex nostrud amet ea commodo et non sunt reprehenderit deserunt culpa.',
        attachments: [
          {
            fileName: 'resume_backend_developer.pdf',
            downloadLink: '#'
          },
          {
            fileName: 'resume_frontend_developer.pdf',
            downloadLink: '#'
          }
        ]
      }
    }
  },
  methods: {
    approveApplicant() {
      // Handle approve logic
      alert(`Applicant "${this.applicant.fullName}" approved!`)
    },
    rejectApplicant() {
      // Handle reject logic
      alert(`Applicant "${this.applicant.fullName}" rejected!`)
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <!-- Page Title -->
      <h1 class="mb-6 text-2xl font-bold text-gray-800">Review Applicant</h1>

      <!-- Applicant Information Card -->
      <div class="rounded-lg bg-white p-6 shadow">
        <h2 class="text-lg font-semibold text-gray-900">Applicant Information</h2>
        <p class="mt-1 text-sm text-gray-500">Personal details and application.</p>

        <div class="mt-6 space-y-4">
          <!-- Full Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Full Name</label>
            <p class="text-base text-gray-900">{{ applicant.fullName }}</p>
          </div>

          <!-- Application For -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Application for</label>
            <p class="text-base text-gray-900">{{ applicant.applicationFor }}</p>
          </div>

          <!-- Email Address -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Email address</label>
            <p class="text-base text-gray-900">{{ applicant.email }}</p>
          </div>

          <!-- About -->
          <div>
            <label class="block text-sm font-medium text-gray-700">About</label>
            <p class="text-base text-gray-900">
              {{ applicant.about }}
            </p>
          </div>

          <!-- Attachments -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Attachments</label>
            <div
                v-for="(attachment, index) in applicant.attachments"
                :key="index"
                class="mt-2 flex items-center justify-between border-b border-gray-100 py-2"
            >
              <p class="text-gray-700">{{ attachment.fileName }}</p>
              <a
                  :href="attachment.downloadLink"
                  class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Approve / Reject Buttons -->
      <div class="mt-8 flex justify-center space-x-16">
        <!-- Reject Button -->
        <button
            @click="rejectApplicant"
            class="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200"
            title="Reject"
        >
          <XMarkIcon class="h-8 w-8" />
        </button>

        <!-- Approve Button -->
        <button
            @click="approveApplicant"
            class="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200"
            title="Approve"
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
