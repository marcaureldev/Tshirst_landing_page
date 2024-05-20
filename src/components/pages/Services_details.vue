<template>
    <header>
        <myheader />
    </header>

    <section class="bg-secondary_color">
        <HeroSection :title="title" :subtitle="subtitle" />
    </section>

    <section class="max-w-[70em] mx-auto p-10">
        <div class="lg:flex lg:items-center gap-32">
            <img src="../../assets/images/service-details-hero.svg" alt="" class="w-[30em] mx-auto">
            <div class="space-y-5 max-w-[25em] mx-auto">
                <p
                    class="text-unregular text-center bg-secondary_color rounded-lg max-w-[10em] mx-auto px-2 text-[15px] ">
                    Design your own</p>
                <h1 class="text-4xl font-bold">You’ve got the ideas, we’ve got the tools</h1>
                <p class="text-third_color text-[14px]">T-shirt Printing for Everyone. Get a headstart with free design
                    templates you can customize in a few clicks.</p>
                <p class="flex gap-3 items-center font-bold"><img src="../../assets/icons/item.svg" alt=""> Top quality
                    prints using the latest technology</p>
                <p class="flex gap-3 items-center font-bold"><img src="../../assets/icons/item.svg" alt=""> Mix and
                    match colors, sizes, and designs</p>
                <p class="flex gap-3 items-center font-bold"><img src="../../assets/icons/item.svg" alt="">Fast and free
                    standard shipping</p>
                <p class="flex gap-3 items-center font-bold"><img src="../../assets/icons/item.svg" alt="">Customer
                    happiness guarantee</p>
            </div>
        </div>
    </section>

    <section class="max-w-[70em] mx-auto p-8">
        <div class="lg:flex justify-between items-center space-y-5">
            <div class="flex gap-5 max-w-[20em] mx-auto lg:mx-0">
                <img src="../../assets/icons/top_quality.svg" alt="" class="w-10">
                <div>
                    <h2 class="text-xl font-bold">Top quality</h2>
                    <p class="text-third_color text-[15px]">Lorem ipsum det, consec tetur adipiscing elit duis nec
                        fringi</p>
                </div>
            </div>

            <div class="flex gap-5 max-w-[20em] mx-auto">
                <img src="../../assets/icons/mix_match.svg" alt="" class="w-10">
                <div>
                    <h2 class="text-xl font-bold">Mix and match</h2>
                    <p class="text-third_color text-[15px]">Lorem ipsum det, consec tetur adipiscing elit duis nec
                        fringi</p>
                </div>
            </div>

            <div class="flex gap-5 max-w-[20em] mx-auto">
                <img :src="Shipping" alt="" class="w-10">
                <div>
                    <h2 class="text-xl font-bold">Top quality</h2>
                    <p class="text-third_color text-[15px]">Lorem ipsum det, consec tetur adipiscing elit duis nec
                        fringi</p>
                </div>
            </div>
        </div>
    </section>

    <section class="max-w-[70em] mx-auto p-10">
        <div class="lg:flex justify-between items-center space-y-8">
            <div class="space-y-4 max-w-[30em] mx-auto text-center lg:text-start">
                <div class="space-y-5">
                    <p
                        class="text-unregular bg-secondary_color rounded-lg max-w-[10em] mx-auto lg:mx-0 px-2 text-[15px] ">
                        Design your own</p>
                    <h1 class="text-2xl font-bold">T-shirt printing made easy.</h1>
                    <p class="text-third_color text-[14px]">You’ve got the idea, we’ve got the tools—design your custom
                        <br> clothing with our free design assets:</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <p class="flex gap-3 items-center font-bold"><img src="../../assets/icons/font_library.svg"
                                alt="">Font Library</p>
                        <p class="text-third_color text-[14px]">Lorem ipsum det, consec tetur duis nec fringi det,
                            consec</p>
                    </div>
                    <div>
                        <p class="flex gap-3 items-center font-bold"><img src="../../assets/icons/quick_design.svg"
                                alt="">Quick Design</p>
                        <p class="text-third_color text-[14px]">Lorem ipsum det, consec tetur duis nec fringi det,
                            consec</p>
                    </div>
                    <div>
                        <p class="flex gap-3 items-center font-bold"><img src="../../assets/icons/free_icon.svg"
                                alt="">Free Icons, Graphics</p>
                        <p class="text-third_color text-[14px]">Lorem ipsum det, consec tetur duis nec fringi det,
                            consec</p>
                    </div>
                    <div>
                        <p class="flex gap-3 items-center font-bold"><img src="../../assets/icons/free_image.svg"
                                alt="">Free Images</p>
                        <p class="text-third_color text-[14px]">Lorem ipsum det, consec tetur duis nec fringi det,
                            consec</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center lg:text-start gap-5 space-y-5">
                <div>
                    <img src="../../assets/images/tshirt_jaune.svg" alt="" class="w-[15em]">
                    <img src="../../assets/images/tshirt_blanc.svg" alt="" class="w-[15em]">
                </div>
                <div class="space-y-2">
                    <img src="../../assets/images/t-shirt_blanc.svg" alt="" class="w-[15em]">
                    <img src="../../assets/images/pullvert.svg" alt="" class="w-[15em]">
                </div>
            </div>
        </div>
    </section>

    <section class="max-w-[70em] mx-auto">
        <div class="p-10">
            <div class="text-center">
                <p class="text-unregular bg-secondary_color rounded-lg max-w-[7em] mx-auto px-2 text-[15px]">How it work
                </p>
                <h1 class="text-2xl font-bold">T-shirt printing made easy.</h1>
            </div>

            <div class="lg:grid grid-cols-5 justify-items-center p-10 hidden">
                <div><span class="w-16 px-4 py-2 rounded-full box bg-primary_color text-white">1</span></div>
                <img src="../../assets/icons/courbe.svg" alt="" class="hidden lg:block">
                <div><span class="w-16 px-4 py-2 rounded-full box ">2</span></div>
                <img src="../../assets/icons/courbe_open.svg" alt="" class="hidden lg:block">
                <div><span class="w-16 px-4 py-2 rounded-full box ">3</span></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:gap-32 gap-5 p-5">
                <div class="space-y-2 w-[20em] text-center">
                    <div><span
                            class="w-16 px-4 py-2 rounded-full mx-auto box bg-primary_color text-white block lg:hidden">1</span>
                    </div>
                    <h2>Add your shirt design</h2>
                    <p class="p-2 lg:p-0">Lorem ipsum det, consec tetur adipiscing elit duis nec fringi det, consec
                        tetur adipiscing eli</p>
                    <p class="flex gap-2 text-primary_color justify-center  text-center text-[10px]">Explore More <img
                            src="../../assets/icons/fleche_verte.svg" alt=""></p>
                </div>

                <div class="space-y-4 w-[20em] text-center">
                    <div><span class="w-16 px-4 py-2 rounded-full mx-auto box block lg:hidden">2</span></div>
                    <h2>Add your shirt design</h2>
                    <p class="p-2 lg:p-0">Lorem ipsum det, consec tetur adipiscing elit duis nec fringi det, consec
                        tetur adipiscing eli</p>
                </div>
                <div class="space-y-4 w-[20em] text-center">
                    <div><span class="w-16 px-4 py-2 rounded-full mx-auto box block lg:hidden">3</span></div>
                    <h2>Add your shirt design</h2>
                    <p class="p-2 lg:p-0">Lorem ipsum det, consec tetur adipiscing elit duis nec fringi det, consec
                        tetur adipiscing eli</p>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-secondary_color">
        <div class="lg:flex items-center gap-32 space-y-8 max-w-[70em] mx-auto text-center lg:text-start p-10">
            <div class="space-y-8 max-w-[25em] mx-auto">
                <p class="text-unregular bg-secondary_color rounded-lg max-w-[5em] mx-auto lg:mx-0 px-2 text-[15px]">
                    Support</p>
                <h1 class="text-2xl font-bold">Frequently asked questions</h1>
                <p class="text-third_color text-[14px]">You’ve got the idea, we’ve got the tools—design your custom
                    clothing with our free design assets:</p>
                <p class="flex justify-center lg:justify-start items-center gap-2 uppercase font-bold"> <img
                        src="../../assets/icons/ask.svg" alt="">Any questions</p>
                <h2 class="text-2xl font-bold">hello@teespace.com</h2>
            </div>

            <div class="space-y-5 sm:w-[40em] mx-auto">
                <div class="">
                    <button class="w-full px-8 py-3 rounded-lg bg-white flex items-center justify-between btn">How does
                        product customization work?<img src="../../assets/icons/close_btn.svg" alt="" class="img"
                            id="image"></button>
                    <div class="hidden accordeon text-third_color text-[15px] p-2">
                        <p>
                            To make a T-shirt design, your first need to install specific graphic design software.
                            Once you’ve done that,start your creation your final design is at least 220 PPI so it
                            won’t be pixelated when printed…
                        </p>
                        <p>
                            To design your own T-shirt, you can upload your design to the front of your tee and add
                            custom elements like
                            text. For some of our T-shirts, reverse side printing is also available.
                        </p>
                    </div>
                </div>
                <div>
                    <button
                        class="w-full px-8 py-3 text-white rounded-lg bg-primary_color flex items-center justify-between">What
                        products can I customize?<img src="../../assets/icons/ouverture.svg" alt=""
                            class="btn1"></button>
                    <div class="hidden accordeon1 text-third_color text-[15px]">
                        <p>
                            To make a T-shirt design, your first need to install specific graphic design software.
                            Once you’ve done that,start your creation your final design is at least 220 PPI so it
                            won’t be pixelated when printed…
                        </p>
                        <p>
                            To design your own T-shirt, you can upload your design to the front of your tee and add
                            custom elements like
                            text. For some of our T-shirts, reverse side printing is also available.
                        </p>
                    </div>
                </div>
                <div>
                    <button
                        class="w-full px-8 py-3 text-white rounded-lg bg-primary_color flex items-center justify-between">How
                        are your T-shirts printed?<img src="../../assets/icons/ouverture.svg" alt=""
                            class="btn2"></button>
                    <div class="hidden accordeon2 text-third_color text-[15px]">
                        <p>
                            To make a T-shirt design, your first need to install specific graphic design software.
                            Once you’ve done that,start your creation your final design is at least 220 PPI so it
                            won’t be pixelated when printed…
                        </p>
                        <p>
                            To design your own T-shirt, you can upload your design to the front of your tee and add
                            custom elements like
                            text. For some of our T-shirts, reverse side printing is also available.
                        </p>
                    </div>
                </div>
                <div>
                    <button
                        class="w-full px-8 py-3 text-white rounded-lg bg-primary_color flex items-center justify-between">What
                        is the best T-shirt material?<img src="../../assets/icons/ouverture.svg" alt=""
                            class="btn3"></button>
                    <div class="hidden accordeon3 text-third_color text-[15px]">
                        <p>
                            To make a T-shirt design, your first need to install specific graphic design software.
                            Once you’ve done that,start your creation your final design is at least 220 PPI so it
                            won’t be pixelated when printed…
                        </p>
                        <p>
                            To design your own T-shirt, you can upload your design to the front of your tee and add
                            custom elements like
                            text. For some of our T-shirts, reverse side printing is also available.
                        </p>
                    </div>
                </div>
                <div>
                    <button
                        class="w-full px-8 py-3 text-white rounded-lg bg-primary_color flex items-center justify-between">Can
                        I order a personalized gift?<img src="../../assets/icons/ouverture.svg" alt=""
                            class="btn4"></button>
                    <div class="hidden accordeon4 text-third_color text-[15px]">
                        <p>
                            To make a T-shirt design, your first need to install specific graphic design software.
                            Once you’ve done that,start your creation your final design is at least 220 PPI so it
                            won’t be pixelated when printed…
                        </p>
                        <p>
                            To design your own T-shirt, you can upload your design to the front of your tee and add
                            custom elements like
                            text. For some of our T-shirts, reverse side printing is also available.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="max-w-[70em] mx-auto text-center lg:text-start">
        <div class="lg:flex gap-16 justify-center items-center p-10 space-y-4">
            <div class="space-y-8 max-w-[15em] mx-auto lg:mx-0">
                <p class="text-unregular bg-secondary_color rounded-lg max-w-[7em] mx-auto lg:mx-0 px-2 text-[15px]">
                    Testimonials</p>
                <h1 class="text-4xl font-bold">What People Are Saying</h1>
                <p class="text-third_color text-[14px]">We provide support for more than 15K+ Businesses.</p>
                <button class="text-white px-5 py-3 rounded-lg bg-primary_color text-[12px]">Shop Now</button>
            </div>

            <div class="max-w-[20em] box p-5 space-y-5 rounded-lg mx-auto lg:mx-0">
                <h1 class="text-xl font-bold">Design shirts for yourself or your works</h1>
                <p>
                    “For all your printing prerequisites.
                    Business cards, solicitations, &
                    occasion programs offer to make and
                    print their pamphlets .”
                </p>
                <p class="flex gap-2 items-center"><img src="../../assets/icons/anna.svg" alt="">Anna Lukomska <br>
                    /Orlando, FL</p>
            </div>


            <div class="max-w-[20em] box p-5 space-y-5 rounded-lg mx-auto lg:mx-0">
                <h1 class="text-xl font-bold">Print shirts for yourself or your online business</h1>
                <p>
                    “For all your printing prerequisites.
                    Offer to make and print their
                    pamphlets, business cards,
                    solicitations, & occasion programs.”
                </p>
                <p class="flex gap-2 items-center"><img src="../../assets/icons/harry.svg" alt=""> Harry Shoulder <br>
                    /Landmark, NY</p>
            </div>
        </div>
    </section>

    <footer class="bg-[#F5F5F5]">
        <myfooter />
    </footer>
