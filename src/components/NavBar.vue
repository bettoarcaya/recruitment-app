<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div
      class="flex items-center flex-shrink-0 text-white mr-6 border-r border-white-400 padd-r-10"
    >
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        />
      </svg>
      <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow text-left">
        <router-link
          to="/jobs"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >Jobs</router-link>
        <router-link
          to="/candidates"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >Candidates</router-link>
      </div>
      <div>
        <t-dropdown
          placement="bottom"
          :button-props="{ baseClass: 'drop-d-menu' }"
          :visible-arrow="false"
        >
          <template v-slot:button-content>
            <img
              class="w-10 h-10 rounded-full"
              src="../assets/logo.png"
              alt="Avatar of Jonathan Reinink"
            />
          </template>
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                class="block no-underline px-4 py-2 hover:bg-teal-500 hover:text-white"
              >Account settings</a>
            </li>
            <li class="border-b"></li>
            <li>
              <a
                href="javascript:void(0)"
                class="block no-underline px-4 py-2 hover:bg-teal-500 hover:text-white"
                @click.prevent="logout"
              >Sign out</a>
            </li>
          </ul>
        </t-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>