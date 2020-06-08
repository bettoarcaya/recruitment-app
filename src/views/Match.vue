<template>
	<div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
		<div></div>
		<div class="container mx-auto border-b border-black-400">
			<h1 class="float-left font-bold text-2xl">{{ name }}</h1>
		</div>
		<div class="container mx-auto">
			<div class="card flex flex-col lg:flex margin-b-10" v-for="match in matches" :key="match.id">
				<div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
					<div class="flex flex-no-wrap">
						<div class="w-1/5 flex-none bg-teal-500 padd-10">
							<img
								class="rounded-full mx-auto" 
								src="../assets/default-user-icon.jpg" 
								:alt="match.personal_data.firstname"
							>
						</div>
						<div class="w-4/5 flex-none padd-20">
							<div class="margin-b-9-percent flex flex-col">
								<!--<p class="text-sm text-gray-600 flex items-center">
									<svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
										<path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
									</svg>
									Members only
								</p>-->
								<div class="text-gray-900 font-bold text-xl mb-2 text-left"> 
									{{match.personal_data.firstname}} {{match.personal_data.lastname}}
								</div>
								<div class="text-left">
									<p class="text-gray-700 text-base">
										{{match.percentage}}%
									</p>
								</div>
							</div>
							<div class="flex items-center">
								<!--<img class="w-10 h-10 rounded-full mr-4" src="../assets/logo.png" alt="Avatar of Jonathan Reinink">-->
								<div class="text-sm">
									<p class="text-gray-900 leading-none">{{match.personal_data.work_exp_catg}}</p>
									<p class="text-gray-600">{{match.personal_data.age}} Years</p>
								</div>
								<div class="container">
									<button
										class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 btn btn-green float-right"
									>
										Send invitation
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="inline-flex margin-b-10">
				<button 
					class="bg-white-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
					@click="prev"
					v-if="pagInfo.prev"
				>
					<img class="w-5 h-5" src="../assets/arrow-left-solid.svg" alt="Prev page">
				</button>
				<button 
					class="bg-white-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
					@click="next"
					v-if="pagInfo.next"
				>
					<img class="w-5 h-5" src="../assets/arrow-right-solid.svg" alt="Next page">
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Match',
	data(){
		return {
			name: 'Matches',
			matches: {},
			pagInfo: {},
			baseUrl: `${this.$baseUrl}/jobs/match/${this.$route.params.id}`
		}
	},
	mounted(){
		this.getRecords(this.baseUrl);
	},
	methods: {
		getRecords(resource){
			this.$http.get(resource)
					.then(response => {
						this.pagInfo = response.data.data.links
						this.matches = response.data.data.candidates
						console.log(this.matches)
					})
		},
		next(){
			this.getRecords(this.pagInfo.next)
		},
		prev(){
			this.getRecords(this.pagInfo.prev)
		}
	}

}
</script>