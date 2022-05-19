



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
                        <div class="col-12 d-flex justify-content-center align-items-center h-100 p-5">
                            
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
                                            <button @click="redirect('login')" class="btn btn-success mx-1">
                                                PAGAR
                                            </button>
                                        </div>
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
                s3_img2
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
