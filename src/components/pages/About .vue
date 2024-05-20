<template>
        <header>
            <myheader/>
        </header>

        <section class="bg-btn_color">
            <HeroSection :title="title" :subtitle="subtitle"/>
        </section>


        <section class="max-w-[70em] mx-auto p-10">
            <div class="lg:flex lg:items-center gap-32">
                <div class="space-y-4 max-w-[25em] mx-auto">
                    <p class="text-unregular text-center font-medium bg-secondary_color rounded-xl max-w-[9em] px-2 text-[15px] ">Design your own</p>
                    <h1 class="text-3xl font-bold">Create stunning print for your business</h1>
                    <p class="text-third_color text-[14px]">T-shirt Printing for Everyone. Get a headstart with free design templates you can customize in a few clicks.</p>
                    <p class="flex gap-3 items-center font-bold"><img src="../../assets/icons/item.svg" alt=""> Top quality prints using the latest technology</p>
                    <p class="flex gap-3 items-center font-bold"><img src="../../assets/icons/item.svg" alt=""> Mix and match colors, sizes, and designs</p>
                    <p class="flex gap-3 items-center font-bold"><img src="../../assets/icons/item.svg" alt="">Fast and free standard shipping</p>
                    <p class="flex gap-3 items-center font-bold"><img src="../../assets/icons/item.svg" alt="">Customer happiness guarantee</p>
                    <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">Custom T-shirt</button>
                </div>
                <img src="../../assets/images/stunning_print.svg" alt="" class="w-[30em] mx-auto">
            </div>
        </section>

        <section class="max-w-[70em] mx-auto">
            <div class="p-6 space-y-5">
                <p class="text-unregular text-center font-medium bg-secondary_color rounded-xl max-w-[13em] mx-auto px-2 text-[15px] "> Fast and Quality Service</p>
                <h1 class="text-4xl font-bold text-center">T-shirt printing made easy.</h1>
            </div>

            <div class="lg:flex items-center justify-between lg:max-w-[70em]  mx-auto">
                <img src="../../assets/icons/tshirt-mockup.svg" alt="" class="w-[30em] mx-auto rounded-md">
                
                <div class="space-y-5 sm:max-w-[40em] lg:w-[30em] mx-auto">
                    <div class="">
                        <button class="w-full px-8 py-3 text-white rounded-lg bg-primary_color flex items-center justify-between">Graphic Design Services <img src="../../assets/icons/ouverture.svg" alt=""></button>
                        <div>
                            <p class="hidden">
                                To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that, start your creation and make
                                sure that your final design is at least 220 PPI so it won’t be pixelated when printed…
                            </p>
                        </div>
                    </div>
                    <div>
                        <button class="w-full px-8 py-3 text-white rounded-lg bg-primary_color flex items-center justify-between">Priting Services<img src="../../assets/icons/ouverture.svg" alt=""></button>
                        <div>
                            <p class="hidden">
                                To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that, start your creation and make
                                sure that your final design is at least 220 PPI so it won’t be pixelated when printed…
                            </p>
                        </div>
                    </div>
                    <div>
                        <button class="w-full px-8 py-3 text-white rounded-lg bg-primary_color flex items-center justify-between">POD for online Stores<img src="../../assets/icons/ouverture.svg" alt=""></button>
                        <div>
                            <p class="hidden">
                                To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that, start your creation and make
                                sure that your final design is at least 220 PPI so it won’t be pixelated when printed…
                            </p>
                        </div>
                    </div>
                    <div>
                        <button class="w-full px-8 py-3 text-white rounded-lg bg-primary_color flex items-center justify-between">Branding & white-label printing<img src="../../assets/icons/ouverture.svg" alt=""></button>
                        <div>
                            <p class="hidden">
                                To make a T-shirt design, your first need to install specific graphic design software. Once you’ve done that, start your creation and make
                                sure that your final design is at least 220 PPI so it won’t be pixelated when printed…
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="p-5">
            <div class="max-w-[70em] mx-auto">
                <div class="p-6">
                    <p class="text-unregular font-bold bg-secondary_color rounded-xl max-w-[8em] mx-auto text-center">Join us Today</p>
                    <h1 class="text-3xl font-bold text-center">Meet our team!</h1>
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
                    <!--
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
                    </div> -->
                </div>
                <button class="flex px-5 py-2 rounded-md border-harutheme border-2 mx-auto">Join Our Team</button>
            </div>
        </section>

        <section class="bg-behind_color p-5">
                <div class="flex justify-between items-center max-w-70 h-[20em] mx-auto relative">
                    <div class="max-w-[20em]">
                        <img src="../../assets/icons/feedly.svg" alt="" class="w-[5em] absolute right-[50em] top-4 hidden lg:block">
                        <img src="../../assets/icons/amazon.svg" alt="" class="w-[8em] absolute left-12 top-20 hidden lg:block">
                        <img src="../../assets/icons/craft.svg" alt="" class="w-[5em] absolute left-[15em] top-[12em] hidden lg:block">
                    </div>
                    <img src="../../assets/icons/hopin.svg" alt="" class="w-[7em] mx-auto absolute left-[32em] top-0 hidden lg:block">
                    <div class="p-10 space-y-5">
                        <h1 class="text-2xl font-bold text-center">Join the 7,000+ <br> companies trusting us</h1>
                        <button class="flex px-5 py-2 rounded-md bg-primary_color text-white mx-auto">Get Started</button>
                    </div>
                    <div class=" max-w-[20em]">
                        <img src="../../assets/icons/twitch.svg" alt="" class="w-[6em] absolute left-[50em] top-4 hidden lg:block">
                        <img src="../../assets/icons/google-font.svg" alt="" class="w-[6em] absolute right-12 top-20 hidden lg:block">
                        <img src="../../assets/icons/shopify.svg" alt="" class="w-[6em] absolute right-[15em] top-[12em] hidden lg:block">
                    </div>    
                </div>
        </section>
        

        <!-- SECTION WHAT PEOPLE ARE SAYING----------------------------------------------------------------------------- -->

        <section class="text-center lg:text-start max-w-[70em] mx-auto space-y-8 p-8">
            <div class="space-y-4">
                <p class="text-unregular font-bold bg-secondary_color rounded-xl max-w-[8em] mx-auto text-center">Testimonials</p>
                <h1 class="text-2xl font-bold text-center">What People Are Saying</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 justify-items-center">

                    <div class="max-w-[23em] shadow-xl p-5 rounded-lg box">
                        <div class="flex justify-center gap-5 items-center">
                            <img src="../../assets/images/dean.svg" alt="">
                            <p class="font-bold ">Dean D. <span class="font-extralight text-[#7E7E7E]">Director</span></p>
                        </div>
                        <p class="max-w-[18em] mx-auto">
                            “ Great quality products - Flags, programs for exceptional capacities, birthday, and occasion welcome 
                            are largely still mainstream on paper.”
                        </p>
                    </div>

                    <div class="max-w-[23em] shadow-xl p-5 rounded-lg box">
                        <div class="flex justify-center gap-5 items-center">
                            <img src="../../assets/images/christian.svg" alt="">
                            <p class="font-bold ">Cristian L.<span class="font-extralight text-[#7E7E7E]">Manager</span></p>
                        </div>
                        <p class="max-w-[18em] mx-auto">
                            “ Best services ever - Flags, programs for exceptional capacities, birthday, and are largely still mainstream on
                            paper occasion welcome.”
                        </p>
                    </div>

                    <div class="max-w-[23em] shadow-xl p-5 rounded-lg box md:hidden lg:block">
                        <div class="flex justify-center gap-5 items-center">
                            <img src="../../assets/images/leonel.svg" alt="">
                            <p class="font-bold ">Leonel R.<span class="font-extralight text-[#7E7E7E]">Designer</span></p>
                        </div>
                        <p class="max-w-[18em] mx-auto">
                            “ Top noth support - Flags, programs for, birthday, and occasion welcome are largely still mainstream on paper
                            exceptional capacities.”
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-enjoy">
            <div class="lg:flex lg:justify-between lg:items-center max-w-[70em] mx-auto p-4 space-y-5 bg-cercle_enjoy bg-no-repeat">
                <div class="space-y-6 max-w-[35em] mx-auto text-center lg:text-start text-white">
                    <h1 class="text-4xl font-bold leading-snug">Enjoy up your vacations <br> in the best T-shirts</h1>
                    <p class="">T-shirts that keep you moving.</p>
                    <div class="flex gap-8 items-center">
                        <button class="flex justify-center lg:justify-start items-center gap-2 bg-white px-4 py-1 rounded-lg text-black font-medium text-sm mx-auto lg:mx-0">
                            Shop Now<img src="../../assets/icons/fleche_footer.svg" alt="">
                        </button>
                        <button class="flex items-center gap-2 px-4 py-1 rounded-lg font-medium bg-white text-black text-sm mx-auto lg:mx-0">
                            Contact Us<img src="../../assets/icons/fleche_footer.svg" alt="">
                        </button>
                    </div>
                </div>
                <img src="../../assets/images/enjoy.svg" alt="" class="w-[25em] mx-auto">
            </div>
        </section>


        <footer class="bg-[#F5F5F5]">
            <myfooter/>
        </footer>

</template>

<script>
import myheader from '../myheader.vue'
import myfooter from '../myfooter.vue';
import HeroSection from '../HeroSection.vue';
export default {
data(){
    return {
        title : 'About Us',
        subtitle : 'About Us',
    }
},

    components: {
        myheader,
        myfooter,
        HeroSection,
    }


}
</script>

<style>

</style>