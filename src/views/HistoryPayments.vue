<template>
	<div id="hc_home" class="container-fluid">
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

        <section id="section2" class="row bg-light d-flex pt-3 pb-5 ">
            <div class="col-12 px-0 px-sm-1">
                <div class="container">
                    <div class="row">

                        <div class="col-12 px-0 px-sm-1 text-left">
                            <button @click="redirect('dashboard')" class="btn btn-link text-decoration-none cursor-pointer">
                                <b-icon icon="arrow-left" aria-hidden="true" font-scale="1.2" style="color: #28a745"></b-icon>
                                <span class="hc--description-sm poppins-regular align-middle">
                                    Atras
                                </span>
                            </button>
                        </div>
                        
                        <div class="col-12 col-md-6 mb-4  px-0 px-sm-1">
                            <div class="row">
                                <div class="col-12 py-3">
                                    <span class="hc--description" >
                                        Bienvenido <span class="poppins-bold" v-if="data_session.data !== undefined">{{ data_session.data.full_name }}</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 mb-4  px-0 px-sm-1">
                            <div class="row">
                                <div class="col-12 py-3">
                                    <div class="py-1 text-right" style="max-width: 450px; margin-right: -4px">

                                        <button @click="logout()" class="btn btn-link text-decoration-none cursor-pointer p-0">
                                            <span class="hc--description-sm align-middle">
                                                Cerrar sesión
                                            </span>
                                            <div class="d-inline-block" style="max-width: 22px;">
                                                <img :src="s2_img2" class="img-fluid align-middle">
                                            </div>
                                        </button>
                                        
                                    </div>
                                    <!-- <div @click="redirect('history_payments')" class="py-1 text-right cursor-pointer" style="max-width: 400px;">
                                        <span class="hc--description-sm align-middle">
                                            Historial de pagos
                                        </span>
                                        <div class="d-inline-block" style="max-width: 24px;">
                                            <img :src="s2_img3" class="img-fluid align-middle">
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-12 px-0 px-sm-1">
                            <div class="row d-flex justify-content-end align-items-center">
                                <div class="col-12 text-center py-3 px-0">
                                    <span class="hc--title-sm poppins-bold">
                                        Historial de pagos PABS
                                    </span>
                                </div>

                                <div class="table-responsive col-12 py-3 px-0">
                                    <table class="table bg-white hc--rounded-12">
                                        <thead>
                                            <tr class="text-center">
                                                <th class="py-4" scope="col">NO. DE REFERENCIA</th>
                                                <th class="py-4" scope="col">CONTRATO</th>
                                                <th class="py-4" scope="col">MONTO (DÓLARES)</th>
                                                <th class="py-4" scope="col">MONTO (PESOS MEXICANOS)</th>
                                                <th class="py-4" scope="col">FECHA DE PAGO</th>
                                                <th class="py-4" scope="col">MÉTODO DE PAGO</th>
                                                <th class="py-4" scope="col">FOLIO</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr class="text-center" v-for="(row) in data_table"  :key="row.transaction_id" >
                                                <th scope="row" class="align-middle" v-if="row.status == 'COMPLETED'">
                                                    {{ (row.reference_id) ? row.reference_id : '-' }}
                                                </th>
                                                <td class="align-middle" v-if="row.status == 'COMPLETED'">
                                                    {{ row.soft_descriptor.replace('Abono a contrato ','') }}
                                                </td>
                                                <td class="align-middle" v-if="row.status == 'COMPLETED'">
                                                    ${{ row.amount_value }}
                                                </td>
                                                <td class="align-middle" v-if="row.status == 'COMPLETED'">
                                                    ${{ row.amount_value_mx.toFixed(2) }}
                                                </td>
                                                <td class="align-middle" v-if="row.status == 'COMPLETED'">
                                                    {{ row.create_time }}
                                                </td>
                                                <td class="align-middle" v-if="row.status == 'COMPLETED'">
                                                    {{ row.payment_platform }}
                                                </td>
                                                <td class="align-middle" v-if="row.status == 'COMPLETED'">
                                                    {{ row.folio.toString().padStart(8, '0') }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="row d-flex justify-content-end align-items-center">
                                <div class="col-12 text-center py-3 px-0">
                                    <span class="hc--title-sm poppins-bold">
                                        Historial de pagos de servicios
                                    </span>
                                </div>

                                <div class="table-responsive col-12 py-3 px-0">
                                    <table class="table bg-white hc--rounded-12">
                                        <thead>
                                            <tr class="text-center">
                                                <th class="py-4" scope="col">SERVICIO</th>
                                                <th class="py-4" scope="col">NO. REFERECNIA</th>
                                                <th class="py-4" scope="col">MONTO(PESOS MEXICANOS)</th>
                                                <th class="py-4" scope="col">MONTO(DOLARES)</th>
                                                <th class="py-4" scope="col">FECHA DE PAGO</th>
                                                <th class="py-4" scope="col">MÉTODO DE PAGO</th>
                                                <th class="py-4" scope="col">FOLIO</th>
                                                <th class="py-4" style="width:200px" scope="col">ESTATUS PAGO</th>
                                                <th class="py-4" scope="col">ACCIONES</th>
                                                
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr class="text-center" v-for="(row, index_row) in data_table_services" :key="index_row" >
                                                <template v-if="row.payment_concept == 'services' &  row.status_taecel === 'pending' ">
                                                    <th scope="row" class="align-middle" >
                                                        {{ row.soft_descriptor }}
                                                    </th>
                                                    <td class="align-middle" >
                                                        {{ row.reference_id }}
                                                    </td>
                                                    <td class="align-middle" >
                                                        ${{ row.amount_value_mx.toFixed(2) }}
                                                    </td>
                                                    <td class="align-middle" >
                                                        ${{ row.amount_value }}
                                                    </td>
                                                    <td class="align-middle" >
                                                        {{ row.create_time }}
                                                    </td>
                                                    <td class="align-middle" >
                                                        {{ row.payment_platform }}
                                                    </td>
                                                    <td class="align-middle" >
                                                        {{ row.folio }}
                                                    </td>
                                                    <td class="" >

                                                        <b class="d-flex justify-content-between align-items-center">
                                                            Pendiente
                                                        <b-icon icon="exclamation-triangle-fill" scale="1.2" variant="warning"></b-icon>
                                                        
                                                        </b>
                                                    </td>
                                                    <td class="align-middle" >
                                                        <button class="btn btn-primary" v-on:click="getStatusPay(row.trans_id_taecel,row.folio)">CONSULTAR</button>
                                                    </td>
                                                </template>
                                                <template v-else-if="row.payment_concept == 'services' &  row.status_taecel === 'success'">
                                                    <th scope="row" class="align-middle" >
                                                        {{ row.soft_descriptor }}
                                                    </th>
                                                    <td class="align-middle" >
                                                        {{ row.reference_id }}
                                                    </td>
                                                    <td class="align-middle" >
                                                        ${{ row.amount_value_mx.toFixed(2) }}
                                                    </td>
                                                    <td class="align-middle" >
                                                        ${{ row.amount_value }}
                                                    </td>
                                                    <td class="align-middle" >
                                                        {{ row.create_time }}
                                                    </td>
                                                    <td class="align-middle" >
                                                        {{ row.payment_platform }}
                                                    </td>
                                                    <td class="align-middle" >
                                                        {{ row.folio }}
                                                    </td>
                                                    <td class="" >
                                                        
                                                        <b class="d-flex justify-content-between align-items-center">
                                                            Exitoso
                                                        <b-icon icon="check-square" scale="1.2" variant="success"></b-icon>
                                                        </b>
                                                       
                                                    </td>   
                                                    <td class="align-middle" >
                                                        <button class="btn btn-primary" disabled >CONSULTAR</button>
                                                    </td>   
                                                </template>
                                                

                                                
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                                <div class="col-12 d-flex justify-content-end align-items-start py-3">
                                    <button @click="redirect('dashboard')" class="btn btn-success">
                                        REGRESAR
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>    
</div>
</template>

<script>
    import _Store from '@/store'
    import { mapGetters } from 'vuex'
    // Images
    import img_bg_green from '../assets/images/backgrounds/bg-green.png'
    import img_bg_green_cut from '../assets/images/backgrounds/bg-green-cut.png'
    import s2_img1 from '../assets/images/login/logo-pabs.png'
    import s2_img2 from '../assets/images/dashboard/cerrar-sesion.png'
    import s2_img3 from '../assets/images/dashboard/historial-pagos.png'
    import s2_img4 from '../assets/images/dashboard/paypal-logo.png'
	// Gifs
    import gif_simb_white from '../assets/gifs/simbolo-blanco.gif'    
    
	// jQuery
    import $ from 'jquery'
    var CONFIG = require('../page.config.js')
    
	export default {
		name: 'hc_home',
		data() {
			return {
                img_bg_green,
                img_bg_green_cut,
                gif_simb_white,
                s2_img1,
                s2_img2,
                s2_img3,
                s2_img4,

                code: null,
                show_data: false,

                data_table: [],
                data_table_services:[],
                pagos_servicios: [
                        {
                            "transId":"220401881043",
                            "amount":"20",
                            "service":"SKY",
                            "status":"2",
                            "reference":"12332154654658",
                            "date":"2022-01-20"
                        },
                        {
                            "transId":"888888888",
                            "amount":"399",
                            "service":"TELMEX",
                            "status":"3",
                            "reference":"6589745213",
                            "date":"2022-01-24"
                        },
                        {
                            "transId":"666611111",
                            "amount":"220",
                            "service":"Megacable",
                            "status":"3",
                            "reference":"9854123547",
                            "date":"2022-04-25"
                        },
                        {
                            "transId":"9999211111",
                            "amount":"20",
                            "service":"Izzi",
                            "status":"2",
                            "reference":"4578326541",
                            "date":"2022-01-20"
                        }
                ]
			}
		},
        computed: {
            ...mapGetters([
                'getSession'
            ]),

            current_route_name() {
                return this.$route.name;
            },
            data_session() {
                return this.getSession
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
            validation() {
                if(this.code == '1234567890') {
                    this.show_data = true
                }
            },
            async logout() {
                await _Store.dispatch('deleteSession')
                this.redirect('login')
            },
            
 async getStatusPay(idTransaction,folio) {
     console.log(idTransaction,folio)
      let session = JSON.parse(await _Store.dispatch('existSession'))
      var estatus = null
    //     var params = {
    //             'key': `${CONFIG.server[CONFIG.env].get_services.api_key}`,
    //             'nip': `${CONFIG.server[CONFIG.env].get_services.api_nip}`,
    //             'transID': idTransaction
    //     }

    //     var formBody = []
    //     for (var property in params) {
    //             var encodedKey = encodeURIComponent(property)
    //             var encodedValue = encodeURIComponent(params[property])
    //             formBody.push(encodedKey + "=" + encodedValue)
    //     }
    //     formBody = formBody.join("&")
    //     // console.log(formBody)

    //     _Store.commit('setLoad', {
    //             show: true,
    //             title: 'Cargando',
    //             subtitle: `Actualizando estatus del pago ${idTransaction}`,
    //             timeout: 100000
    //     })

    //     fetch(`${CONFIG.server[CONFIG.env].get_services.url_taecel_status}`, {
    //                     method: 'POST',
    //                     headers: {
    //                             'Content-Type': 'application/x-www-form-urlencoded'
    //                     },
    //                     body: formBody
    //             })
    //             .then(res => res.json())
    //             .catch(err => {
    //                     console.error(err)
    //             })
    //             .then(async response => {
    //                     if (response['success'] == false) {
    //                             _Store.commit('setAlert', {
    //                                     open: true,
    //                                     message: 'Ocurrio un error al realizar la solicitud, favor de intentarlo nuevamente mas tarde.',
    //                                     variant: 'danger'
    //                             })
    //                             _Store.commit('setLoad', {
    //                                     show: false
    //                             })
    //                             return
    //                     } else {

                                estatus = 'success'/*response['success'] == true && response['data'].Status == 'Exitosa' ? 'success' : 'pending'*/
    //                                     // actualizar documento con transId
                                        fetch(`${CONFIG.server[CONFIG.env].api}/transactions/update-transaction-field?folio=${folio}&field=status_taecel&value=${estatus}`, {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                    'authorization': `BEARER ${session.access_token}`
                                                }
                                                })
                                                .then(res => res.json())
                                                .catch(err => {
                                                        console.error(err)
                                                })
                                                .then(async resp => {
                                                        _Store.commit('setLoad', {
                                                                show: false
                                                        })
                                                        _Store.commit('setAlert', {
                                                                open: true,
                                                                message: 'Estatus Actualizado correctamente',
                                                                timeout: 3000
                                                        })
                                                        console.log(resp)
                                                        fetch(`${CONFIG.server[CONFIG.env].api}/transactions/?status=COMPLETED`, {
                                                            method: 'GET',
                                                            headers: {
                                                                'Accept': 'application/json, text/plain, /',
                                                                'Content-Type': 'application/json',
                                                                'Authorization': `BEARER ${session.access_token}`
                                                            }
                                                        }).then(res => res.json())
                                                        .catch(error => console.error('Error:', error))
                                                        .then(async response => {
                                                            if(response.length > 0) {
                                                                this.data_table_services = response
                                                                console.log('actualizado',response)
                                                                console.log(this.currentDateTime())
                                                            }
                                                        })
                                                        
                                                })
    //                     }
    //             })

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
            })

            _Store.commit('setLoad', {
                show: true,
                title: 'Cargando',
                subtitle: "Cargando información...",
            })

            let session = JSON.parse(await _Store.dispatch('existSession'))

            fetch(`${CONFIG.server[CONFIG.env].api}/transactions/by_user/`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, /',
                    'Content-Type': 'application/json',
                    'Authorization': `BEARER ${session.access_token}`
                }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(async response => {

                console.log('Success:', response)

                if(response.length > 0) {
                    this.data_table = response
                    // Test
                    // this.data_table[0].status = 'FAILED'
                }
                else if(response['detail'] !== undefined) {
                    if(response['detail'] == "Unauthorized") {
                        _Store.commit('setAlert', {
                            open: true,
                            message: 'La sesión ha expirado',
                            variant: 'danger'
                        })
                        console.log("llamada de logout desde created HistoryPayments.VUE ")
                        this.logout()
                    }
                }

                

                _Store.commit('setLoad', {
                    show: false,
                })
            })

            fetch(`${CONFIG.server[CONFIG.env].api}/transactions/?status=COMPLETED`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, /',
                    'Content-Type': 'application/json',
                    'Authorization': `BEARER ${session.access_token}`
                }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(async response => {

                console.log('Success:', response)

                if(response.length > 0) {
                    this.data_table_services = response
                    // Test
                    // this.data_table[0].status = 'FAILED'
                }
                else if(response['detail'] !== undefined) {
                    if(response['detail'] == "Unauthorized") {
                        _Store.commit('setAlert', {
                            open: true,
                            message: 'La sesión ha expirado',
                            variant: 'danger'
                        })
                        console.log("llamada de logout desde created HistoryPayments.VUE ")
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
	
</style>
