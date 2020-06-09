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
					<input 
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
						id="grid-born-date" 
						type="date" 
						placeholder="aaaa-mm-dd"
						value="1994-06-14"
						v-model="person.born_date"
					>
					<p class="text-red-500 text-xs italic" v-if="errors.born_date">{{errors.born_date[0]}}</p>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	props: {
		person: Object,
		errors: Object
	},
	mounted(){
		console.log('props', this.person)
	},
	data() {
		return {

		}
	},
	methods: {
		submit(){
			
		}
	}
}
</script>