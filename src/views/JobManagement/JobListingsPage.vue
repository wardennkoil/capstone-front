<script>
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/vue/24/solid";
import Navbar from "../../components/Navbar.vue";

export default {
  name: "JobListingsPage",
  components: {
    Navbar,
    PlusIcon,
    PencilSquareIcon,
    TrashIcon,
  },
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Junior IT Support Specialist",
          wage: "$16-$19/hour",
          dateRange: "23.11.2024 - 30.11.2024",
          tags: "#IT, #Support, #Entry-Level, #Tech",
          candidates: "2 Candidates",
          description: "This is a description of the job opportunity.",
          imageUrl:
              "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 2,
          title: "Café Barista",
          wage: "$16-$19/hour",
          dateRange: "23.11.2024 - 30.11.2024",
          tags: "#FoodService, #Hospitality, #Entry-Level, #Barista",
          candidates: "4 Candidates",
          description: "This is a description of the job opportunity.",

          imageUrl:
              "https://images.unsplash.com/photo-1552072095-567b4626e814?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 3,
          title: "Mailroom Assistant",
          wage: "$16-$19/hour",
          dateRange: "Consistent",
          tags: "#Office, #Support, #Entry-Level, #Mail",
          candidates: "2 Candidates",
          description: "This is a description of the job opportunity.",

          imageUrl:
              "https://images.unsplash.com/photo-1581091749602-4981bcdac0b0?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 4,
          title: "Receptionist Assistant",
          wage: "$16-$19/hour",
          dateRange: "23.11.2024 - 30.11.2024",
          tags: "#Office, #Support, #Entry-Level, #FrontDesk",
          candidates: "4 Candidates",
          description: "This is a description of the job opportunity.",

          imageUrl:
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
        },
      ],
      showDeleteModal: false,
      jobToDelete: null,
    };
  },
  methods: {
    addJob() {
      // Handle adding a new job opportunity
      alert("Add Job Opportunity clicked!");
    },
    editJob(job) {
      // Handle editing a job
      alert(`Edit job: ${job.title}`);
    },
    deleteJob(job) {
      // Show the confirmation modal
      this.jobToDelete = job;
      this.showDeleteModal = true;
    },
    cancelDelete() {
      // Close modal without deleting
      this.showDeleteModal = false;
      this.jobToDelete = null;
    },
    confirmDeleteJob() {
      // Actually remove the job from array
      if (this.jobToDelete) {
        this.jobs = this.jobs.filter((j) => j.id !== this.jobToDelete.id);
      }
      this.showDeleteModal = false;
      this.jobToDelete = null;
    },
  },
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <!-- Header row -->
      <div class="mb-6 flex items-center justify-between">
        <h1 class="text-2xl font-bold text-gray-800">Your Job Opportunities</h1>
        <button
            @click="addJob"
            class="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
        >
          <PlusIcon class="h-5 w-5" />
          <span>Add Job Opportunity</span>
        </button>
      </div>

      <!-- Job listing cards -->
      <div class="space-y-4">
        <div
            v-for="job in jobs"
            :key="job.id"
            class="flex items-center justify-between rounded-lg bg-white p-4 shadow"
        >
          <!-- Left: Image & main info -->
          <div class="flex items-center space-x-4">
            <img
                :src="job.imageUrl"
                alt="Job image"
                class="h-44 w-44 rounded-md border border-gray-200 object-cover"
            />
            <div>
              <h2 class="text-lg font-semibold text-gray-900">
                {{ job.title }}
              </h2>
              <p class="text-sm font-medium text-gray-700">
                {{ job.wage }}
              </p>
              <p class="mt-1 text-sm text-gray-500">
                {{ job.description }}
              </p>
              <p class="mt-1 text-sm text-gray-500">
                {{ job.tags }}
              </p>
              <p class="text-sm text-gray-500">
                {{ job.candidates }}
              </p>
            </div>
          </div>

          <!-- Right: Date range and icons -->
          <div class="flex flex-col items-end space-y-2">
            <div class="text-sm text-gray-600">
              {{ job.dateRange }}
            </div>
            <div class="flex items-center space-x-3">
              <button
                  @click="editJob(job)"
                  class="text-gray-500 hover:text-gray-700"
                  title="Edit Job"
              >
                <PencilSquareIcon class="h-5 w-5" />
              </button>
              <button
                  @click="deleteJob(job)"
                  class="text-gray-500 hover:text-red-600"
                  title="Delete Job"
              >
                <TrashIcon class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div
        v-if="showDeleteModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50"
    >
      <div class="w-full max-w-md rounded-lg bg-white p-6">
        <h3 class="text-lg font-semibold text-gray-900">Delete Job</h3>
        <p class="mt-2 text-sm text-gray-600">
          Are you sure you want to delete
          <span class="font-medium">"{{ jobToDelete?.title }}"</span>?
        </p>
        <div class="mt-4 flex justify-end space-x-2">
          <button
              @click="cancelDelete"
              class="rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
              @click="confirmDeleteJob"
              class="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: add page-specific Tailwind overrides here */
</style>
