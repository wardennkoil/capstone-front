<script>
import PrimaryButton from "../../components/PrimaryButton.vue";
import { PhotoIcon, UserCircleIcon, TrashIcon, ChevronDownIcon } from '@heroicons/vue/24/solid';
import axiosInstance from "../../requests/axiosInstance.js";

export default {
  name: "CompanyCreatePage",
  components: { PrimaryButton, PhotoIcon, UserCircleIcon, TrashIcon, ChevronDownIcon },
  data() {
    return {
      companyName: '',
      industry: '',
      companyWebsite: '',
      about: '',
      email: '',
      country: '',
      streetAddress: '',
      city: '',
      region: '',
      postalCode: ''
    }
  },
  methods: {
    async onSubmit() {
      // Build the website value with prefix if needed
      const website = this.companyWebsite.startsWith('https://')
          ? this.companyWebsite
          : 'https://' + this.companyWebsite;

      const CREATE_COMPANY_MUTATION = `
      mutation {
        company {
          create(
            name: "${this.companyName}"
            website: "${website}"
            industry: "${this.industry}"
            address: "${this.streetAddress}"
            city: "${this.city}"
            country: "${this.country}"
            description: "${this.about}"
            business_registry_id: "123456789"
            CRA_BN: "987654321"
            managers: ["${localStorage.getItem('userId')}"]
            recruiters: ["67b4d7b9e3704d3143821618"]
          ) {
            _id
            name
            website
            industry
            managers
            recruiters
          }
        }
      }`;

      try {
        const response = await axiosInstance.post('', { query: CREATE_COMPANY_MUTATION }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).then(
            (_response) => {
              this.$router.push('/job-list')
            }
        );
        console.log("Company created:", response.data);
        // Optionally, you can redirect or notify the user upon success.
      } catch (error) {
        console.error("Error creating company:", error);
      }
    }
  }
}
</script>

