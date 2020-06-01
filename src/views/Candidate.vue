<template>
	<div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
		<div></div>
		<div class="container mx-auto border-b border-black-400">
			<h1 class="float-left font-bold text-2xl">{{ name }}</h1>
			<button class="btn btn-blue float-right">
				Add new candidate
			</button>
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