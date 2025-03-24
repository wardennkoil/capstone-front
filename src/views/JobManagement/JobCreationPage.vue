<script>
import PrimaryButton from "../../components/PrimaryButton.vue";
import { PhotoIcon, UserCircleIcon, TrashIcon, ChevronDownIcon } from '@heroicons/vue/24/solid';
import Navbar from "../../components/Navbar.vue";

export default {
  name: "JobOpportunityCreatePage",
  components: {
    Navbar,
    PrimaryButton,
    PhotoIcon,
    UserCircleIcon,
    TrashIcon,
    ChevronDownIcon,
  },
  data() {
    return {
      // Default selections
      jobType: "Constant",
      payType: "Salary",
      // Dynamic qualifications list (similar to skills in the Profile example)
      qualifications: [""],
    };
  },
  methods: {
    addQualification() {
      this.qualifications.push("");
    },
    removeQualification(index) {
      this.qualifications.splice(index, 1);
    },
  },
};
</script>

<template>
  <Navbar />
  <form class="m-16 md:m-32 ">
    <h2 class="text-3xl font-semibold mb-32 text-gray-900">Create Job Opportunity</h2>
    <div class="space-y-12">

      <!-- Job Opportunity Information -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Job Opportunity</h2>
          <p class="mt-1 text-sm/6 text-gray-600">Provide details for the job opportunity.</p>
        </div>
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <!-- Position Name -->
          <div class="sm:col-span-4">
            <label for="positionName" class="block text-sm/6 font-medium text-gray-900">Position Name</label>
            <div class="mt-2">
              <input
                  type="text"
                  id="positionName"
                  name="positionName"
                  placeholder="Enter job title"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <!-- Job Description -->
          <div class="col-span-full">
            <label for="jobDescription" class="block text-sm/6 font-medium text-gray-900">Job Description</label>
            <div class="mt-2">
              <textarea
                  id="jobDescription"
                  name="jobDescription"
                  rows="4"
                  placeholder="Describe the job opportunity"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              ></textarea>
            </div>
          </div>
          <!-- Tags -->
          <div class="col-span-full">
            <label for="tags" class="block text-sm/6 font-medium text-gray-900">Tags</label>
            <div class="mt-2">
              <textarea
                  id="tags"
                  name="tags"
                  rows="2"
                  placeholder="Enter tags, separated by commas"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- Job Details -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Job Details</h2>
          <p class="mt-1 text-sm/6 text-gray-600">Set job type and payment details.</p>
        </div>
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <!-- Job Type with conditional dates -->
          <div class="sm:col-span-4">
            <label for="jobType" class="block text-sm/6 font-medium text-gray-900">Job Type</label>
            <div class="mt-2 grid grid-cols-1 relative">
              <select
                  id="jobType"
                  name="jobType"
                  v-model="jobType"
                  class="col-start-1 row-start-1 w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 appearance-none focus:outline-indigo-600"
              >
                <option value="Constant">Constant</option>
                <option value="Temporary">Temporary</option>
              </select>
              <ChevronDownIcon
                  class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500"
                  aria-hidden="true"
              />
            </div>
          </div>
          <!-- If Temporary: Start and End Dates -->
          <template v-if="jobType === 'Temporary'">
            <div class="sm:col-span-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
              <div class="sm:col-span-2">
                <label for="startDate" class="block text-sm/6 font-medium text-gray-900">Start Date</label>
                <div class="mt-2">
                  <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="endDate" class="block text-sm/6 font-medium text-gray-900">End Date</label>
                <div class="mt-2">
                  <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
            </div>

          </template>
          <!-- Pay Type -->
          <div class="sm:col-span-4">
            <label for="payType" class="block text-sm/6 font-medium text-gray-900">Pay Type</label>
            <div class="mt-2 grid grid-cols-1 relative">
              <select
                  id="payType"
                  name="payType"
                  v-model="payType"
                  class="col-start-1 row-start-1 appearance-none w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              >
                <option value="Hourly">Hourly</option>
                <option value="Salary">Salary</option>
                <option value="Contract">Contract</option>
              </select>
              <ChevronDownIcon
                  class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500"
                  aria-hidden="true"
              />
            </div>
          </div>
          <!-- Canadian Dollars Amount -->
          <div class="sm:col-span-4">
            <label for="amount" class="block text-sm/6 font-medium text-gray-900">Amount (CAD)</label>
            <div class="mt-2">
              <input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Enter amount in CAD"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Job Image -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Job Image</h2>
          <p class="mt-1 text-sm/6 text-gray-600">Upload an image for the job posting.</p>
        </div>
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="col-span-full">
            <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Job Image</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                <div class="mt-4 flex text-sm/6 text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500">
                    <span>Upload an Image</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs/5 text-gray-600">JPEG, PNG, WEBM up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Qualifications (Dynamic List) -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Qualifications</h2>
          <p class="mt-1 text-sm/6 text-gray-600">List required qualifications for the job.</p>
          <PrimaryButton @click="addQualification()" class="mt-5" text="+ New Qualification" />
        </div>
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="sm:col-span-4" v-for="(qualification, index) in qualifications" :key="index">
            <label :for="'qualification-' + index" class="block text-sm/6 font-medium text-gray-900">
              Qualification {{ index + 1 }}
            </label>
            <div class="mt-2 flex items-center gap-5">
              <input
                  :id="'qualification-' + index"
                  type="text"
                  v-model="qualifications[index]"
                  placeholder="Enter qualification"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
              <TrashIcon
                  @click="removeQualification(index)"
                  class="cursor-pointer w-7 h-7 text-red-600 hover:text-red-700"
                  aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Address -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Address</h2>
          <p class="mt-1 text-sm/6 text-gray-600">Provide the location for the job.</p>
        </div>
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="col-span-full">
            <label for="streetAddress" class="block text-sm/6 font-medium text-gray-900">Street address</label>
            <div class="mt-2">
              <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  autocomplete="street-address"
                  placeholder="123 Main St"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="city" class="block text-sm/6 font-medium text-gray-900">City</label>
            <div class="mt-2">
              <input
                  type="text"
                  id="city"
                  name="city"
                  autocomplete="address-level2"
                  placeholder="City"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="region" class="block text-sm/6 font-medium text-gray-900">State / Province</label>
            <div class="mt-2">
              <input
                  type="text"
                  id="region"
                  name="region"
                  autocomplete="address-level1"
                  placeholder="State or Province"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="postalCode" class="block text-sm/6 font-medium text-gray-900">ZIP / Postal code</label>
            <div class="mt-2">
              <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  autocomplete="postal-code"
                  placeholder="Postal Code"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Form Actions -->
    <div class="mt-6 flex items-center justify-end gap-x-6 ">
      <button type="button" class="text-sm/6 mb-32 font-semibold text-gray-900">Cancel</button>
      <PrimaryButton text="Save" class="mb-32"/>
    </div>
  </form>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
