



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

        <section id="section2" class="row bg-light d-flex pt-5">
            <div class="col-12 text-center py-3">
                <span class="hc--title poppins-regular">
                    Por favor, selecciona el servicio <br>
                    <span class="poppins-bold">que deseas pagar</span>
                </span>
            </div>
        </section>

        <section id="section3" class="row bg-light d-flex pt-5">
            <img :src="s3_img1" class="img-fluid">

                <div id="s3_target" class="container-fluid position-absolute">
                    <div class="row h-100">
                        <div class="col-4 d-flex justify-content-center align-items-center h-100 p-5">
                            
                            <div class="w-100 p-0 p-xl-5">

                                <div class="row d-flex justify-content-center align-items-center">
                                    <div class="text-center" style="max-width: 680px;">
                                        <div class="d-none d-md-flex justify-content-center align-items-center mb-3">
                                            <div style="max-width: 400px">
                                                <img :src="s3_img2" class="img-fluid">    
                                            </div>
                                        </div>

                                        <span class="d-flex d-md-none hc--title-sm poppins-bold text-white">
                                            PROGRAMA DE APOYO <br class="d-none d-sm-flex">
                                            DE BENEFICIO SOCIAL
                                        </span>

                                        <div class="mt-2 mt-xl-5">
                                            <button @click="login_to_pay('login',1)" class="btn btn-success mx-1">
                                                PAGAR
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class="col-8 d-flex justify-content-center align-items-center h-100 p-5">
                            <div class="w-100 p-0 p-xl-5">
                                <div class="col-12 d-flex justify-content-center align-items-center h-100 p-2">
                                    <span  class="hc--title poppins-regular text-white">
                                        <span  class="poppins-bold">Otros Servicios</span>
                                    </span>
                                </div>
                                <div class="row d-flex justify-content-left align-items-center">
                                    <div class="text-center" style="max-width: 1000px;">
                                        <ssr-carousel :slides-per-page="6" 
                                        :responsive='[
                                            {
                                            maxWidth: 900,
                                            slidesPerPage: 5,
                                            },
                                            {
                                            maxWidth: 800,
                                            slidesPerPage: 4,
                                            },
                                            {
                                            maxWidth: 700,
                                            slidesPerPage: 2,
                                            },
                                            {
                                            maxWidth: 500,
                                            slidesPerPage: 2,
                                            },
                                            {
                                            maxWidth: 200,
                                            slidesPerPage: 1,
                                            },
                                            {
                                            maxWidth: 100,
                                            slidesPerPage: 1,
                                            }
                                        ]' >
                                            <div class="slide" v-for="service in services" :key="service.id" @click="login_to_pay('login',service.id)">
                                                    <img :src="service.imagen" class="asd">
                                                </div>
                                        </ssr-carousel> 
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
    // Images
    import img_bg_green from '../assets/images/backgrounds/bg-green.png'
    import img_bg_green_cut from '../assets/images/backgrounds/bg-green-cut.png'
    import s3_img1 from '../assets/images/paymentServices/section3/fondo-programa.jpg'
    import s3_img2 from '../assets/images/paymentServices/section3/logo-programa.png'
    
	// Gifs
    import gif_simb_white from '../assets/gifs/simbolo-blanco.gif'    
    
	// jQuery
    import $ from 'jquery'
    
	export default {
		name: 'hc_home',
		data() {
			return {
                img_bg_green,
                img_bg_green_cut,
                gif_simb_white,
                s3_img1,
                s3_img2,
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
            current_route_name() {
                return this.$route.name;
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
        login_to_pay(ruta,servicio){
            if(this.current_route_name !== ruta ) {
                    window.scrollTo(0, 0)

                    this.$router.push({
                        name: ruta,
                        params:{
                            service:servicio
                        }
                    })
                }
        }
        },
        created() {
            $(window).resize(function() {
                let s1_height = $('#section1').height()
                $("#s1_target").css("height", s1_height)

                let s3_height = $('#section3').height()
                let s3_width = $('#section3').width()
                $("#s3_target").css("height", s3_height)
                $("#s3_target").css("width", s3_width)
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
