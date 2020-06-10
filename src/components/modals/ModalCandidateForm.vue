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
					<personal-data-form 
						:person.sync="form.person"
						:errors.sync="errors.person"
						v-if="step == 1"
					></personal-data-form>
					<background-data-form
						:background.sync="form.background"
						:errors.sync="errors.background"
						v-if="step == 2"
					></background-data-form>
					<work-experience-data-form 
						v-if="step == 3"
					></work-experience-data-form>
				</div>
				<div class="modal-footer">
					<div class="inline-flex">
						<button 
							class="btn btn-blue margin-l-5" 
							@click="prev"
							v-if="step != 1"
						>
							Back
						</button>
						<button 
							class="btn btn-blue margin-l-5" 
							@click="next"
							v-if="step != 3"
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
	mounted(){
		this.initForm()
	},
	data() {
		return {
			step: 1,
			steps: ['Personal data', 'Backgrounds', 'Work experiences'],
			form: {},
			errors: {},
			requires: {
				person: ['firstname', 'lastname', 'email']
			}
		}
	},
	methods: {
		initForm(){
			this.form = {
				person: {
					firstname: '',
					lastname: '',
					email: '',
					gender: 'none',
					born_date: '',
					work_exp_catg: '3'
				},
				background: [{
					name: '',
					academic_level: ''	
				}],
				work_experience: []
			}
			this.errors = {
				person: {},
				background: [],
				work_experience: []
			}
		},
		next(){
			this.step += 1
		},
		prev(){
			this.step -= 1
		}
	}

}
</script>