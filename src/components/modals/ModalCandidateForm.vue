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
					<personal-data-form v-if="step == 1"></personal-data-form>
					<background-data-form v-if="step == 2"></background-data-form>
					<work-experience-data-form v-if="step == 3"></work-experience-data-form>
				</div>
				<div class="modal-footer">
					<div class="inline-flex">
						<button class="btn btn-blue" @click="$emit('close')">
							Cancel
						</button>
						<button 
							class="btn btn-blue margin-l-5" 
							@click="next"
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
  </transition>
</template>

<script>
import PersonalDataForm from '@/components/candidate/PersonalDataForm.vue';
import BackgroundDataForm from '@/components/candidate/BackgroundDataForm.vue';
import WorkExperienceDataForm from '@/components/candidate/WorkExperienceDataForm.vue';

export default {
	components: {
		PersonalDataForm,
		BackgroundDataForm,
		WorkExperienceDataForm
	},
	data() {
		return {
			step: 1,
			steps: ['Personal data', 'Backgrounds', 'Work experiences']
		}
	}

}
</script>