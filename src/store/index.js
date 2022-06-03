import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		lang: 'es',
		alert: {
			open: false,
			message: 'Error',
			variant: 'danger',
			color_text: 'white',
			timeout: null,
		},
		loading: {
			show: false,
			title: 'Cargando',
			subtitle: 'un momento...',
			stopTimer:false,
			tiempo: null
		},
		validating:{
			response: true
		}
	},
	getters: {
		getLang: state => {
			//console.log(localStorage.getItem('HISPANO@language'))
			return state.language
		},
		getSession: state => {
			console.log(state)
			let sesion = localStorage.getItem('HISPANO@session')
			sesion = JSON.parse(sesion)

			return sesion
		},
		getAlert: (state) => {
			return state.alert
		},
		getLoad: (state) => {
			return state.loading
		},
		getValidating: (state) => {
			return state.validating
		}
	},
	mutations: {
		setLang: (state, new_lang) => {
			localStorage.setItem('HISPANO@language', JSON.stringify(new_lang))
			state.lang = new_lang
			//i18n.locale = new_lang
		},
		setSession: (state, new_data) => {
			localStorage.setItem('HISPANO@session', JSON.stringify(new_data))
		},
		setDataSession: (state, new_data) => {
			let current_sesion = localStorage.getItem('HISPANO@session')
			current_sesion = JSON.parse(current_sesion)
			
			current_sesion.data = new_data
			localStorage.setItem('HISPANO@session', JSON.stringify(current_sesion))
		},
		setReferencePaymentData: (state, new_data) => {
			let current_sesion = localStorage.getItem('HISPANO@session')
			current_sesion = JSON.parse(current_sesion)
			
			current_sesion.payment_data = new_data
			localStorage.setItem('HISPANO@session', JSON.stringify(current_sesion))
		},
		setAuthorizationID: (state, new_authorization_id) => {
			let current_sesion = localStorage.getItem('HISPANO@session')
			current_sesion = JSON.parse(current_sesion)
			
			current_sesion.authorization_id = new_authorization_id
			console.log(current_sesion, 'current_sesion with auth')
			localStorage.setItem('HISPANO@session', JSON.stringify(current_sesion))
		},
		setAlert: (state, new_alert) => {
			state.alert.open = new_alert.open
			state.alert.message = (new_alert.message !== undefined) ? new_alert.message : ''
			state.alert.variant = (new_alert.variant !== undefined) ? new_alert.variant : 'success'
			state.alert.color_text = (new_alert.color_text !== undefined) ? new_alert.color_text : 'white'
			state.alert.timeout = (new_alert.timeout !== undefined) ? new_alert.timeout : 2000

			if(state.alert.timeout !== null) {
				setTimeout(() => {
					state.alert.open = false
				}, state.alert.timeout)
			}
		},
		setLoad: (state, new_load) => {
			state.loading.show = new_load.show
			state.loading.title = (new_load.title !== undefined) ? new_load.title : ''
			state.loading.subtitle = (new_load.subtitle !== undefined) ? new_load.subtitle : ''
			state.loading.timeout = (new_load.timeout !== undefined) ? new_load.timeout : 2000

			if(state.loading.timeout !== null) {
				setTimeout(() => {
					state.loading.show = false
				}, state.loading.timeout)
			}
		},
		setValidatingResponse: (state,data) => {
			state.validating.response = data.response
		},
		setDataPayment: (state, new_data) => {
			let current_sesion = localStorage.getItem('HISPANO@session')
			current_sesion = JSON.parse(current_sesion)
			
			current_sesion.amount_service = new_data.amount
			current_sesion.reference_service = new_data.reference
			current_sesion.name_service = new_data.service
			current_sesion.carrier_service = new_data.code_service
			localStorage.setItem('HISPANO@session', JSON.stringify(current_sesion))
		}
	},
	actions: {
		changeLang: ({commit}, language) => {
			//console.log(language, 'language')
			commit('setLang', language)
		},
		getLang: () => {
			//console.log(localStorage.getItem('HISPANO@language'))
			return localStorage.getItem('HISPANO@language')
		},
		createSession: ({commit}, session_data) => {
			//console.log(session_data, 'session_data')
			commit('setSession', session_data)
		},
		existSession: () => {
			//console.log(localStorage.getItem('HISPANO@session'))
			return localStorage.getItem('HISPANO@session')
		},
		sessionPABS: () => {
			//console.log(localStorage.getItem('HISPANO@session'))
			return localStorage.getItem('SISTEMAS@PABS')
		},
		deleteSession: () => {
			//console.log(localStorage.getItem('HISPANO@session'))
			localStorage.setItem('HISPANO@session', null)
		},
		updateSession: ({commit}, session_data) => {
			// console.log(session_data, 'updateSession')
			commit('setDataSession', session_data)
		},
		updateReferencePaymentData: ({commit}, reference_payment_data) => {
			console.log(reference_payment_data, 'setReferencePaymentData')
			commit('setReferencePaymentData', reference_payment_data)
		},
		saveAuthorizationID: ({commit}, authorization_id) => {
			console.log('guarda authorization_id',authorization_id)
			commit('setAuthorizationID', authorization_id)
		},
		saveDataPayment: ({commit}, payment) => {
			commit('setDataPayment', payment)
		}
	},
	modules: {
	}
})
