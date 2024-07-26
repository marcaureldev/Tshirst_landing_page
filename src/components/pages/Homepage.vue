<template>
    <!-- HEADER SECTION ----------------------------------------------------------------------------- -->
    <header>
        <MyHeader />
    </header>

    <!-- SECTION CREATE YOUR OWN----------------------------------------------------------------------------- -->

    <section class="max-w-[70em] mx-auto">
        <div class="flex flex-col-reverse lg:flex-row justify-between items-center p-10 lg:p-5">
            <div class="max-w-[34em] space-y-6">
                <p class="bg-[#B479D926] inline rounded-xl text-[#B479D9] text-[15px] p-1">
                    Create your own
                </p>
                <h1 class="text-4xl font-bold">Make the most of o printing</h1>
                <p class="text-[#7E7E7E]">
                    What’s more, we do it right! A full administration printing
                    background. Print shirts for yourself or your online business
                </p>
                <div class="flex gap-8 items-center">
                    <button class="flex items-center gap-2 bg-[#2EBB77] font-bold text-white px-4 py-3 rounded-xl">
                        Shop Now <img src="../../assets/icons/arrow_white.svg" alt="" />
                    </button>
                    <button class="flex items-center gap-2 font-bold">
                        How We Work <img src="../../assets/icons/play.svg" alt="" />
                    </button>
                </div>
                <div class="flex justify-between items-center gap-5 max-w-[25em]">

                    <div v-for="stat in stats" :key="stat.name">
                        <h1 class="text-4xl font-bold"> {{ stat.value }}k+</h1>
                        <p class="text-[#7E7E7E]">{{ stat.name }}</p>
                    </div>

                </div>
            </div>
            <img src="../../assets/images/hero_section.svg" alt="" class="w-[35em]" />
        </div>
    </section>

    <!-- SECTION CUSTOM T-SHIRT ----------------------------------------------------------------------------- -->

    <section class="bg-[#F5F5F5]">
        <div class="max-w-[70em] mx-auto py-12 space-y-8">
            <h2 class="text-center text-xl font-bold">
                “We've got custom T-shirts in a range of fits and sizes, so <br />
                everyone can wear your brand or message.”
            </h2>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center">
                <img src="../../assets/images/spotify.svg" alt="" />
                <img src="../../assets/images/feedly.svg" alt="" />
                <img src="../../assets/images/lattice.svg" alt="" />
                <img src="../../assets/images/hopin.svg" alt="" />
                <img src="../../assets/images/upwork.svg" alt="" />
                <img src="../../assets/images/hopin.svg" alt="" />
            </div>
        </div>
    </section>

    <!-- SECTION CREATE CUSTOM SHIRT----------------------------------------------------------------- -->

    <section class="max-w-[70em] mx-auto py-8 space-y-8">
        <div class="">
            <h2 class="text-2xl font-bold text-center">
                How to create custom shirts
            </h2>
            <p class="text-[#7E7E7E] text-center">
                Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
                adipiscing eliet, <br />
                cowec tetopak ec tetur duis necgi
            </p>
            <div class="p-8 text-center lg:text-start">
                <div class="lg:flex gap-28 items-center justify-center">
                    <img src="../../assets/images/add_shirt_design.svg" alt="" class="w-[25em] mx-auto" />
                    <span class="w-16 px-3 py-2 rounded-full text-center box">1</span>
                    <div>
                        <h2 class="font-bold text-2xl">Add your shirt design</h2>
                        <p class="text-[#7E7E7E]">
                            Lorem ipsum det, cowec tetur duis nec fringi det, consec t
                            eturlagix adipiscing eliet, cowec tetopak nec fringi det
                            adipiscing
                        </p>
                    </div>
                </div>
            </div>
            <div class="p-8 text-center lg:text-start">
                <div class="lg:flex flex-row-reverse gap-28 items-center">
                    <img src="../../assets/images/custom_artwork.svg" alt="" class="w-[25em] mx-auto" />
                    <span class="w-14 px-3 py-2 rounded-full text-center box">2</span>
                    <div>
                        <h2 class="font-bold text-2xl">Custom artwork &review</h2>
                        <p class="text-[#7E7E7E]">
                            Lorem ipsum det, cowec tetur duis nec fringi det, consec t
                            eturlagix adipiscing eliet, cowec tetopak nec fringi det
                            adipiscing
                        </p>
                    </div>
                </div>
            </div>
            <div class="p-8 text-center lg:text-start">
                <div class="lg:flex gap-28 items-center">
                    <img src="../../assets/images/enjoy_product.svg" alt="" class="w-[25em] mx-auto" />
                    <span class="w-16 px-3 py-2 h- rounded-full text-center box">3</span>
                    <div>
                        <h2 class="font-bold text-2xl">Enjoy your product</h2>
                        <p class="text-[#7E7E7E]">
                            Lorem ipsum det, cowec tetur duis nec fringi det, consec t
                            eturlagix adipiscing eliet, cowec tetopak nec fringi det
                            adipiscing
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION FREE AND EASY WAY--------------------------------------------------------------------------- -->

    <section class="bg-[#F5F5F5]">
        <div class="p-8 text-center lg:text-start max-w-[70em] mx-auto py-8 space-y-8">
            <div class="lg:flex lg:items-center">
                <img src="../../assets/images/element.svg" alt="" class="w-[40em] mx-auto" />
                <div class="max-w-[30em] mx-auto space-y-5">
                    <h1 class="text-2xl font-bold">
                        Free and easy way to <br />
                        bring your ideas to life
                    </h1>
                    <p class="text-[#7E7E7E]">
                        Lorem ipsum det, cowec tetur duis necgi det, consec <br />
                        teturlagix adipiscing eliet, cowec tetopak
                    </p>
                    <button class="bg-[#2EBB77] text-white font-medium px-5 py-3 rounded-xl">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION T-SHIRT PRINTING MADE EASY----------------------------------------------------------------------------- -->

    <section class="bg-[#F5F5F5]">
        <div class="text-center lg:text-start max-w-[70em] mx-auto p-5 space-y-8">
            <h1 class="text-2xl font-bold text-center">
                T-shirt printing made easy.
            </h1>
            <p class="text-[#7E7E7E] text-center">
                Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
                adipiscing eliet, <br />
                cowec tetopak ec tetur duis necgi
            </p>
            <div class="lg:flex lg:gap-0 gap-12">
                <div class="space-y-6">
                    <h2 class="text-xl font-bold p-5">Premium quality custom t-shirts</h2>
                    <div class="space-y-6 max-w-[30em] mx-auto bg-white rounded-lg p-5">
                        <h2 class="text-xl font-bold">Easy to create & customize</h2>
                        <p class="text-[#7E7E7E]">
                            Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
                            adipiscing eliet
                        </p>
                    </div>
                    <h2 class="text-xl font-bold p-5">Thousands of free templates</h2>
                    <h2 class="text-xl font-bold p-5">Free standard shipping</h2>
                </div>
                <img src="../../assets/images/tablist.svg" alt="" class="w-[40em] mx-auto" />
            </div>
        </div>
    </section>

    <!-- SECTION OUR PICKS FOR YOU----------------------------------------------------------------------------- -->

    <section class="text-center lg:text-start max-w-[70em] mx-auto p-5 space-y-8">
        <div class="p-5 space-y-10">
            <h1 class="text-2xl font-bold text-center">Our picks for you</h1>
            <p class="text-[#7E7E7E] text-center">
                Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
                adipiscing eliet, <br />
                cowec tetopak ec tetur duis necgi
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                <div class="space-y-2">
                    <img src="../../assets/images/sweetshirt.svg" alt="" class="rounded-lg" />
                    <p class="font-bold text-sm text-center">
                        Premium Crewneck Sweatshirt
                    </p>
                    <p class="text-center">
                        <span class="text-[#2EBB77] font-bold">$29.00</span> &nbsp;
                        <del class="text-[#9B9B9B] font-bold">$39.00</del>
                    </p>
                </div>
                <div class="space-y-2">
                    <img src="../../assets/images/cotontee.svg" alt="" class="rounded-lg" />
                    <p class="text-center text-sm font-bold">Midweight Cotton Tee</p>
                    <p class="font-bold text-center">$26.00 – $29.00</p>
                    <p class="flex gap-3 justify-center">
                        <img src="../../assets/icons/point_noir.svg" alt="" />
                        <img src="../../assets/icons/point_marron.svg" alt="" />
                        <span class="font-medium">+3</span>
                    </p>
                </div>
                <div class="space-y-2">
                    <img src="../../assets/images/sleevetee.svg" alt="" class="rounded-lg" />
                    <p class="font-bold text-sm text-center">Youth Short Sleeve Tee</p>
                    <p class="font-bold text-center">$26.00 – $29.00</p>
                    <p class="flex gap-3 justify-center">
                        <img src="../../assets/icons/point_noir.svg" alt="" />
                        <img src="../../assets/icons/point_marron.svg" alt="" />
                        <span class="font-medium">+3</span>
                    </p>
                </div>
                <div class="space-y-2">
                    <img src="../../assets/images/jerseytee.svg" alt="" class="rounded-lg" />
                    <p class="text-center text-sm font-bold">Fine Jersey Tee</p>
                    <p class="text-center font-bold">$31.00</p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION THOUSANDS OF FREE TEMPLATES----------------------------------------------------------------------------- -->

    <section class="text-center lg:text-start max-w-[70em] mx-auto p-5 space-y-8">
        <Card />
    </section>

    <!-- SECTION CUSTOMIZE PRODUCTS----------------------------------------------------------------------------- -->

    <section class="bg-[#F5F5F5]">
        <div class="lg:flex justify-between text-center lg:text-start max-w-[70em] p-5 mx-auto space-y-8">
            <div class="max-w-[20em] mx-auto lg:mt-32 space-y-6 mb-5">
                <h1 class="text-2xl leading-10 font-bold">
                    Why customize products with TeeSpace?
                </h1>
                <p class="text-[#4B5563]">
                    Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
                    adipiscing eliet duis necgi det, con
                </p>
                <button
                    class="flex items-center gap-2 bg-[#2EBB77] p-3 rounded-lg text-white font-medium text-sm mx-auto lg:mx-0">
                    View All Features<img src="../../assets/icons/arrow_white.svg" alt="" />
                </button>
            </div>

            <div class="flex flex-col gap-5">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[40em] mx-auto">
                    <div class="max-w-[18em] space-y-2 p-4 shadow-md text-[#4B5563] rounded-lg">
                        <img src="../../assets/icons/dollar.svg" alt="" class="" />
                        <h1 class="text-xl font-bold text-black">NO Die & plate charges</h1>
                        <p class="text-[13px]">
                            Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix
                            adipiscing eliet duis necgi det, con
                        </p>
                    </div>

                    <div class="max-w-[18em] space-y-2 p-4 shadow-md text-[#4B5563] rounded-lg">
                        <img src="../../assets/icons/high_quality.svg" alt="" class="" />
                        <h1 class="text-xl font-bold text-black">
                            High quality offset printing
                        </h1>
                        <p class="text-[13px]">
                            Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix
                            adipiscing eliet duis necgi det, con
                        </p>
                    </div>

                    <div class="max-w-[18em] space-y-2 p-4 shadow-md text-[#4B5563] rounded-lg">
                        <img src="../../assets/icons/securepaiement.svg" alt="" class="" />
                        <h1 class="text-lg font-bold text-black">Secure payment</h1>
                        <p class="text-[13px]">
                            Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix
                            adipiscing eliet duis necgi det, con
                        </p>
                    </div>

                    <div class="max-w-[18em] space-y-2 p-4 shadow-md text-[#4B5563] rounded-lg">
                        <img src="../../assets/icons/customize.svg" alt="" class="" />
                        <h1 class="text-lg font-bold text-black">Custom size & style</h1>
                        <p class="text-[13px]">
                            Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix
                            adipiscing eliet duis necgi det, con
                        </p>
                    </div>

                    <div class="max-w-[18em] space-y-2 p-4 shadow-md text-[#4B5563] rounded-lg">
                        <img src="../../assets/icons/fast_free_delivery.svg" alt="" class="" />
                        <h1 class="text-lg font-bold text-black">Fast & free delivery</h1>
                        <p class="text-[13px]">
                            Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix
                            adipiscing eliet duis necgi det, con
                        </p>
                    </div>

                    <div class="max-w-[18em] space-y-2 p-4 shadow-md text-[#4B5563] rounded-lg">
                        <img src="../../assets/icons/minimum_order.svg" alt="" class="" />
                        <h1 class="text-lg font-bold text-black">
                            Low minimum order quantity
                        </h1>
                        <p class="text-[13px]">
                            Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix
                            adipiscing eliet duis necgi det, con
                        </p>
                    </div>
                </div>

                <div class="bg-own bg-no-repeat bg-center h-[15em] p-6 rounded-lg lg:space-y-5 space-y-2">
                    <h1 class="text-2xl font-bold">
                        Create your own <br />
                        custom products online!
                    </h1>
                    <p class="text-[#7E7E7E] text-[13px]">
                        Free and easy way to bring your ideas to life
                    </p>
                    <button
                        class="flex items-center gap-2 bg-[#2EBB77] p-3 rounded-lg text-white font-medium text-sm mx-auto lg:mx-0">
                        Order Custom Shirts<img src="../../assets/icons/arrow_white.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION MORE RESSOURCES----------------------------------------------------------------------------- -->

    <section class="text-center lg:text-start max-w-[70em] mx-auto space-y-8">
        <div class="p-6 space-y-10">
            <h1 class="text-2xl font-bold text-center">More resources</h1>
            <p class="text-[#7E7E7E] text-center">
                Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
                adipiscing eliet, <br />
                cowec tetopak ec tetur duis necgi
            </p>

            <div class="lg:flex lg:justify-between lg:items-center space-y-5 lg:space-y-0">
                <div>
                    <div class="max-w-[30em] mx-auto lg:flex gap-4">
                        <img src="../../assets/images/acticel.svg" alt="" class="w-[15em] mx-auto" />
                        <div class="space-y-4">
                            <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg">
                                Design Services
                            </p>
                            <h2 class="text-lg font-bold">
                                Make yourself happy with our T-shirt customer…
                            </h2>
                            <div class="flex justify-center lg:justify-start gap-4 items-center">
                                <img src="../../assets/icons/avatar.svg" alt="" />
                                <p class="text-[12px]">
                                    <span class="text-[#7E7E7E]">by </span>admin <br />
                                    <span class="text-[#7E7E7E]">August 20, 2022</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="max-w-[30em] mx-auto lg:flex gap-4">
                        <img src="../../assets/images/acticel_1.svg" alt="" class="w-[15em] mx-auto" />
                        <div class="space-y-4">
                            <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg mr-3">
                                Print Company
                            </p>
                            <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg">
                                Print Shop
                            </p>
                            <h2 class="text-lg font-bold">
                                Are you ready to make it awesome with
                            </h2>
                            <div class="flex justify-center lg:justify-start gap-4 items-center">
                                <img src="../../assets/icons/avatar.svg" alt="" />
                                <p class="text-[12px]">
                                    <span class="text-[#7E7E7E]">by </span>admin <br />
                                    <span class="text-[#7E7E7E]">August 20, 2022</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION WHAT PEOPLE ARE SAYING----------------------------------------------------------------------------- -->

    <section class="text-center lg:text-start max-w-[70em] mx-auto space-y-8 p-8">
        <div class="space-y-4">
            <h1 class="text-2xl font-bold text-center">What People Are Saying</h1>
            <p class="text-[#7E7E7E] text-center">
                We provide support for more than 15K+ Businesses.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 justify-items-center">
                <div class="max-w-[23em] shadow-xl p-5 rounded-lg box">
                    <div class="flex justify-center gap-5 items-center">
                        <img src="../../assets/images/dean.svg" alt="" />
                        <p class="font-bold">
                            Dean D.
                            <span class="font-extralight text-[#7E7E7E]">Director</span>
                        </p>
                    </div>
                    <p class="max-w-[18em] mx-auto">
                        “ Great quality products - Flags, programs for exceptional
                        capacities, birthday, and occasion welcome are largely still
                        mainstream on paper.”
                    </p>
                </div>

                <div class="max-w-[23em] shadow-xl p-5 rounded-lg box">
                    <div class="flex justify-center gap-5 items-center">
                        <img src="../../assets/images/christian.svg" alt="" />
                        <p class="font-bold">
                            Cristian L.<span class="font-extralight text-[#7E7E7E]">Manager</span>
                        </p>
                    </div>
                    <p class="max-w-[18em] mx-auto">
                        “ Best services ever - Flags, programs for exceptional capacities,
                        birthday, and are largely still mainstream on paper occasion
                        welcome.”
                    </p>
                </div>

                <div class="max-w-[23em] shadow-xl p-5 rounded-lg box md:hidden lg:block">
                    <div class="flex justify-center gap-5 items-center">
                        <img src="../../assets/images/leonel.svg" alt="" />
                        <p class="font-bold">
                            Leonel R.<span class="font-extralight text-[#7E7E7E]">Designer</span>
                        </p>
                    </div>
                    <p class="max-w-[18em] mx-auto">
                        “ Top noth support - Flags, programs for, birthday, and occasion
                        welcome are largely still mainstream on paper exceptional
                        capacities.”
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION ENJOY UP YOUR VACCATION----------------------------------------------------------------------------- -->

    <section class="bg-[#B479D926]">
        <EnjoyCard />
    </section>

    <!-- SECTION COMPANIES----------------------------------------------------------------------------- -->

    <section class="max-w-[70em] mx-auto">
        <div class="grid grid-cols-2 lg:grid-cols-5 justify-items-center p-6">
            <p class="font-bold">Facebook</p>
            <p class="font-bold">Twitter</p>
            <p class="font-bold">Instagram</p>
            <p class="font-bold">Instagram</p>
            <p class="font-bold hidden lg:block">Pinterest</p>
        </div>
    </section>

    <!--FOOTER SECTION ----------------------------------------------------------------------------- -->

    <footer class="bg-[#F5F5F5]">
        <myfooter />
    </footer>
</template>

<script>
import Navbar from "../Navbar.vue";
import Card from "../Card.vue";
import myfooter from "../myfooter.vue";
import EnjoyCard from "../EnjoyCard.vue";
import MyHeader from '../MyHeader.vue';

export default {
    data() {
        return {
            stats: [
                { name: 'Collections', value: 0, target: 4 },
                { name: 'Items trusted  to deliver', value: 0, target: 9 },
            ]
        };
    },
    mounted() {
        this.incrementStats();
    },
    methods: {
        incrementStats() {
            this.stats.forEach((stat) => {
                const incrementInterval = setInterval(() => {
                    if (stat.value < stat.target) {
                        stat.value++;
                    } else {
                        clearInterval(incrementInterval);
                    }
                }, 100);
            });
        }
    },
    components: {
        MyHeader,
        Navbar,
        Card,
        myfooter,
        EnjoyCard,
    },
};
</script>

<style></style>
