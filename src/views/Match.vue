<template>
	<div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
		<div></div>
		<div class="container mx-auto border-b border-black-400">
			<h1 class="float-left font-bold text-2xl">{{ name }}</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Match',
	data(){
		return {
			name: 'Matches'
		}
	}
}
</script>