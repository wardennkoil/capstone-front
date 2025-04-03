<script>
import {PhotoIcon, UserCircleIcon, TrashIcon} from '@heroicons/vue/24/solid'
import PrimaryButton from "../../components/PrimaryButton.vue";
import axiosInstance from "../../requests/axiosInstance.js";

export default {
  name: "ProfileCreatePage",
  components: {
    PrimaryButton,
    PhotoIcon,
    UserCircleIcon,
    TrashIcon
  },
  data() {
    return {
      aboutText: '',
      skills: [''],
      educations: [''],
      experiences: ['']
    }
  },
  mounted() {
    this.fetchProfileData();
  },
  methods: {
    async fetchProfileData() {
      const MY_PROFILE_QUERY = `
        query {
          profile {
            getByUserId(userId: "${localStorage.getItem('userId')}") {
              _id
              userId
              bio
              skills
              experience
              resumes
              profile_photo
            }
          }
        }`;
      try {
        const response = await axiosInstance.post('', {query: MY_PROFILE_QUERY}, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const profileData = response.data.data.profile.getByUserId;
        localStorage.setItem("profileId", profileData._id);
        // Populate component data with the fetched profile information.
        this.aboutText = profileData.bio;
        this.skills = profileData.skills.length ? profileData.skills : [''];
        this.experiences = profileData.experience.length ? profileData.experience : [''];
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    },
    async onSubmit() {
      try {
        // First, send a submission request (for example, a dummy submit mutation)
        // If the submission is successful, send the update mutation.

        const UPDATE_MUTATION = `mutation {
            profile {
              update(
                _id: "${localStorage.getItem('profileId')}",
                userId: "${localStorage.getItem('userId')}",
                bio: "${this.aboutText}",
                skills: ${JSON.stringify(this.skills.filter(s => s))},
                experience: ${JSON.stringify(this.experiences.filter(e => e))},
                resumes: [],
                profile_photo: ""
              ) {
                _id
                userId
                bio
                skills
                experience
                resumes
                profile_photo
              }
            }
          }`;
        const updateResponse = await axiosInstance.post('', {query: UPDATE_MUTATION}, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).then((response) => {
          console.log("Profile updated:", response.data);
          this.$router.push('/apply');
        });
        console.log("Profile updated:", updateResponse.data);
      } catch (error) {
        console.error("Error during submit/update:", error);
      }
    },
    // Helpers for adding/removing items from arrays
    addSkill() {
      this.skills.push('');
    },
    removeSkill(index) {
      this.skills.splice(index, 1);
    },
    addEducation() {
      this.educations.push('');
    },
    removeEducation(index) {
      this.educations.splice(index, 1);
    },
    addExperience() {
      this.experiences.push('');
    },
    removeExperience(index) {
      this.experiences.splice(index, 1);
    }
  }
}
</script>

<template>
  <form class="m-16 md:m-32" @submit.prevent="onSubmit()">
    <div class="space-y-12">
      <!-- Profile Section -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Profile</h2>
          <p class="mt-1 text-sm/6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="col-span-full">
            <label for="photo" class="block text-sm/6 font-medium text-gray-900">Photo</label>
            <div class="mt-2 flex items-center gap-x-3">
              <UserCircleIcon class="size-12 text-gray-300" aria-hidden="true"/>
              <button type="button"
                      class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                Change
              </button>
            </div>
          </div>
          <div class="col-span-full">
            <label for="about" class="block text-sm/6 font-medium text-gray-900">About</label>
            <div class="mt-2">
              <textarea v-model="aboutText" name="about" id="about" rows="3"
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"/>
            </div>
            <p class="mt-3 text-sm/6 text-gray-600">
              Write a few sentences about yourself.
            </p>
          </div>
          <div class="col-span-full">
            <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Resume</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true"/>
                <div class="mt-4 flex text-sm/6 text-gray-600">
                  <label for="file-upload"
                         class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs/5 text-gray-600">DOCX, PDF, EPUB up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Skills</h2>
          <p class="mt-1 text-sm/6 text-gray-600">
            What can you get done? What type of work you can do?
          </p>
          <PrimaryButton @click="addSkill()" class="mt-5" text="+ New Skill"/>
        </div>
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="sm:col-span-4" v-for="(_skill, index) in skills" :key="index">
            <label :for="'skill-' + index" class="block text-sm/6 font-medium text-gray-900">
              Skill {{ index + 1 }}
            </label>
            <div class="mt-2 flex items-center gap-5">
              <input v-model="skills[index]" :id="'skill-' + index" name="skill" type="text"
                     class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"/>
              <TrashIcon @click="removeSkill(index)"
                         class="cursor-pointer w-7 h-7 text-red-600 hover:text-red-700" aria-hidden="true"/>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Education</h2>
          <p class="mt-1 text-sm/6 text-gray-600">What do you know?</p>
          <PrimaryButton @click="addEducation" class="mt-5" text="+ New Education"/>
        </div>
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="sm:col-span-4" v-for="(_education, index) in educations" :key="index">
            <label :for="'education-' + index" class="block text-sm/6 font-medium text-gray-900">
              Education {{ index + 1 }}
            </label>
            <div class="mt-2 flex items-center gap-5">
              <input v-model="educations[index]" :id="'education-' + index" name="education" type="text"
                     class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"/>
              <TrashIcon @click="removeEducation(index)"
                         class="cursor-pointer w-7 h-7 text-red-600 hover:text-red-700" aria-hidden="true"/>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Experience</h2>
          <p class="mt-1 text-sm/6 text-gray-600">What have you done?</p>
          <PrimaryButton @click="addExperience" class="mt-5" text="+ New Experience"/>
        </div>
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="sm:col-span-4" v-for="(_experience, index) in experiences" :key="index">
            <label :for="'experience-' + index" class="block text-sm/6 font-medium text-gray-900">
              Experience {{ index + 1 }}
            </label>
            <div class="mt-2 flex items-center gap-5">
              <input v-model="experiences[index]" :id="'experience-' + index" name="experience" type="text"
                     class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"/>
              <TrashIcon @click="removeExperience(index)"
                         class="cursor-pointer w-7 h-7 text-red-600 hover:text-red-700" aria-hidden="true"/>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="mt-6 mb-12 flex items-center justify-end gap-x-6">
      <button type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm mb-32 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Save
      </button>
    </div>
  </form>
</template>
