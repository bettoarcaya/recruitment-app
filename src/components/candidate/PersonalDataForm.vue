<template>
	<div>
		<h2 class="text-center font-bold text-sm">Personal data</h2>
		<form class="w-full max-w-lg" @submit="submit">
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
						Firstname
					</label>
					<input 
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
						id="grid-first-name" 
						type="text" 
						placeholder="Jhon" 
						v-model="person.firstname"
					>
					<p class="text-red-500 text-xs italic" v-if="errors.firstname">{{errors.firstname[0]}}</p>
				</div>
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
						Lastname
					</label>
					<input 
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
						id="grid-last-name" 
						type="text" 
						placeholder="Doe" 
						v-model="person.lastname"
					>
					<p class="text-red-500 text-xs italic" v-if="errors.lastname">{{errors.lastname[0]}}</p>
				</div>
				<div class="w-full px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
						Email
					</label>
					<input 
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
						id="grid-email" 
						type="email" 
						placeholder="jhon.doe@example.com" 
						v-model="person.email"
					>
					<p class="text-red-500 text-xs italic" v-if="errors.email">{{errors.email[0]}}</p>
				</div>
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-born-date">
						Born date
					</label>
					<datepicker
						input-class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						v-model="person.born_date" 
						name="born_date"
						format="yyyy-MM-dd"
						placeholder="yyyy-mm-dd"
						typeable="true"
					></datepicker>
					<p class="text-red-500 text-xs italic" v-if="errors.born_date">{{errors.born_date[0]}}</p>
				</div>
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-gender">
						Gender
					</label>
					<div class="inline-flex">
						<div class="margin-l-5" style="magin-left: 10px;">
							<input 
								id="radio1" 
								type="radio" 
								name="radio" 
								class="hidden"
								value="male"
								v-model="person.gender"
							/>
							<label for="radio1" class="flex items-center cursor-pointer">
								<span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
								Male
							</label>
						</div>
						<div>
							<input 
								id="radio2" 
								type="radio" 
								name="radio"
								class="hidden"
								value="female"
								v-model="person.gender"
							/>
							<label for="radio2" class="flex items-center cursor-pointer">
								<span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
								Female
							</label>
						</div>
						<div>
							<input 
								id="radio3" 
								type="radio" 
								name="radio"
								class="hidden"
								value="none"
								v-model="person.gender"
							/>
							<label for="radio3" class="flex items-center cursor-pointer">
								<span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
								None
							</label>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-2">
				<div class="w-full px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-profile">
						Profile
					</label>
					<div class="relative">
						<select 
							class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
							id="grid-category" 
							v-model="person.work_exp_catg"
						>
							<option 
								v-for="jobCateg in jobCategories" 
								:key="jobCateg.id" 
								:value="jobCateg.id"
							>
								{{jobCateg.name}}
							</option>
						</select>
						<p class="text-red-500 text-xs italic" v-if="errors.work_exp_catg">Please fill out this field.</p>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
	props: {
		person: Object,
		errors: Object
	},
	components: {
    Datepicker
  },
	mounted(){
		this.getRecords()
	},
	data() {
		return {
			baseUrl: `${this.$baseUrl}`,
			jobCategories: {},
		}
	},
	methods: {
		submit(){
			
		},
		getRecords(){
			this.$http.get(`${this.baseUrl}/categories`)
				.then(response => {
						this.jobCategories = response.data.data
				})
		},
	}
}
</script>