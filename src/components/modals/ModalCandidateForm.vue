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
						:bform="backgroundForm"
						:background.sync="form.background"
						:errors.sync="errors.background"
						v-if="step == 2"
					></background-data-form>
					<work-experience-data-form
						:wform="workExperienceForm"
						:work_experience.sync="form.work_experience"
						:errors.sync="errors.work_experience"
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
						<button 
							class="btn btn-teal margin-l-5" 
							@click="submit"
							v-if="step == 3"
						>
							Submit
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
			baseUrl: `${this.$baseUrl}`,
			step: 1,
			steps: ['person'],
			form: {},
			errors: {},
			backgroundForm: {},
			workExperienceForm: {},
			requires: {
				person: ['firstname', 'lastname', 'email', 'born_date']
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
				background: [],
				work_experience: [],
			}
			this.errors = {
				person: {
					firstname: [],
					lastname: [],
					email: [],
					born_date: []
				},
				background: [],
				work_experience: []
			}
			this.backgroundForm = {
				name: '',
				academic_level: ''	
			}
			this.workExperienceForm = {
				start: '',
				end: '',
				position: '',
				time: 0
			}
		},
		next(){
			if( this.validateStep() ) {
				this.step += 1
			}
		},
		prev(){
			this.step -= 1
		},
		submit(){
			console.log(this.form)
			this.$http.post(`${this.baseUrl}/registration`, this.form)
					.then(response => {
						this.$notify({
								type: 'success',
								title: 'well done',
								text: response.data.message
							});
							this.initForm();
					})
					.catch(error => {
						this.$notify({
								type: 'error',
								title: 'Something is bad',
								text: ''
							});
					})
		},
		validateStep() {
			const st = this.steps[this.step - 1]
			const rqs = this.requires[st] ? this.requires[st] : []
			let flag = true

			rqs.map(rq => {
				if( this.form[st][rq] == '' ) {
					flag = false
					this.errors[st][rq].push('This field is required')
				}
			})

			return flag;
		}
	}

}
</script>