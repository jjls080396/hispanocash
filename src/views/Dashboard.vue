<template>

	<div id="hc_home" class="container-fluid">
        
        <section id="loading">
                    <div id="hc_loading" class="loading position-fixed h-100" v-if="data_load.show" >
            <div class="row loading__container d-flex justify-content-center align-items-center h-100">
                <div class="col-12 p-0">
                    <div class="row text-center p-0">
                        <div class="col-12 p-0 d-flex justify-content-center align-items-center">
                            <div style="max-width:150px;">
                                <img class="img-fluid" :src="load_gif2" alt=""/>
                            </div>
                        </div>
                        <div class="col-12 p-0">
                            <span class="hc--title-sm poppins-semibold text-white">
                                {{data_load.title}} 
                                <b-spinner class="mb-1 mr-2" style="width: .4rem; height: .4rem;" type="grow"></b-spinner>
                                <b-spinner class="mb-1 mr-2" style="width: .4rem; height: .4rem;" type="grow"></b-spinner>
                                <b-spinner class="mb-1 mr-1" style="width: .4rem; height: .4rem;" type="grow"></b-spinner>
                            </span>
                        </div>
                        <div class="col-12 p-0">
                            <span class="hc--description poppins-regular text-white">{{data_load.subtitle}}</span>
                        </div>
                        <div class="col-12 p-0" v-if="data_load.showButton">
                        <b-button variant="warning" @click="close()">Salir</b-button> 
                        </div>
                    </div>
                </div>            
            </div>
        </div>
        </section>
		<section id="section1" class="row d-flex p-0">
            <img :src="img_bg_green_cut" class="img-fluid d-none d-sm-flex">
            <img :src="img_bg_green" class="img-fluid d-flex d-sm-none">

            <div id="s1_target" class="container-fluid position-absolute w-100">
                <div class="row h-100">
                    <div class="col-12 d-flex justify-content-center align-items-end h-100 p-1 p-sm-3 p-xl-3">
                        
                        <div class="text-center">

                            <div class="row py-0 py-xl-4 d-none d-lg-flex">
                                <div class="col-12 d-flex justify-content-center align-items-end">
                                    <div style="max-width: 120px;">
                                        <img :src="gif_simb_white" class="img-fluid">    
                                    </div>
                                </div>
                            </div>

                            <div class="row d-flex justify-content-center align-items-end mb-1 mb-sm-1 mb-md-3">
                                <div class="col-12">
                                    <span class="hc--title poppins-regular text-white">
                                        Pago de <span class="poppins-bold">servicios</span>
                                    </span> 
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <section id="section2" class="row bg-light d-flex py-5">
            <div class="col-12 px-0 px-sm-1">
                <div class="">
                    <div class="row">
                        
                        <div class="col-12 col-md-12 mb-4 px-0 px-sm-1">
                            <div class="row">
                                <div class="col-12 py-3">
                                    <div class="py-1 text-right" style="">
                                        <button @click="logout()" class="btn btn-link text-decoration-none cursor-pointer p-0">
                                            <span class="hc--description-sm align-middle">
                                                Cerrar sesión
                                            </span>
                                            <div class="d-inline-block" style="max-width: 22px;">
                                                <img :src="s2_img2" class="img-fluid align-middle">
                                            </div>
                                        </button>
                                    </div>
                                    <div  class="py-1 text-right" style="">
                                        <button @click="redirect('history_payments')" class="btn btn-link text-decoration-none cursor-pointer p-0">
                                            <span class="hc--description-sm align-middle">
                                                Historial de pagos
                                            </span>
                                            <div class="d-inline-block" style="max-width: 24px;">
                                                <img :src="s2_img3" class="img-fluid align-middle">
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-12 col-md-6 mb-4 px-0 px-sm-1">
                            <div class="row">
                                <div class="col-6 py-3">
                                    <span class="hc--description">
                                        Bienvenido <span class="poppins-bold" v-if="data_session.data !== undefined">{{ data_session.data.full_name }}</span>
                                    </span>
                                </div>
                                <div class="col-6 py-3">
                                    <div style="max-width: 265px">
                                       <img :src="s3_img5" class="asd">    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 mb-4 px-0 px-sm-1">
                                    <div class="text-center" style="max-width: 940px;">
                                        <span class="hc--title poppins-regular text-black text-center">Otros Servicios</span>
                                            <ssr-carousel :slides-per-page="4" 
                                                    :responsive='[
                                                        {
                                                        maxWidth: 1400,
                                                        slidesPerPage: 3,
                                                        },
                                                        {
                                                        maxWidth: 1000,
                                                        slidesPerPage: 2,
                                                        },
                                                        {
                                                        maxWidth: 800,
                                                        slidesPerPage: 1,
                                                        },
                                                        {
                                                        maxWidth: 500,
                                                        slidesPerPage: 1,
                                                        },
                                                        {
                                                        maxWidth: 200,
                                                        slidesPerPage: 1,
                                                        },
                                                        {
                                                        maxWidth: 100,
                                                        slidesPerPage:1
                                                        }]' >
                                            
                                                <div class="slide" v-for="service in services" :key="service.id" @click="getPayServiceNew(service.id)">
                                                    <img :src="service.imagen" class="asd">
                                                </div>
                                            </ssr-carousel>
                                    </div>
                                </div>

                        

                        <div class="col-12 col-md-6 px-0 px-sm-1" v-if="!isService">
                            <div class="row d-flex justify-content-end align-items-center">
                                <div class="col-12 py-3">
                                    <span class="hc--description-sm">
                                        Número de referencia:
                                    </span>
                                    <input v-model="reference" type="" name="" class="input full-width">
                                </div>

                                <div class="col-12 d-flex justify-content-end align-items-start py-3">
                                    <button @click="validateReference()" class="btn btn-success">
                                        VALIDAR
                                    </button>
                                </div>

                                <div class="col-12 py-3">
                                    <span class="hc--description-sm">
                                        Monto a pagar (dólares):
                                    </span> <br>
                                    <div id="input_target_1" class="d-inline-block position-absolute" style="padding: 0px 10px;">
                                        <div class="d-flex justify-content-center align-items-center w-100 h-100">
                                            <span class="hc--description-sm">$</span>
                                        </div>
                                    </div>
                                    <input id="input_1" v-model="amount" type="" name="" class="input full-width" style="padding-left: 30px;">
                                    <p style="font-size: 12px;color: red;">Monto mínimo de $15 USD</p>
                                </div>
                            </div>

                        </div>

                        <div class="col-12 col-md-6 px-0 px-sm-1" v-if="isService">
                            <div class="row d-flex justify-content-end align-items-center">
                                <div class="col-12 py-3">
                                    <span class="hc--description-sm">
                                        Número de referencia:
                                    </span>
                                    <input v-model="reference_service" type="" name="" class="input full-width">
                                    <p style="font-size: 12px;color: red;">Asegura que tu servicio no se encuentre vencido. De lo contrario podría no verse efectuado el pago de tu servicio por los cargos extras aplicados.</p>
                                </div>
                                <div class="col-12 py-3">
                                    <span class="hc--description-sm">
                                        Monto a pagar:
                                    </span> <br>
                                    <div id="input_target_2" class="d-inline-block position-absolute" style="padding: 11px 10px;">
                                        <div class="d-flex justify-content-center align-items-center w-100 h-100">
                                            <span class="hc--description-sm">$</span>
                                        </div>
                                    </div>
                                    <input id="input_2" v-model="amount_service" type="" name="" class="input full-width" style="padding-left: 30px;">
                                    <p style="font-size: 12px;color: red;"> Pesos mexicanos</p>
                                </div>
                                <div class="col-12 d-flex justify-content-end align-items-start py-3">
                                    <button @click="validateInformation()" class="btn btn-success">
                                        PAGAR
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div class="col-12 col-md-6 all_transition" v-if="reference_payment_data !== null">
                            <div class="row h-100 w-100 border border-success hc--rounded py-3 mb-2">
                                <div class="col-12 text-center pb-2">
                                    <span class="hc--description poppins-bold">
                                        Nombre del Plan
                                    </span>
                                </div>

                                <div class="col-6 text-right pl-0 pr-2">
                                    <span class="hc--description-sm poppins-semibold">
                                        Número de referencia:
                                    </span>
                                </div>
                                <div class="col-6 text-left pl-1 pr-0">
                                    <span class="hc--description-sm poppins-light">
                                        {{this.reference}}
                                    </span>
                                </div>

                                <div class="col-6 text-right pl-0 pr-2">
                                    <span class="hc--description-sm poppins-semibold">
                                        Nombre del cliente:
                                    </span>
                                </div>
                                <div class="col-6 text-left pl-1 pr-0">
                                    <span class="hc--description-sm poppins-light">
                                        {{ reference_payment_data.cliente_nombre }}
                                    </span>
                                </div>

                                <div class="col-6 text-right pl-0 pr-2">
                                    <span class="hc--description-sm poppins-semibold">
                                        Número de contrato:
                                    </span>
                                </div>
                                <div class="col-6 text-left pl-1 pr-0">
                                    <span class="hc--description-sm poppins-light">
                                        {{ reference_payment_data.cliente_contrato }}
                                    </span>
                                </div>

                                <!-- <div class="col-6 text-right">
                                    <span class="hc--description-sm poppins-semibold">
                                        Importe en dólares:
                                    </span>
                                </div>
                                <div class="col-6 text-left">
                                    <span class="hc--description-sm poppins-light">
                                        $200
                                    </span>
                                </div> -->
                            </div>
                        </div>

                        <div class="col-12 d-flex justify-content-end all_transition_slow py-3" v-if="reference_payment_data !== null">
                            <button @click="paymentReference()" class="btn btn-success">
                                PROCEDE AL PAGO
                            </button>
                        </div>

                        <div class="col-12 d-flex justify-content-end all_transition_slow py-3" v-if="reference_payment_data !== null">
                            <div>
                                <div class="d-inline-block mr-4">
                                    <span class="hc--description-sm">
                                        ACEPTAMOS:
                                    </span>
                                </div>

                                <div class="d-inline-block" style="max-width: 150px;">
                                    <img :src="s2_img4" class="img-fluid align-middle">    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        

        <hc-modal 
            :showModal="show_modal" 
            @onClose="handleClose()" 
            maxWidth="1200">

            <div id="section_modal" class="hc--rounded-12">
                <img :src="img_bg_green" class="img-fluid hc--rounded-12">

                <div id="sm_target" class="container-fluid position-absolute w-100" style="top: 0px">
                    <div class="row h-100">
                        <div class="col-12 d-flex justify-content-center align-items-center h-100 p-0">
                            
                            <div class="text-center">

                                <div class="row d-none d-sm-flex py-0 py-md-4">
                                    <div class="col-12 d-flex justify-content-center align-items-center">
                                        <div style="max-width: 120px;">
                                            <img :src="sm_img1" class="img-fluid">    
                                        </div>
                                    </div>
                                </div>

                                <div class="row d-flex justify-content-center align-items-end mb-1 mb-sm-1 mb-md-3" v-if="modal_state === 'success'">
                                    <div class="col-12">
                                        <div class="mb-2">
                                            <span class="hc--title poppins-bold text-white">
                                                Pago exitoso
                                            </span>
                                        </div>
                                        <div class="mb-2">
                                            <span class="hc--description text-white">
                                                Su pago se ha realizado con éxito con el folio: <br class="d-none d-md-flex">
                                                <span class="hc--title poppins-bold text-black">
                                                    {{this.folio_payment}}
                                                </span>
                                            </span> 
                                        </div>
                                        <div class="mb-2">
                                            <button @click.stop="handleClose()" class="btn btn-outline-light">
                                                CERRAR
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <div class="row d-flex justify-content-center align-items-end mb-1 mb-sm-1 mb-md-3" v-if="modal_state === 'error'">
                                    <div class="col-12">
                                        <div class="mb-2">
                                            <span class="hc--title poppins-bold text-white">
                                                El pago no ha sido procesado
                                            </span>
                                        </div>
                                        <div class="mb-2">
                                            <span class="hc--description text-white">
                                                Por favor, intentelo más tarde
                                            </span> 
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </hc-modal>

        
</div>
</template>

