<template>
  <div>
		<h2 class="text-center font-bold text-sm">Backgrounds</h2>
		<form class="w-full max-w-lg" @submit="submit">
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
						Institute name
					</label>
					<input 
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
						id="grid-name" 
						type="text" 
						placeholder="Standford" 
						v-model="background[0].name"
					>
				</div>
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-academic-level">
						Academic level
					</label>
					<input 
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
						id="grid-academic-level" 
						type="text" 
						placeholder="University" 
						v-model="background[0].academic_level"
					>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	props: {
		background: Array,
		errors: Object
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