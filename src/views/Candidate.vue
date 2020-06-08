<template>
	<div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
		<div></div>
		<div class="container mx-auto border-b border-black-400">
			<h1 class="float-left font-bold text-2xl">{{ name }}</h1>
			<button class="btn btn-blue float-right">
				Add new candidate
			</button>
		</div>
		<div class="flex mb-4 container mx-auto">
			<div 
				class="w-1/3"
				v-for="candidate in candidates"
				:key="candidate.id"
			>
				<div class="max-w-sm rounded overflow-hidden shadow-lg">
					<div class="bg-teal-500 padd-20">
						<img 
							class="half-size rounded-full mx-auto" 
							src="../assets/default-user-icon.jpg" 
							:alt="candidate.personal_data.firstname"
						>
					</div>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2"> {{candidate.personal_data.firstname}} {{candidate.personal_data.lastname}} </div>
						<!--<p class="text-gray-700 text-base">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
						</p>-->
						<div class="flex mb-4">
							<div class="w-1/4 text-left">
								<p>Age: </p>
								<p>Email: </p>
								<p>Profile: </p>
							</div>
							<div class="w-3/4 text-left">
								<p>{{candidate.personal_data.age}}</p>
								<p>{{candidate.personal_data.email}}</p>
								<p>{{candidate.personal_data.work_exp_catg}}</p>
							</div>
						</div>
					</div>
					<!--<div class="px-6 py-4">
						<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
						<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
						<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
					</div>-->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Candidate',
	mounted(){
		this.getRecords();
	},
	data(){
		return {
			name: 'Candidate list',
			baseUrl: `${this.$baseUrl}`,
			candidates: {}
		}
	},
	methods: {
		getRecords(){
			this.$http.get(`${this.baseUrl}/registration`)
					.then(response => {
						this.candidates = response.data.data.candidates
					})
		}
	}
}
</script>