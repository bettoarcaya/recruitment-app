<template>
  <transition name="modal">
		<div class="modal-mask">
			<div class="modal-content">
				<div class="modal-header">
					<a href="javascript:void(0)" @click="$emit('close')">
						<span class="close float-right">&times;</span>
					</a>
					<h2 class="text-left font-bold text-xl">Add new candidate</h2>
				</div>
				<div class="modal-body">
					<h2 class="text-center font-bold text-sm">Personal data</h2>
				</div>
				<div class="modal-footer">
				</div>
			</div>
		</div>
  </transition>
</template>

<script>
export default {

}
</script>