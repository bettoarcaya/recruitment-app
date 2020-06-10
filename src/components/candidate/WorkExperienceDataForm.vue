<template>
  <div>
		<h2 class="text-center font-bold text-sm">Work experiences</h2>
		<form class="w-full max-w-lg" @submit="submit">
			<div class="flex flex-wrap -mx-3 mb-6 border-b border-black-400">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-born-date">
						Born date
					</label>
					<datepicker
						input-class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
						name="init_date"
						format="yyyy-MM-dd"
						placeholder="yyyy-mm-dd"
					></datepicker>
				</div>
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-born-date">
						Born date
					</label>
					<datepicker
						input-class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
						name="end_date"
						format="yyyy-MM-dd"
						placeholder="yyyy-mm-dd"
					></datepicker>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
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