<template>
  <!-- Note: the form now listens to the submit event -->
  <form class="m-16 md:m-32" @submit.prevent="onSubmit">
    <div class="space-y-12">
      <!-- Company Section -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Company</h2>
          <p class="mt-1 text-sm/6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <!-- Company Name -->
          <div class="sm:col-span-4">
            <label for="company-name" class="block text-sm/6 font-medium text-gray-900">Company Name</label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600">
                <input
                    type="text"
                    id="company-name"
                    v-model="companyName"
                    class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="Opportune"
                />
              </div>
            </div>
          </div>

          <!-- Industry -->
          <div class="sm:col-span-4">
            <label for="industry" class="block text-sm/6 font-medium text-gray-900">Industry</label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600">
                <input
                    type="text"
                    id="industry"
                    v-model="industry"
                    class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="SaaS"
                />
              </div>
            </div>
          </div>

          <!-- Company Website -->
          <div class="sm:col-span-4">
            <label for="company-website" class="block text-sm/6 font-medium text-gray-900">Company website</label>
            <div class="mt-2 flex">
              <div class="flex shrink-0 items-center rounded-l-md bg-white px-3 text-base text-gray-500 outline-1 outline-gray-300 sm:text-sm/6">
                https://
              </div>
              <input
                  type="text"
                  id="company-website"
                  v-model="companyWebsite"
                  class="-ml-px block w-full grow rounded-r-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="www.example.com"
              />
            </div>
          </div>

          <!-- About / Description -->
          <div class="col-span-full">
            <label for="about" class="block text-sm/6 font-medium text-gray-900">About</label>
            <div class="mt-2">
              <textarea
                  id="about"
                  rows="3"
                  v-model="about"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
              ></textarea>
            </div>
            <p class="mt-3 text-sm/6 text-gray-600">
              Write a few sentences about your company.
            </p>
          </div>

          <!-- Photo (UI only) -->
          <div class="col-span-full">
            <label for="photo" class="block text-sm/6 font-medium text-gray-900">Photo</label>
            <div class="mt-2 flex items-center gap-x-3">
              <UserCircleIcon class="size-12 text-gray-300" aria-hidden="true" />
              <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                Change
              </button>
            </div>
          </div>

          <!-- Company Documents (UI only) -->
          <div class="col-span-full">
            <label for="company-documents" class="block text-sm/6 font-medium text-gray-900">Company Documents</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                <div class="mt-4 flex text-sm/6 text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs/5 text-gray-600">DOCX, PDF, EPUB up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Personal Information Section -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Personal Information</h2>
          <p class="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>
        </div>
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <!-- Email Address -->
          <!-- Country -->
          <div class="sm:col-span-3">
            <label for="country" class="block text-sm/6 font-medium text-gray-900">Country</label>
            <div class="mt-2 grid grid-cols-1">
              <select
                  id="country"
                  name="country"
                  v-model="country"
                  class="w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="">Select Country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
              </select>
              <ChevronDownIcon class="pointer-events-none mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
            </div>
          </div>
          <!-- Street Address -->
          <div class="col-span-full">
            <label for="street-address" class="block text-sm/6 font-medium text-gray-900">Street address</label>
            <div class="mt-2">
              <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  v-model="streetAddress"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <!-- City -->
          <div class="sm:col-span-2">
            <label for="city" class="block text-sm/6 font-medium text-gray-900">City</label>
            <div class="mt-2">
              <input
                  type="text"
                  name="city"
                  id="city"
                  v-model="city"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <!-- State / Province -->
          <div class="sm:col-span-2">
            <label for="region" class="block text-sm/6 font-medium text-gray-900">State / Province</label>
            <div class="mt-2">
              <input
                  type="text"
                  name="region"
                  id="region"
                  v-model="region"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <!-- ZIP / Postal code -->
          <div class="sm:col-span-2">
            <label for="postal-code" class="block text-sm/6 font-medium text-gray-900">ZIP / Postal code</label>
            <div class="mt-2">
              <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  v-model="postalCode"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Notifications Section (unchanged) -->
<!--      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">-->
<!--        <div>-->
<!--          <h2 class="text-base/7 font-semibold text-gray-900">Notifications</h2>-->
<!--          <p class="mt-1 text-sm/6 text-gray-600">-->
<!--            We'll always let you know about important changes, but you pick what else you want to hear about.-->
<!--          </p>-->
<!--        </div>-->
<!--        <div class="max-w-2xl space-y-10 md:col-span-2">-->
<!--          <fieldset>-->
<!--            <legend class="text-sm/6 font-semibold text-gray-900">By email</legend>-->
<!--            <div class="mt-6 space-y-6">-->
<!--              <div class="flex gap-3">-->
<!--                <div class="flex h-6 shrink-0 items-center">-->
<!--                  <div class="group grid size-4 grid-cols-1">-->
<!--                    <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="text-sm/6">-->
<!--                  <label for="candidates" class="font-medium text-gray-900">Candidates</label>-->
<!--                  <p id="candidates-description" class="text-gray-500">-->
<!--                    Get notified when a candidate applies for a job.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="flex gap-3">-->
<!--                <div class="flex h-6 shrink-0 items-center">-->
<!--                  <div class="group grid size-4 grid-cols-1">-->
<!--                    <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="text-sm/6">-->
<!--                  <label for="offers" class="font-medium text-gray-900">Offers</label>-->
<!--                  <p id="offers-description" class="text-gray-500">-->
<!--                    Get notified when a candidate accepts or rejects an offer.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </fieldset>-->
<!--        </div>-->
<!--      </div>-->
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm/6 font-semibold text-gray-900 mb-32">Cancel</button>
      <!-- Wrap PrimaryButton in a submit button -->
      <button type="submit">
        <PrimaryButton class="mb-32" text="Save" />
      </button>
    </div>
  </form>
</template>

<style scoped>
/* Your scoped styles here */
</style>
