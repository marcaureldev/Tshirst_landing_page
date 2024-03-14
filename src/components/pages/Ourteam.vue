<template>
        <header class="sticky top-0 bg-white">
            <div class="flex justify-between items-center bg-secondary_color p-2">
                <p class="max-w-[35em] mx-auto text-unregular">Free shipping on all U.S. orders $50+</p>
                <img src="../../assets/icons/croix.svg" alt="">
            </div>
            <div class="lg:flex justify-between items-center p-6 hidden">
                <Navbar/>
                <img src="../../assets/images/logo.svg" alt="" class="w-[8em]">
                <div class="flex items-center gap-4">
                    <img src="../../assets/icons/search.svg" alt="">
                    <img src="../../assets/icons/person_icon.svg" alt="">
                    <p class="relative max-w-6">
                        <img src="../../assets/icons/etoile.svg" alt="" class="w-20">
                        <span class="absolute bg-primary_color top-0 text-[10px] text-center
                         text-white rounded-full right-0 w-3 h-3"> 0
                        </span>
                    </p>
                    <p class="relative max-w-6">
                        <img src="../../assets/icons/shop.svg" alt="" class="w-20">
                        <span class="absolute bg-primary_color top-0 text-[10px] text-center
                         text-white rounded-full right-0 w-3 h-3"> 0
                        </span>
                    </p>
                </div>
                <button class="px-4 py-3 rounded-lg font-bold border-2">Let's talk</button>
            </div>
        </header>

        <section class="bg-secondary_color">
            <div class="max-w-[70em] mx-auto p-6">
                <h1 class="text-4xl font-bold text-center">Our Team</h1>
                <p class="flex justify-center gap-2 items-center p-5"> <span class="text-third_color">Home</span>  <img src="../../assets/icons/horizontal_line.svg" alt=""> Our team</p>
            </div>
        </section>

        <section class="max-w-[70em] mx-auto p-8">
            <div class="p-5 space-y-4">
                <h1 class="text-4xl font-bold text-center">Meet the TeeSpace team</h1>
                <p class="text-third_color text-center">Let us show you how your product come to life.</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 sm:gap-8 gap-5 justify-items-center">
                <div class="text-center">
                    <img src="../../assets/images/arlene.svg" alt="" class="w-32 mx-auto">
                    <p class=" font-bold">Arlene McCoy</p>
                    <p class="text-third_color text-[12px]">President of Sales</p>
                </div>
                <div class="text-center">
                    <img src="../../assets/images/jane.svg" alt="" class="w-32 mx-auto">
                    <p class=" font-bold">Jane Cooper</p>
                    <p class="text-third_color text-[12px]">Web designer</p>
                </div>
                <div class="text-center">
                    <img src="../../assets/images/floyd.svg" alt="" class="w-32 mx-auto">
                    <p class=" font-bold">Floyd Miles</p>
                    <p class="text-third_color text-[12px]">Marketing</p>
                </div>
                <div class="text-center">
                    <img src="../../assets/images/jacob.svg" alt="" class="w-32 mx-auto">
                    <p class=" font-bold">Jacob Jones</p>
                    <p class="text-third_color text-[12px]">Project Manager</p>
                </div>
                <div class="text-center">
                    <img src="../../assets/images/ronald.svg" alt="" class="w-32 mx-auto">
                    <p class=" font-bold">Ronald Richards</p>
                    <p class="text-third_color text-[12px]">Artist</p>
                </div>
                <div class="text-center">
                    <img src="../../assets/images/ronald_richards.svg" alt="" class="w-32 mx-auto">
                    <p class=" font-bold">Ronald Richards</p>
                    <p class="text-third_color">Artist</p>
                </div>
                <div class="text-center">
                    <img src="../../assets/images/jacob_jones.svg" alt="" class="w-32 mx-auto">
                    <p class=" font-bold">Jacob Jones</p>
                    <p class="text-third_color text-[12px]">Project Manager</p>
                </div>
                <div class="text-center">
                    <img src="../../assets/images/floyd_milles.svg" alt="" class="w-32 mx-auto">
                    <p class=" font-bold">Floyd Miles</p>
                    <p class="text-third_color text-[12px]">Marketing</p>
                </div>
                <div class="text-center">
                    <img src="../../assets/images/jane_cooper.svg" alt="" class="w-32 mx-auto">
                    <p class=" font-bold">Jane Cooper</p>
                    <p class="text-third_color text-[12px]">Web designer</p>
                </div>
                <div class="text-center">
                    <img src="../../assets/images/arlene_mccopy.svg" alt="" class="w-32 mx-auto">
                    <p class=" font-bold">Arlene McCoy</p>
                    <p class="text-third_color text-[12px]">President of Sales</p>
                </div>
            </div>
        </section>
              
        <section class="bg-behind_color p-8">

            <div class="max-w-[70em] mx-auto">
                <div class="p-6">
                    <p class="flex justify-center gap-2 items-center p-5 uppercase font-bold"> <img src="../../assets/icons/our_team.svg" alt=""> Our Team</p>
                    <h1 class="text-4xl font-bold text-center">Meet the TeeSpace team</h1>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 lg:gap-8 p-5">
                    <div class="max-w-[15em] box rounded-lg">
                        <img src="../../assets/images/arlene-mccopy.svg" alt="" class="max-w-[15em]">
                        <div class="p-4">
                            <p class="font-bold">Arlene Mccopy</p>
                            <p class="text-third_color text-[12px]">President of sales</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] box rounded-lg">
                        <img src="../../assets/images/mary_lous.svg" alt="" class="max-w-[15em]">
                        <div class="p-4">
                            <p class="font-bold">Mary Lous</p>
                            <p class="text-third_color text-[12px]">Copy writer</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] box rounded-lg">
                        <img src="../../assets/images/marilin.svg" alt="" class="max-w-[15em]">
                        <div class="p-4">
                            <p class="font-bold">Marilin</p>
                            <p class="text-third_color text-[12px]">Designer</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] box rounded-lg">
                        <img src="../../assets/images/cristina.svg" alt="" class="max-w-[15em]">
                        <div class="p-4">
                            <p class="font-bold">Cristina</p>
                            <p class="text-third_color text-[12px]">Director</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] box rounded-lg">
                        <img src="../../assets/images/cristina.svg" alt="" class="max-w-[15em]">
                        <div class="p-4">
                            <p class="font-bold">Cristina</p>
                            <p class="text-third_color text-[12px]">Director</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] box rounded-lg">
                        <img src="../../assets/images/arlene-mccopy.svg" alt="" class="max-w-[15em]">
                        <div class="p-4">
                            <p class="font-bold">Marilin</p>
                            <p class="text-third_color text-[12px]">Designer</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] box rounded-lg">
                        <img src="../../assets/images/mary_lous.svg" alt="" class="max-w-[15em]">
                        <div class="p-4">
                            <p class="font-bold">Mary Lous</p>
                            <p class="text-third_color text-[12px]">Copy writer</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] box rounded-lg">
                        <img src="../../assets/images/marilin.svg" alt="" class="max-w-[15em]">
                        <div class="p-4">
                            <p class="font-bold">Adele Mc</p>
                            <p class="text-third_color text-[12px]">Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="p-5">
            <div class="max-w-[70em] mx-auto">
                <div class="p-6">
                    <p class="text-unregular font-bold bg-secondary_color rounded-xl max-w-[8em] mx-auto text-center">Join us Today</p>
                    <h1 class="text-4xl font-bold text-center">Meet our team!</h1>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 lg:gap-8 p-5">
                    <div class="max-w-[15em] rounded-lg">
                        <img src="../../assets/images/arlene-mccopy.svg" alt="" class="rounded-lg max-w-[15em]">
                        <div class="p-4 text-center">
                            <p class="font-bold">Arlene Mccopy</p>
                            <p class="text-third_color text-[12px]">President of sales</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] rounded-lg">
                        <img src="../../assets/images/marilin.svg" alt="" class="rounded-lg max-w-[15em]">
                        <div class="p-4 text-center">
                            <p class="font-bold">Marilin</p>
                            <p class="text-third_color text-[12px]">Designer</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] rounded-lg">
                        <img src="../../assets/images/mary_lous.svg" alt="" class="rounded-lg max-w-[15em]">
                        <div class="p-4 text-center">
                            <p class="font-bold">Mary Lous</p>
                            <p class="text-third_color text-[12px]">Copy writer</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] rounded-lg">
                        <img src="../../assets/images/cristina.svg" alt="" class="rounded-lg max-w-[15em]">
                        <div class="p-4 text-center">
                            <p class="font-bold">Cristina</p>
                            <p class="text-third_color text-[12px]">Director</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] rounded-lg">
                        <img src="../../assets/images/mary_lous.svg" alt="" class="rounded-lg max-w-[15em]">
                        <div class="p-4 text-center">
                            <p class="font-bold">Mary Lous</p>
                            <p class="text-third_color text-[12px]">Copy writer</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] rounded-lg">
                        <img src="../../assets/images/cristina.svg" alt="" class="rounded-lg max-w-[15em]">
                        <div class="p-4 text-center">
                            <p class="font-bold">Cristina</p>
                            <p class="text-third_color text-[12px]">Director</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] rounded-lg">
                        <img src="../../assets/images/marilin.svg" alt="" class="rounded-lg max-w-[15em]">
                        <div class="p-4 text-center">
                            <p class="font-bold">Adele Mc</p>
                            <p class="text-third_color text-[12px]">Designer</p>
                        </div>
                    </div>
                    <div class="max-w-[15em] rounded-lg">
                        <img src="../../assets/images/arlene-mccopy.svg" alt="" class="rounded-lg max-w-[15em]">
                        <div class="p-4 text-center">
                            <p class="font-bold">Adele Mc</p>
                            <p class="text-third_color text-[12px]">President of sales</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
            
        <section  class="bg-[#B479D926]">
            <EnjoyCard/>
        </section>

        <footer class="bg-[#F5F5F5]">
            <myfooter/>
        </footer>

</template>

<script>
import Navbar from '../Navbar.vue'
import EnjoyCard from '../EnjoyCard.vue'
import myfooter from '../myfooter.vue'
export default {
    components:{
        Navbar,
        EnjoyCard,
        myfooter,
    }

}
</script>

<style>

</style>