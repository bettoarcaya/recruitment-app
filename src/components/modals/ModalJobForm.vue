<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <!--<slot name="header">
              default header
            </slot>-->
          </div>

          <div class="modal-body">
            <form class="w-full max-w-lg">
							<div class="flex flex-wrap -mx-3 mb-6">
								<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
										Company name
									</label>
									<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
									<p class="text-red-500 text-xs italic">Please fill out this field.</p>
								</div>
								<div class="w-full md:w-1/2 px-3">
									<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
										Job name
									</label>
									<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
									<p class="text-red-500 text-xs italic">Please fill out this field.</p>
								</div>
							</div>
							<div class="flex flex-wrap -mx-3 mb-2">
								<div class="w-full px-3 mb-6 md:mb-0">
									<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
										Job category
									</label>
									<div class="relative">
										<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
											<option 
												v-for="jobCateg in jobCategories" 
												:key="jobCateg.id" 
												:value="jobCateg.id"
											>
												{{jobCateg.name}}
											</option>
										</select>
										<p class="text-red-500 text-xs italic">Please fill out this field.</p>
									</div>
								</div>
							</div>
            </form>
          </div>

					<div class="modal-footer">
            <slot name="footer">
              
              <button class="modal-default-button" @click="$emit('close')">
                Cancel
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    data(){
        return {
            jobCategories: {}
        }
    },
    mounted(){
        this.$http.get('http://recruitment-api.test/categories')
            .then(response => {
                this.jobCategories = response.data.data
                console.log(this.jobCategories)
            })
    }
}
</script>