<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-content">
        <div class="modal-header">
          <a href="javascript:void(0)" @click="$emit('close')">
            <span class="close float-right">&times;</span>
          </a>
          <h2 class="text-left font-bold text-xl">Add new job</h2>
        </div>
        <div class="modal-body">
          <form class="w-full max-w-lg" @submit="submit">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >Company name</label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-company-name"
                  type="text"
                  placeholder="Microsoft"
                  v-model="form.company_name"
                />
                <p
                  class="text-red-500 text-xs italic"
                  v-if="errors.company_name"
                >{{errors.company_name[0]}}</p>
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >Job name</label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-title"
                  type="text"
                  placeholder="Back-end dev"
                  v-model="form.title"
                />
                <p class="text-red-500 text-xs italic" v-if="errors.title">{{errors.title[0]}}</p>
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >Experience years</label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-years"
                  type="number"
                  placeholder="5"
                  v-model="form.experience_years"
                />
                <p
                  class="text-red-500 text-xs italic"
                  v-if="errors.experience_years"
                >{{errors.experience_years[0]}}</p>
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >Work type</label>
                <div class="inline-flex">
                  <div class="margin-l-5" style="magin-left: 10px;">
                    <input
                      id="radio1"
                      type="radio"
                      name="radio"
                      class="hidden"
                      value="remote"
                      v-model="form.position_type"
                    />
                    <label for="radio1" class="flex items-center cursor-pointer">
                      <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                      Remote
                    </label>
                  </div>
                  <div>
                    <input
                      id="radio2"
                      type="radio"
                      name="radio"
                      class="hidden"
                      value="onsite"
                      v-model="form.position_type"
                    />
                    <label for="radio2" class="flex items-center cursor-pointer">
                      <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                      On site
                    </label>
                  </div>
                </div>
              </div>
              <div class="w-full px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >Description</label>
                <textarea
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-description"
                  placeholder="Job description"
                  v-model="form.description"
                ></textarea>
                <p
                  class="text-red-500 text-xs italic"
                  v-if="errors.description"
                >{{errors.description[0]}}</p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >Job category</label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-category"
                    v-model="form.catg_position_id"
                  >
                    <option
                      v-for="jobCateg in jobCategories"
                      :key="jobCateg.id"
                      :value="jobCateg.id"
                    >{{jobCateg.name}}</option>
                  </select>
                  <p
                    class="text-red-500 text-xs italic"
                    v-if="errors.catg_position_id"
                  >Please fill out this field.</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <div class="inline-flex">
            <button class="btn btn-blue" @click="$emit('close')">Cancel</button>
            <button type="submit" class="btn btn-blue margin-l-5" @click="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      jobCategories: {},
      form: {},
      errors: {},
      baseUrl: `${this.$baseUrl}`
    };
  },
  mounted() {
    this.getRecords();
    this.initForm();
  },
  methods: {
    initForm() {
      this.form = {
        company_name: null,
        title: null,
        experience_years: null,
        catg_position_id: 3,
        position_type: "remote"
      };
      this.errors = {};
    },
    getRecords() {
      this.$http.get(`${this.baseUrl}/categories`).then(response => {
        this.jobCategories = response.data.data;
      });
    },
    submit() {
      this.$http
        .post(`${this.baseUrl}/jobs`, this.form)
        .then(response => {
          this.$notify({
            type: "success",
            title: "well done",
            text: response.data.message
          });
          this.initForm();
          this.$emit("update");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.$notify({
            type: "error",
            title: "Something is bad",
            text: error.response.data.message
          });
        });
    }
  }
};
</script>