<script>
    import _Store from '@/store'
    import { mapGetters } from 'vuex'
    // Components 
    import HcModal from '../components/hc-modal.vue'
    // Images
    import img_bg_green from '../assets/images/backgrounds/bg-green.png'
    import img_bg_green_cut from '../assets/images/backgrounds/bg-green-cut.png'
    import s2_img1 from '../assets/images/login/logo-pabs.png'
    import s2_img2 from '../assets/images/dashboard/cerrar-sesion.png'
    import s2_img3 from '../assets/images/dashboard/historial-pagos.png'
    import s2_img4 from '../assets/images/dashboard/tarjertas.png'

    import sm_img1 from '../assets/images/modal/pabs-logo-blanco.png'

	// Gifs
    import gif_simb_white from '../assets/gifs/simbolo-blanco.gif'    
    
	// jQuery
    import $ from 'jquery'
    var CONFIG = require('../page.config.js')
    
	export default {
		name: 'hc_dashboard',
        components: {
            'hc-modal': HcModal
        },
		data() {
			return {
                img_bg_green,
                img_bg_green_cut,
                gif_simb_white,
                s2_img1,
                s2_img2,
                s2_img3,
                s2_img4,
                sm_img1,
                currency: 'USD',
                reference: null,//'93002474785791',
                amount: null,
                contract: null,
                reference_payment_data: null,
                show_modal: false,
                modal_state: null,
                folio_payment:null,
                data_user: null,
                url_payment: null,
                //For Payment Services
                load_gif2:require('../assets/gifs/simbolo-blanco.gif'),
                s3_img5: require('../assets/images/paymentServices/section3/logo-programa.png'),
                current_service: null,
                nameService:null,
                isService:false,
                amount_service:null,
                check_status_payment_service:false,
                state_response:true,
                data_load:{
                    show: false,
                    title: 'Procesando pago',
                    subtitle: 'un momento...',
                    showButton: false,
                    stopTimer:false,
                    tiempo: 60000
                },
                idTimer:null,
                access_token:null,
                services: [
                            {
                                
                            "id":"1",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https:////cdn.pagomex.com//src//app//assets//img//carriers//cfe.png",
                            "Carrier": "CFE",
                            "Codigo": "CFE000",
                            "Min": "30",
                            "Max": "30"
                            },
                            {
                            "id":"2",
                            "descripcion":"Sabor chocolate delicioso",
                            "imagen":"https://cdn.worldvectorlogo.com/logos/total-play.svg",
                            "Carrier": "TotalPlay",
                            "Codigo": "TOT000",
                            "Min": "17",
                            "Max": "17"
                            },
                            {
                            "id":"3",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https://www.ranklogos.com/wp-content/uploads/2015/10/Telmex-Vector-Logo.png",
                            "Carrier": "Telmex",
                            "Codigo": "TMX001",
                            "Min": "10",
                            "Max": "10"
                            },
                            {
                            "id":"4",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https:////cdn.pagomex.com//src//app//assets//img//carriers//dish.png",
                            "Carrier": "Dish",
                            "Codigo": "DSH000",
                            "Min": "14",
                            "Max": "14"
                            },
                            {
                            "id":"5",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https://i0.wp.com/geniusitt.com/wp-content/uploads/2019/10/sky-logo.png?ssl=1",
                            "Carrier": "SKY",
                            "Codigo": "SKY000",
                            "Min": "12",
                            "Max": "12"
                            },
                            {
                            "id":"6",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https://logoeps.com/wp-content/uploads/2012/04/telcel-logo-vector-01.png"
                            },
                            {
                            "id":"7",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https://i0.wp.com/www.vectorizando.com/wp-content/uploads/2021/04/ATT-logo-4929257b.png?fit=512%2C512&ssl=1"
                            },
                            {
                            "id":"8",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https:////cdn.pagomex.com//src//app//assets//img//carriers//izzi.png",
                            "Carrier": "IZZI",
                            "Codigo": "IZZ000",
                            "Min": "8",
                            "Max": "8"
                            },
                            {
                            "id":"9",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https:////cdn.pagomex.com//src//app//assets//img//carriers//arabela.png",
                            "Carrier": "Arabela",
                            "Codigo": "ARA000",
                            "Min": "8",
                            "Max": "8"
                            },
                            {
                            "id":"10",
                        "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https:////cdn.pagomex.com//src//app//assets//img//carriers//avon.png",
                            "Carrier": "AVON",
                            "Codigo": "AVO000",
                            "Min": "20",
                            "Max": "20"
                            },
                            {
                            "id":"11",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0034/9257/Puedo_solicitar_un_credito_Infonavit_Beneficiarios_y_requisitos.png?1566914236",
                            "Carrier": "Infonavit",
                            "Codigo": "INF000",
                            "Min": "10",
                            "Max": "10"
                            },
                            {
                            "id":"12",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https://cdn.fing.io/images/isp/MX/logo/megacable_logo.png",
                            "Carrier": "Megacable",
                            "Codigo": "MEG000",
                            "Min": "10",
                            "Max": "10"
                            },
                            {
                            "id":"13",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https:////cdn.pagomex.com//src//app//assets//img//carriers//fuller.png",
                            "Carrier": "Fuller",
                            "Codigo": "FUL000",
                            "Min": "5",
                            "Max": "8"
                            },
                            {
                            "id":"14",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https:////cdn.pagomex.com//src//app//assets//img//carriers//jafra.png",
                            "Carrier": "Jafra",
                            "Codigo": "JAF000",
                            "Min": "9",
                            "Max": "10"
                            },
                            {
                            "id":"15",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https:////cdn.pagomex.com//src//app//assets//img//carriers//tupperware.png",
                            "Carrier": "Tupperware",
                            "Codigo": "TUP000",
                            "Min": "14",
                            "Max": "14"
                            },
                            {
                            "id":"16",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https://cdn.pagomex.com//src//app//assets//img//carriers//siapa.png",
                            "Carrier": "Agua de Guadalajara SIAPA",
                            "Codigo": "SIA000",
                            "Min": "22",
                            "Max": "22"
                            },
                            {
                            "id":"17",
                            "descripcion":"Sabor vainilla delicioso",
                            "imagen":"https://cdn.freebiesupply.com/logos/large/2x/axtel-logo-png-transparent.png",
                            "Carrier": "Axtel",
                            "Codigo": "AXT000",
                            "Min": "26",
                            "Max": "26"
                            }
                        ]
			}
		},
        computed: {
            ...mapGetters([
                'getSession',
                'getValidating',
                'getLoad'
            ]),

            current_route_name() {
                return this.$route.name;
            },
            data_session() {
                this.$forceUpdate()
                return this.getSession
            },
            validation_response(){
                //this.state_response = this.getValidating.response
                return this.getValidating
            }
        
        },
        methods: {
        redirect(name_route) {
                if(this.current_route_name !== name_route ) {
                    window.scrollTo(0, 0)

                    this.$router.push({
                        name: name_route
                    })
                }
        },

            async validateReference() {
                _Store.commit('setLoad', {
                    show: true,
                    title: 'Cargando',
                    subtitle: "Validando referencia"
                })

                fetch(`https://pay.pabsmr.org/oxxopay/referencias?referencia=${this.reference}&token_api=${CONFIG.server[CONFIG.env].validate_reference.token_api}`, {
                    method: 'POST',
                    //mode: 'no-cors',
                    headers: {
                        'Accept': 'application/json, text/plain, /',
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(async response => {
                    //console.log('Success:', response)

                    if(response === undefined) {
                        _Store.commit('setAlert', {
                            open: true,
                            message: 'Ha ocurrido un error intentelo más tarde',
                            variant: 'danger'
                        })
                    }
                    else if(response['cliente_contrato'] !== undefined) {
                        this.contract = response['cliente_contrato']
                        this.reference_payment_data = response
                    }
                    else if(response['result'] !== undefined) {
                        _Store.commit('setAlert', {
                            open: true,
                            message: response['result'],
                            variant: 'danger'
                        })
                    }
                    else if(response['detail'] !== undefined) {
                        if(response['detail'] == "Unauthorized") {
                            _Store.commit('setAlert', {
                                open: true,
                                message: 'La sesión ha expirado',
                                variant: 'danger'
                            })
                            console.log('llamda logout validateReference() DASHBORD.VUE')
                            this.logout()
                        }
                    }

                    // console.log('test')
                    _Store.commit('setLoad', {
                        show: false,
                    })
                })
            },

            async paymentReference() {

                if(this.amount == null || this.amount < 15 || isNaN(this.amount)) {
                    _Store.commit('setAlert', {
                        open: true,
                        message: 'Debes ingresar un monto a pagar válido. El monto mínimo es de $15 USD',
                        variant: 'danger',
                        timeout: 3500
                    })
                    return
                }

                _Store.commit('setLoad', {
                    show: true,
                    title: 'Cargando',
                    subtitle: "",
                })

                let session = JSON.parse(await _Store.dispatch('existSession'))

                //console.log(Number(this.amount) * 100)

                let body = {
                    name: `Abono a contrato ${this.contract}`
                }

                fetch(`${CONFIG.server[CONFIG.env].api}/payments/stripe/create-payment?currency=${this.currency}&amount=${Number(this.amount) * 100}&reference=${this.reference}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `BEARER ${session.access_token}`
                    },
                    body: JSON.stringify(body)
                }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(async response => {
                    console.log('Success: /payments/stripe/create-payment?currency ', response)

                    if(response['url_to_payment'] !== undefined) {
                        this.url_payment = response['url_to_payment']
                        
                        await _Store.dispatch('saveAuthorizationID', response['authorization_id'])
                        let session2 = JSON.parse(await _Store.dispatch('existSession'))
                        this.redirectToPage(this.url_payment)
                        console.log("Valor de la sesion despues de abrir stripe: ", session2)
                        //this.redirect('we_are')
                    }
                    else if(response['detail'] !== undefined) {
                        if(response['detail'] == "Unauthorized") {
                            _Store.commit('setAlert', {
                                open: true,
                                message: 'La sesión ha expirado',
                                variant: 'danger'
                            })
                            console.log('llamda logout paymentReference DASHBORD.VUE')
                            this.logout()
                        }
                    }

                    _Store.commit('setLoad', {
                        show: false,
                    })
                })

            },

            redirectToPage(url, target = "_blank") {
                if(target == "_blank") {
                    window.open(url, '_blank')
                }
                else {
                    window.location.replace(url)
                }
            },

            async logout() {
                await _Store.dispatch('deleteSession')
                
                this.redirect('login')
            },

            openModal() {
                this.show_modal = true
                
                for(let time = 0; time < 2000; time = time + 100) {
                    setTimeout(function() { 
                        $(window).trigger('resize')
                    }, time)
                }
            },
            handleClose() {
                this.show_modal = false
            },
            async checkStatusPayment() {
                _Store.commit('setLoad', {
                    show: true,
                    title: 'Cargando',
                    subtitle: "Validando estado del pago",
                })
                
                let session = JSON.parse(await _Store.dispatch('existSession'))
                this.access_token = session.access_token
                console.log("Sesion obtenida al cargar la pagina desde stripe : ",session)

                console.log("Obtenemos authorization_id ? : ",session.authorization_id)

                fetch(`${CONFIG.server[CONFIG.env].api}/payments/stripe/capture-order?authorization_id=${session.authorization_id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `BEARER ${session.access_token}`
                    }
                }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(async response => {
                    console.log('Success: /payments/stripe/capture-order?', response)

                    if(response['payment_status'] !== undefined) {
                        //this.modal_state = 'error'
                        if(response['status'] == 'complete' && response['payment_status'] == 'paid') {
                            this.modal_state = 'success'
                            this.folio_payment = response['folio']
                        }
                        else {
                            this.modal_state = 'error'
                        }
                        this.show_modal = true
                    }
                    else if(response['detail'] !== undefined) {
                        if(response['detail'] == "Unauthorized") {
                            _Store.commit('setAlert', {
                                open: true,
                                message: 'La sesión ha expirado',
                                variant: 'danger'
                            })
                            console.log('llamda logout checkStatusPayment Dashboard.vue')
                            this.logout()
                        }
                    }

                    _Store.commit('setLoad', {
                        show: false,
                    })
                })
            },
            async validateInformation(){
                const search = this.services.filter(service => service.id === this.current_service)

                if(this.amount_service == null || this.amount_service < 10 || this.amount_service > 5000) {
                    _Store.commit('setAlert', {
                        open: true,
                        message: 'Debes ingresar un monto a pagar valido. El monto mínimo es de $10 y el monto máximo es de $5000',
                        variant: 'danger'
                    })
                    return
                }else if(this.reference_service == null) {
                    _Store.commit('setAlert', {
                        open: true,
                        message: 'Debes ingresar una referencia para proceder al pago',
                        variant: 'danger'
                    })
                    return
                }else if(search[0].Min < this.reference_service.length || search[0].Max > this.reference_service.length ){
                    _Store.commit('setAlert',{
                        open: true,
                        message: `La referencia para el servicio ${search[0].Carrier} debe tener un mínimo de ${search[0].Min} caracteres o un máximo de ${search[0].Max} caracteres. Favor de validar la referencia.`,
                        variant: 'danger',
                        timeout: 3000
                    })
                    return
                } else {

                    // _Store.commit('setLoad', {
                    //     show: true,
                    //     title: 'Cargando',
                    //     subtitle: "",
                    // })
                    let session = JSON.parse(await _Store.dispatch('existSession'))
                    let body = {
                        name: search[0].Carrier
                    }

                    fetch(`${CONFIG.server[CONFIG.env].api}/payments/stripe/create-payment-mx?currency=${this.currency}&amount=${Number(this.amount_service)*100}&reference=${this.reference_service}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `BEARER ${session.access_token}`
                    },
                    body: JSON.stringify(body)
                    }).then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(async response => {
                    //console.log('Success:', response)

                    if(response['url_to_payment'] !== undefined) {
                        this.url_payment = response['url_to_payment']
                        await _Store.dispatch('saveAuthorizationID', response['authorization_id'])
                        let payment = {
                            service: search[0].Carrier,
                            code_service: search[0].Codigo,
                            amount: this.amount_service,
                            reference : this.reference_service
                        }
                        await _Store.dispatch('saveDataPayment',payment)
                        this.redirectToPage(this.url_payment)
                    }
                    else if(response['detail'] !== undefined) {
                        if(response['detail'] == "Unauthorized") {
                            _Store.commit('setAlert', {
                                open: true,
                                message: 'La sesión ha expirado',
                                variant: 'danger'
                            })

                            this.logout()
                        }
                    }

                    _Store.commit('setLoad', {
                        show: false,
                    })
                })

                 } 
                              
            },
            getPayServiceNew(idServicio){
                const search = this.services.filter(service => service.id === idServicio)
                this.current_service = idServicio
                this.s3_img5 = search[0].imagen
                this.nameService = search[0].Carrier
                this.reference_service = null 
                this.amount_service = null 
                this.isService = true
                _Store.commit('setValidatingResponse',{response: true })
                
            },
            async registerPaymentService() {
                this.data_load.show  = true
                this.data_load.title = 'Pago procesado correctamente. Esperando ser autorizado'
                this.data_load.showButton = true
                 let session = JSON.parse(await _Store.dispatch('existSession'))
                fetch(`${CONFIG.server[CONFIG.env].api}/payments/stripe/capture-order?authorization_id=${session.authorization_id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `BEARER ${session.access_token}`
                    }
                }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(async response => {

                    if(response['payment_status'] !== undefined) {
                        if(response['status'] == 'complete' && response['payment_status'] == 'paid') {
                            this.modal_state = 'success'
                            this.folio_payment = response['folio']
                            //Ejecutar request para registrar el pagos
                            this.payService(session.carrier_service,session.reference_service,session.amount_service,session.service)//Create payment in taecel and check status 
                        }
                        else {
                            this.modal_state = 'error'
                        }
                        
                    }
                    else if(response['detail'] !== undefined) {
                        if(response['detail'] == "Unauthorized") {
                            _Store.commit('setAlert', {
                                open: true,
                                message: 'La sesión ha expirado',
                                variant: 'danger'
                            })
                            console.log('llamda logout checkStatusPayment Dashboard.vue')
                            this.logout()
                        }
                    }

                    _Store.commit('setLoad', {
                        show: false,
                    })
                })

            },
             async payService(code,reference,amount_service,service) {
                 let session = JSON.parse(await _Store.dispatch('existSession'))
                 var params = {
                    'key': `${CONFIG.server[CONFIG.env].get_services.api_key}`,
                    'nip': `${CONFIG.server[CONFIG.env].get_services.api_nip}`,
                    'producto': code,
                    'referencia': reference,
                    'monto': amount_service
                }
                // console.log(params)
                fetch(`${CONFIG.server[CONFIG.env].get_services.url_taecel}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: this.encodeParams(params)
                    })
                    .then(res => res.json() )
                    .catch(err => { console.error(err) })
                    .then(async response => {

                        if(response['success'] == false  ) {
                            this.data_load.show  = false
                            _Store.commit('setAlert', {
                                open: true,
                                message: response['message'],
                                variant: 'danger'
                            })
                            
                        //Store error
                        fetch(`${CONFIG.server[CONFIG.env].api}/taecel/register`,{
                            method: 'POST',
                            headers:{
                                'Content-Type': 'application/json'
                            },
                            body: {
                                "transId": "",
                                "amount": amount_service,
                                "date": this.currentDateTime(),
                                "username": session.data.full_name,
                                "service": service,
                                "message": response['message'],
                                "status": "2",
                                "reference": reference
                            }
                        })
                        .then(res => res.json())
                        .catch(err => { console.error(err) })
                        .then(async response => {
                            console.log('ACTUALIZACION DE TRANSACTION',response)
                        })

                        } else if(response['success'] == true){
                                var params1 = {
                                'key': `${CONFIG.server[CONFIG.env].get_services.api_key}`,
                                'nip': `${CONFIG.server[CONFIG.env].get_services.api_nip}`,
                                'transID': response['data'].transID,
                                }
                                this.data_load.title = 'Pago procesado correctamente. Esperando ser autorizado'
                                this.data_load.showButton = true
                                
                                /*insert trans id of taecel in transaction hispanocash */
                                fetch(`${CONFIG.server[CONFIG.env].api}/transactions/update-transaction-field?folio=${this.folio_payment}&field=trans_id_taecel&value=${response['data'].transID}`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'authorization': `BEARER ${session.access_token}`
                                    }
                                }).then(res => res.json())
                                .catch(error => console.error('Error:', error))
                                .then( response => { console.log(response)
                                    
                                })
                                /* 
                                //     Call function to check status pay from taecel and update status in hispanocash
                                // */
                                 this.idTimer = setInterval(this.checkStatusPay,5000,this.encodeParams(params1))
                        }
                   })
            },
            checkStatusPay:function(elem) {
                
                if(_Store.state.validating.response){ /* check status global of vlidating. response in localstorage*/
                    fetch(`${CONFIG.server[CONFIG.env].get_services.url_taecel_status}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            body: elem
                            })
                            .then(response => response.json())
                            .then(response => {
                                if(response['success'] === true){
                                    if(response['data'].Status == 'Exitosa'){
                                        _Store.commit('setValidatingResponse',{
                                        response: false                 
                                        })
                                        //update status of pay from services by folio
                                        
                                        fetch(`${CONFIG.server[CONFIG.env].api}/transactions/update-transaction-field?folio=${this.folio_payment}&field=status_taecel&value=success`, {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'authorization': `BEARER ${this.access_token}`
                                            }
                                        }).then(res => res.json())
                                        .catch(error => console.error('Error:', error))
                                        .then( response => { console.log(response)})

                                        this.data_load.show  = false //close modal of pay pending
                                        this.show_modal = true // show modal with folio success
                                    }
                                }
                            })
                }else{
                    clearInterval(this.idTimer)
                    console.log('Pago procesado.....','Salir del proceso checkStatusPay')
                } 
                
            },
            close(){
                this.data_load.show = false
                this.state_response = false
                _Store.commit('setValidatingResponse',{
                    response: false
                                    
                })
            },
            encodeParams(params){
                var formBody = []
                for (var property in params) {
                var encodedKey = encodeURIComponent(property)
                var encodedValue = encodeURIComponent(params[property])
                formBody.push(encodedKey + "=" + encodedValue)
                }
                formBody = formBody.join("&")
                return formBody
            },
            currentDateTime() {
            const current = new Date();
            const date = current.getFullYear()+'-'+( current.getMonth()+1).toString().padStart(2,'0')+'-'+current.getDate().toString().padStart(2,'0');
            const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            const dateTime = date +' '+ time;

            return dateTime;
            },
        },
      
        async created() {
            $(window).resize(function() {
                let s1_height = $('#section1').height()
                $("#s1_target").css("height", s1_height)

                let input_1_height = $('#input_1').height()
                $("#input_target_1").css("height", input_1_height + 21)

                let sm_height = $('#section_modal').height()
                $("#sm_target").css("height", sm_height)
            })
            //console.log(this.$route.params.make_payment)
            if(this.$route.params.make_payment) {
                this.checkStatusPayment()
            }
            if(this.$route.params.make_payment_service){//create payment in TAECEL
                this.registerPaymentService();
            }
           

            _Store.commit('setLoad', {
                show: true,
                title: 'Cargando',
                subtitle: "Cargando información...",
            })

            let session = JSON.parse(await _Store.dispatch('existSession'))

            fetch(`${CONFIG.server[CONFIG.env].api}/users/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `BEARER ${session.access_token}`
                }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(async response => {
                console.log('Success: /users/me', response)

                if(response['_id'] !== undefined) {
                    this.data_user = response
                    await _Store.dispatch('updateSession', this.data_user)
                    // this.$forceUpdate()
                    console.log('updateSession')
                }
                else if(response['detail'] !== undefined) {
                    if(response['detail'] == "Unauthorized") {
                        _Store.commit('setAlert', {
                            open: true,
                            message: 'La sesión ha expirado',
                            variant: 'danger'
                        })

                        console.log('llamda logout created DASHBORD.VUE')
                        this.logout()
                    }
                }

                _Store.commit('setLoad', {
                    show: false,
                })
            })

        },

        mounted() {
            for(let time = 0; time < 2000; time = time + 100) {
                setTimeout(function() { 
                    $(window).trigger('resize')
                }, time)
            }
        }
	}
</script>

<style lang="scss" scoped>

	.loading {
        width: 100%;
        justify-content: center;
        align-items: center;
        background-color: #000000bb;
        z-index: 9999;

        &__container {
            width: 100%;
            z-index: 10000;
        }
    }
</style>
