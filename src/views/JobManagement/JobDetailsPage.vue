<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Page Container -->
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <!-- Page Title -->
      <h1 class="mb-6 text-xl font-bold text-gray-800">Describe job opportunity</h1>

      <!-- Job Opportunity Card -->
      <div class="rounded-lg bg-white shadow p-6 space-y-4">
        <!-- Top row: Company & Position -->
        <div class="flex items-center justify-between">
          <!-- Company Logo & Name -->
          <div class="flex items-center space-x-3">
            <img
                :src="jobOpportunity.logoUrl"
                alt="Company Logo"
                class="h-10 w-10 rounded-full object-cover"
            />
            <h2 class="text-lg font-semibold text-gray-900">
              {{ jobOpportunity.companyName }}
            </h2>
          </div>
          <!-- Job Title -->
          <div class="text-base font-medium text-gray-500">
            {{ jobOpportunity.jobTitle }}
          </div>
        </div>

        <!-- Job Image -->
        <img
            :src="jobOpportunity.imageUrl"
            alt="Opportunity Image"
            class="h-64 w-full rounded-md object-cover"
        />

        <!-- Wage & Date Range -->
        <div class="flex items-center justify-between text-sm text-gray-600">
          <div>{{ jobOpportunity.wage }}</div>
          <div>{{ jobOpportunity.dateRange }}</div>
        </div>

        <!-- Description -->
        <p class="text-sm text-gray-700">
          {{ jobOpportunity.description }}
        </p>

        <!-- Tags -->
        <p class="text-sm text-gray-500">
          {{ jobOpportunity.tags }}
        </p>
      </div>

      <!-- Applicants Table -->
      <div class="mt-8 overflow-hidden rounded-lg bg-white shadow">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
          <tr>
            <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Name
            </th>
            <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Email
            </th>
            <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Position
            </th>
            <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Status
            </th>
            <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Role
            </th>
          </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
          <tr v-for="applicant in applicants" :key="applicant.id">
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
              {{ applicant.name }}
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
              {{ applicant.email }}
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
              {{ applicant.position }}
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm">
              <!-- Example: highlight 'Active' with a green badge -->
              <span
                  v-if="applicant.status === 'Active'"
                  class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
              >
                  Active
                </span>
              <span
                  v-else
                  class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800"
              >
                  {{ applicant.status }}
                </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
              {{ applicant.role }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobOpportunityDetailsPage",
  data() {
    return {
      jobOpportunity: {
        companyName: "Google",
        logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
        jobTitle: "Office Cleaner",
        wage: "$20/hour",
        dateRange: "14 September - 21 September 2024",
        imageUrl:
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80",
        description:
            "Join Google’s team as an Office Cleaner! Maintain cleanliness and organization in our modern campus. Your work is essential in supporting a healthy work environment for Googlers worldwide. Competitive pay, flexible hours, and opportunities for growth. Apply today!",
        tags: "#office #cleaner #consistent",
      },
      applicants: [
        {
          id: 1,
          name: "Jane Cooper",
          email: "jane.cooper@example.com",
          position: "Office Cleaner",
          status: "Active",
          role: "Admin",
        },
        {
          id: 2,
          name: "Jane Cooper",
          email: "jane.cooper@example.com",
          position: "Office Cleaner",
          status: "Active",
          role: "Admin",
        },
        {
          id: 3,
          name: "Jane Cooper",
          email: "jane.cooper@example.com",
          position: "Office Cleaner",
          status: "Active",
          role: "Admin",
        },
        {
          id: 4,
          name: "Jane Cooper",
          email: "jane.cooper@example.com",
          position: "Office Cleaner",
          status: "Active",
          role: "Admin",
        },
        {
          id: 5,
          name: "Jane Cooper",
          email: "jane.cooper@example.com",
          position: "Office Cleaner",
          status: "Active",
          role: "Admin",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Optional: Add or override Tailwind classes here */
</style>
