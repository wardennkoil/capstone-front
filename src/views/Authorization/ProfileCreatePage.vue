<script>
import { PhotoIcon, UserCircleIcon, TrashIcon } from '@heroicons/vue/24/solid'
import PrimaryButton from "../../components/PrimaryButton.vue";
export default {
  name: "ProfileCreatePage",
  components: {
    PrimaryButton,
    PhotoIcon,
    UserCircleIcon,
    TrashIcon
  },
  data(){
    return {
      aboutText: '',
      skills: [''],
      educations: [''],
      experiences: [''],
    }
  },
  methods:{
  }
}
</script>

<template>
  <form class="m-16 md:m-32">
    <div class="space-y-12">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Profile</h2>
          <p class="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
        </div>

        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">

          <div class="col-span-full">
            <label for="photo" class="block text-sm/6 font-medium text-gray-900">Photo</label>
            <div class="mt-2 flex items-center gap-x-3">
              <UserCircleIcon class="size-12 text-gray-300" aria-hidden="true" />
              <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">Change</button>
            </div>
          </div>

          <div class="col-span-full">
            <label for="about" class="block text-sm/6 font-medium text-gray-900">About</label>
            <div class="mt-2">
              <textarea v-model="aboutText" name="about" id="about" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p class="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
          </div>



          <div class="col-span-full">
            <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Resume</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                <div class="mt-4 flex text-sm/6 text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500">
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

      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Skills</h2>
          <p class="mt-1 text-sm/6 text-gray-600">What can you get done? What type of work you can do?</p>
          <PrimaryButton @click="this.skills.push('')" class="mt-5" text="+ New Skill" />
        </div>

        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="sm:col-span-4" v-for="(skill,index) in skills">
            <label for="email" class="block text-sm/6 font-medium text-gray-900">Skill {{index + 1}}</label>
            <div class="mt-2 flex items-center gap-5">
              <input @change="(value) => skill = value" name="email" type="text" autocomplete="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              <TrashIcon @click="this.skills.splice(index, 1)" class="cursor-pointer w-7 h-7 text-red-600 hover:text-red-700" aria-hidden="true" />
            </div>
          </div>

          </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Education</h2>
          <p class="mt-1 text-sm/6 text-gray-600">What do you know?</p>
          <PrimaryButton @click="this.educations.push('')" class="mt-5" text="+ New Skill" />
        </div>

        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="sm:col-span-4" v-for="(education,index) in educations">
            <label for="email" class="block text-sm/6 font-medium text-gray-900">Education {{index + 1}}</label>
            <div class="mt-2 flex items-center gap-5">
              <input @change="(value) => education = value" name="email" type="text" autocomplete="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              <TrashIcon @click="this.educations.splice(index, 1)" class="cursor-pointer w-7 h-7 text-red-600 hover:text-red-700" aria-hidden="true" />
            </div>
          </div>

        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Experience</h2>
          <p class="mt-1 text-sm/6 text-gray-600">What have you done?</p>
          <PrimaryButton @click="this.experiences.push('')" class="mt-5" text="+ New Skill" />
        </div>

        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="sm:col-span-4" v-for="(experience,index) in experiences">
            <label for="email" class="block text-sm/6 font-medium text-gray-900">Experience {{index + 1}}</label>
            <div class="mt-2 flex items-center gap-5">
              <input @change="(value) => experience = value" name="email" type="text" autocomplete="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              <TrashIcon @click="this.experiences.splice(index, 1)" class="cursor-pointer w-7 h-7 text-red-600 hover:text-red-700" aria-hidden="true" />
            </div>
          </div>

        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Notifications</h2>
          <p class="mt-1 text-sm/6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
        </div>

        <div class="max-w-2xl space-y-10 md:col-span-2">
          <fieldset>
            <legend class="text-sm/6 font-semibold text-gray-900">By email</legend>
            <div class="mt-6 space-y-6">
              <div class="flex gap-3">
                <div class="flex h-6 shrink-0 items-center">
                  <div class="group grid size-4 grid-cols-1">
                    <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                    <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                      <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path class="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div class="text-sm/6">
                  <label for="offers" class="font-medium text-gray-900">Offers</label>
                  <p id="offers-description" class="text-gray-500">Get notified when company send you an offer.</p>
                </div>
              </div>
            </div>
          </fieldset>

        </div>
      </div>
    </div>

    <div class="mt-6 mb-12 flex items-center justify-end gap-x-6">
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm mb-32 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form>
</template>

