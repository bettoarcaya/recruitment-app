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
			<div class="w-1/3">
				<div class="max-w-sm rounded overflow-hidden shadow-lg">
					<img class="w-full" src="../assets/logo.png" alt="Sunset in the mountains">
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
						<p class="text-gray-700 text-base">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
						</p>
					</div>
					<div class="px-6 py-4">
						<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
						<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
						<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
					</div>
				</div>
			</div>
			<!--<div class="w-1/3 bg-gray-500 h-12"></div>
			<div class="w-1/3 bg-gray-400 h-12"></div>-->
		</div>
	</div>
</template>

<script>
export default {
	name: 'Candidate',
	data(){
		return {
			name: 'Candidate list'
		}
	}
}
</script>