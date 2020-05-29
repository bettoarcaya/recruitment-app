<template>
  <transition name="modal">
		<div class="modal-content">
			<div class="modal-header">
				<a href="javascript:void(0)" @click="$emit('close')">
					<span class="close float-right">&times;</span>
				</a>
				<h2 class="text-left">Add new job</h2>
			</div>
			<div class="modal-body">
				<form class="w-full max-w-lg" @submit="submit">
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
								Company name
							</label>
							<input 
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
								id="grid-company-name" 
								type="text" 
								placeholder="Microsoft" 
								v-model="form.company_name"
							>
							<p class="text-red-500 text-xs italic">Please fill out this field.</p>
						</div>
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
								Job name
							</label>
							<input 
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
								id="grid-title" 
								type="text" 
								placeholder="Back-end dev" 
								v-model="form.title"
							>
							<p class="text-red-500 text-xs italic">Please fill out this field.</p>
						</div>
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
								Experience years
							</label>
							<input 
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
								id="grid-years" 
								type="number" 
								placeholder="5" 
								v-model="form.experience_years"
							>
							<p class="text-red-500 text-xs italic">Please fill out this field.</p>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 mb-2">
						<div class="w-full px-3 mb-6 md:mb-0">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
								Job category
							</label>
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
				<div class="inline-flex">
					<button class="btn btn-blue" @click="$emit('close')">
						Cancel
					</button>
					<button type="submit" class="btn btn-blue margin-l-5" @click="submit">
						Submit
					</button>
				</div>
			</div>
		</div>
  </transition>
</template>

<script>
export default {
    data(){
			return {
				jobCategories: {},
				form: {}
			}
    },
    mounted(){
			this.$http.get('http://recruitment-api.test/categories')
					.then(response => {
							this.jobCategories = response.data.data
					})
			this.initForm();
		},
		methods: {
			initForm(){
				this.form = {
					company_name: null,
					title: null,
					experience_years: null,
					catg_position_id: null,
					position_type: null
				}
			},
			submit(){
				this.$http.post()
						.then(response => {

						})
			}
		}
}
</script>