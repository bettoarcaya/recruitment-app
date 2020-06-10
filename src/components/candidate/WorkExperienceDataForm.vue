<template>
  <div>
		<h2 class="text-center font-bold text-sm">Work experiences</h2>
		<form class="w-full max-w-lg" @submit="submit">
			<div class="flex flex-wrap -mx-3 mb-6 border-b border-black-400">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-born-date">
						Init date
					</label>
					<datepicker
						input-class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
						name="init_date"
						format="yyyy-MM-dd"
						placeholder="yyyy-mm-dd"
						v-model="wform.start"
					></datepicker>
				</div>
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-born-date">
						End date
					</label>
					<datepicker
						input-class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
						name="end_date"
						format="yyyy-MM-dd"
						placeholder="yyyy-mm-dd"
						v-model="wform.end"
					></datepicker>
				</div>
				<div class="w-full px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-position">
						Position
					</label>
					<input 
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
						id="grid-position" 
						type="string" 
						placeholder="Backend lead developer"
						v-model="wform.position"
					>
				</div>
			</div>
		</form>
		<div class="container mx-auto">
			<table class="table-auto">
				<thead>
					<tr>

					</tr>
				</thead>
				<tbody>
					<tr>

					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
	props: {
		wform: Object,
		work_experience: Array,
		errors: Object
	},
	components: {
    Datepicker
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