<template>
  <div>
    <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
      <div></div>
      <div class="container mx-auto border-b border-black-400">
        <h1 class="float-left font-bold text-2xl">{{ name }}</h1>
        <button class="btn btn-blue float-right" @click="modalForm = true">
          Add new job
        </button>
      </div>
      <div class="container mx-auto">
        <div class="card flex flex-col lg:flex margin-b-10" v-for="job in jobs" :key="job.id">
          <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="flex flex-no-wrap">
              <div class="w-1/5 flex-none">
                <img 
                  class="w-100 h-100 mr-4" 
                  alt="Vue logo" 
                  src="../assets/logo.png"
                >
              </div>
              <div class="w-4/5 flex-none">
                <div class="margin-b-9-percent flex flex-col">
                  <!--<p class="text-sm text-gray-600 flex items-center">
                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>-->
                  <div class="text-gray-900 font-bold text-xl mb-2 text-left"> 
                    {{ job.title }} 
                  </div>
                  <div class="text-left">
                    <p class="text-gray-700 text-base">
                      {{ job.description }}
                    </p>
                  </div>
                </div>
                <div class="flex items-center">
                  <img class="w-10 h-10 rounded-full mr-4" src="../assets/logo.png" alt="Avatar of Jonathan Reinink">
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">{{job.company_name}}</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                  <div class="container">
                    <router-link 
                      :to="{ 
                        name: 'Matches', 
                        params: { 
                          id: job.id 
                        } 
                      }"
                      class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 btn btn-green float-right"
                    >
                      Find candidates
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-flex margin-b-10">
          <button 
            class="bg-blue-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            @click="prev"
          >
            Prev
          </button>
          <button 
            class="bg-blue-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            @click="next"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <modal-job-form 
      v-if="modalForm"
      @close="close()"
    ></modal-job-form>

  </div>
</template>

<script>
import ModalJobForm from '@/components/modals/ModalJobForm.vue';

export default {
    name: 'Job',
    components: {
      ModalJobForm,
    },
    mounted(){
      this.getRecords();  
    },
    data(){
      return{
        name: 'Job list',
        jobs: {},
        pagInfo: {},
        modalForm: false
      }
    },
    methods: {
      showModalForm(){
        //this.$modal.show(ModalJobForm)
      },
      getRecords(){
        this.$http.get('http://recruitment-api.test/jobs')
            .then(response => {
              this.pagInfo = response.data
              this.jobs = response.data.data.data
            })
      },
      close(){
        this.modalForm = false;
        this.getRecords();
      },
      prev(){

      },
      next(){

      }
    }
}
</script>