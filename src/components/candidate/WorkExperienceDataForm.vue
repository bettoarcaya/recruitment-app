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
						typeable="true"
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
						typeable="true"
					></datepicker>
				</div>
				<div class="w-full md:w-5/6 px-3 mb-6 md:mb-0">
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
				<div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
						...
					</label>
					<button 
						class="bg-white-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
						@click.prevent="add"
					>
						<img class="w-5 h-5" src="@/assets/plus-solid.svg" alt="Next page">
					</button>
				</div>
			</div>
		</form>
		<div 
			class="container mx-auto"
			v-if="work_experience.length > 0"
		>
			<table class="table-auto">
				<thead>
					<tr>
						<th class="px-4 py-2" width="90%">Position</th>
						<th class="px-4 py-2">Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(wx, index) in work_experience" :key="index">
						<th class="border px-4 py-2">
							{{wx.position}}
						</th>
						<th class="border px-4 py-2">
							<button 
								class="bg-white-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
								@click.prevent="del(index)"
							>
								<img class="w-5 h-5" src="@/assets/trash-solid.svg">
							</button>
						</th>
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

		},
		initBForm(){
			this.wform = {
				start: '',
				end: '',
				position: '',
				time: 0
			}
		},
		add() {
			this.work_experience.push({
				start: this.transform(this.wform.start),
				end: this.transform(this.wform.end),
				position: this.wform.position,
				time: this.calculateYears(this.wform.start, this.wform.end)
			})
			this.initBForm()
		},
		del(index) {
			this.work_experience.splice(index, 1)
		},
		transform(date) {
			return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
		},
		calculateYears(start, end) {
			return end.getFullYear() - start.getFullYear();
		}
	}
}
</script>