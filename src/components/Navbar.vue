<script>
import { Bars3Icon } from "@heroicons/vue/24/solid";

export default {
  name: "Navbar",
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<template>
  <nav class="bg-white shadow-sm">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Desktop Navbar -->
      <div class="flex h-16 items-center justify-between">
        <!-- Left section: Logo / Brand -->
        <div class="flex flex-shrink-0 items-center">
          <a href="#" class="text-xl font-bold text-gray-800">YourLogo</a>
        </div>

        <!-- Middle section: Links (hidden on mobile) -->
        <div class="hidden md:flex space-x-8 ml-10">
          <a href="#" class="text-gray-700 hover:text-gray-900">
            Job Opportunities
          </a>
          <a href="#" class="text-gray-700 hover:text-gray-900">
            Apply to Jobs
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 flex md:hidden">
          <button
              @click="toggleMobileMenu"
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu (shown when mobileMenuOpen === true) -->
    <div class="md:hidden" id="mobile-menu" v-if="mobileMenuOpen">
      <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          Job Opportunities
        </a>
        <router-link
            to="/apply-jobs"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          Apply to Jobs
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Optional: any navbar-specific overrides */
</style>
