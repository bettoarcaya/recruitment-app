<template>
  <div>
    <h2 class="text-center font-bold text-sm">Backgrounds</h2>
    <form class="w-full max-w-lg" @submit="submit">
      <div class="flex flex-wrap -mx-3 mb-6 border-b border-black-400">
        <div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
            Institute name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-name"
            type="text"
            placeholder="Standford"
            v-model="bform.name"
          />
        </div>
        <div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-academic-level">
            Academic level
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-academic-level"
            type="text"
            placeholder="University"
            v-model="bform.academic_level"
          />
        </div>
        <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-action">
            ...
          </label>
          <button class="bg-white-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" @click.prevent="add" :disabled="bform.name == '' && bform.academic_level == ''">
            <img class="w-5 h-5" src="@/assets/plus-solid.svg" alt="Next page" />
          </button>
        </div>
      </div>
    </form>
    <div class="container mx-auto" v-if="background.length > 0">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2" width="45%">Institute name</th>
            <th class="px-4 py-2" width="45%">Academic level</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bg, index) in background" :key="index">
            <th class="border px-4 py-2">
              {{ bg.name }}
            </th>
            <th class="border px-4 py-2">
              {{ bg.academic_level }}
            </th>
            <th class="border px-4 py-2">
              <button class="bg-white-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" @click.prevent="del(index)">
                <img class="w-5 h-5" src="@/assets/trash-solid.svg" />
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bform: Object,
    background: Array,
    errors: Object
  },
  data() {
    return {
      backgrounds: []
    };
  },
  methods: {
    submit() {},
    initBForm() {
      this.bform = {
        name: "",
        academic_level: ""
      };
    },
    add() {
      this.background.push({
        name: this.bform.name,
        academic_level: this.bform.academic_level
      });
      this.initBForm();
    },
    del(index) {
      this.background.splice(index, 1);
    }
  }
};
</script>