</template>

<script>
import Shipping from '../../assets/icons/shipping_worlwide.svg'
import HeroSection from '../HeroSection.vue';
import myheader from '../myheader.vue'
import myfooter from '../myfooter.vue'
export default {
    data() {
        return {
            Shipping: Shipping,
            title: 'Services Détails',
            subtitle: 'Services Détails',
        }
    },
    components: {
        myheader,
        myfooter,
        HeroSection,
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     const btn = document.querySelector('.btn');
//     const img = document.querySelector('.img');
//     const accordeon = document.querySelector('.accordeon');
//     const image = document.querySelector('#image')
//     const closebtn = new Image
//     closebtn.src = '../../assets/icons/ouverture.svg';

//     btn.addEventListener("click", function () {
//         if (accordeon.classList.contains('hidden')) {
//             accordeon.classList.remove('hidden')
//             btn.style.background = '#2EBB77'
//             btn.style.color = '#fff'
//             btn.innerHTML = 'How does product customization work?'
//             btn.appendChild(closebtn)
//             console.log(btn)

//         }
//         else {
//             accordeon.classList.add('hidden')
//             btn.style.background = ''
//             btn.style.color = ''
//             btn.innerHTML = 'How does product customization work?'
//             btn.appendChild(image)
//         }
//     })


// })

</script>

<style></style>