<template>
    <header>
        <myheader />
    </header>

    <section class="bg-secondary_color">
        <HeroSection :title="'Pricing Plans'" :subtitle="'Pricing Plans'" />
    </section>


    <section>

        <div
            class="lg:flex lg:justify-between bg-cercle bg-no-repeat bg-right max-w-[70em] mx-auto py-20 space-y-5 lg:space-y-0">

            <div class="max-w-[20em] mx-auto text-center lg:text-start space-y-5">
                <p class="flex justify-center lg:justify-start items-center gap-3"> <img
                        src="../../assets/icons/drapeau.svg" alt="">Choose a Plan</p>
                <h1 class="text-4xl font-bold">Simple pricing for everyone</h1>
                <p class="text-third_color text-[14px]">
                    T-shirt Printing for Everyone. Get a head start
                    with free design templates you can
                    customize in a few clicks.
                </p>
                <p class="flex justify-center lg:justify-start items-center gap-2 text-primary_color text-[15px]">
                    Learn More <img src="../../assets/icons/fleche_verte.svg" alt="">
                </p>
            </div>

            <div class="md:flex gap-12 max-w-[50em] m box rounded-lg bg-white mx-auto access">

                <div class="space-y-2 p-5 max-w-[25em] mx-auto">
                    <h2 class="text-2xl font-bold">What’s inside</h2>
                    <p class="flex gap-3 items-center font-medium"><img src="../../assets/icons/item.svg" alt="">Full
                        access to all features</p>
                    <p class="flex gap-3 items-center font-medium"><img src="../../assets/icons/item.svg" alt="">Mix and
                        match colors, sizes, and designs</p>
                    <p class="flex gap-3 items-center font-medium"><img src="../../assets/icons/item.svg" alt="">Fast
                        and free standard shipping</p>
                    <p class="flex gap-3 items-center font-medium"><img src="../../assets/icons/item.svg"
                            alt="">Customer happiness guarantee</p>
                    <p class="flex gap-3 items-center font-medium"><img src="../../assets/icons/item.svg" alt="">Use on
                        unlimited projects</p>
                    <p class="flex gap-3 items-center font-medium"><img src="../../assets/icons/item.svg" alt="">No
                        credit card required</p>
                    <p class="flex gap-3 items-center font-medium"><img src="../../assets/icons/item.svg"
                            alt="">Friendly supports</p>
                    <button class="px-5 py-3 rounded-lg bg-primary_color text-white w-full">Get Started</button>
                </div>

                <div class="space-y-6 max-w-[15em] mx-auto p-5">

                    <div class="space-y-2">
                        <h2 class="text-xl font-bold">Access to update</h2>
                        <p class="text-third_color text-[15px]">Updates come to the email.</p>
                        <label class="flex cursor-pointer select-none items-center">
                            <div class="relative box rounded-lg max-w-[12em]">
                                <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
                                <div class="block h-12 w-48 rounded-lg bg-secondary_color font-bold p-2"> 3 months</div>
                                <div :class="{ '-translate-x-full !bg-primary': isChecked }"
                                    class="dot absolute right-1 top-1 h-9 w-[5.75em] rounded-lg bg-white transition p-1 font-bold">
                                    Forever</div>
                            </div>
                        </label>
                    </div>

                    <div class="space-y-2 ">
                        <h2 class="text-xl font-bold">Lifetime license</h2>
                        <p class="text-third_color text-[15px]">Lorem ipsum det, radipiscing elit</p>
                        <label class="flex cursor-pointer select-none items-center">
                            <div class="relative box rounded-lg max-w-[12em]">
                                <input type="checkbox" class="sr-only" @change="handleCheckboxChange1" />
                                <div class="block h-12 w-48 rounded-lg bg-secondary_color font-bold p-2"> Personal</div>
                                <div :class="{ '-translate-x-full !bg-primary': isChecked1 }"
                                    class="dot absolute right-1 top-1 h-9 w-[5.75em] rounded-lg bg-white transition p-1 font-bold">
                                    Corporate</div>
                            </div>
                        </label>
                    </div>

                    <div class="flex items-baseline gap-3">
                        <h1 class="text-5xl font-bold">$68</h1>
                        <del class="text-third_color font-medium">$88</del>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-circle bg-no-repeat bg-bottom bg-unregular1 ">
        <div class="max-w-[70em] mx-auto p-10">
            <div>
                <h1 class="text-4xl font-bold text-center p-5">Simple pricing foreveryone</h1>
                <p class="text-third_color text-[15px] text-center">Choose a plan and get started</p>
            </div>

            <div class="lg:flex lg:justify-between lg:items-center py-8 space-y-5 lg:space-y-0">

                <div class="max-w-[20em] mx-auto p-8 space-y-4 bg-white rounded-xl">
                    <p class="text-center font-bold">Personal</p>
                    <div class="flex justify-center items-baseline gap-3 p-5">
                        <h1 class="text-4xl font-bold">$12.99</h1>
                        <p class="text-third_color text-[15px]">/user</p>
                    </div>
                    <hr class="">
                    <p class="flex gap-3 items-center font-normal text-[15px]"><img src="../../assets/icons/item.svg"
                            alt="">Free licensed icons</p>
                    <p class="flex gap-3 items-center font-normal text-[14px]"><img src="../../assets/icons/item.svg"
                            alt="">Fast and free standard shipping</p>
                    <p class="flex gap-3 items-center font-normal text-[15px]"><img src="../../assets/icons/item.svg"
                            alt="">No credit card required</p>
                    <p class="flex gap-3 items-center font-normal text-[15px]"><img src="../../assets/icons/item.svg"
                            alt="">Friendly supports</p>
                    <button class="px-3 py-2 rounded-lg bg-[#2EBB771A] font-bold w-full">Get Started</button>
                </div>

                <div class="max-w-[20em] mx-auto p-8 space-y-4 bg-white rounded-xl">
                    <button class="text-white bg-black rounded-lg font-bold px-4 py-2 sm:ml-40">Popular</button>
                    <p class="text-center font-bold">Professional</p>
                    <div class="flex justify-center items-baseline gap-3 p-5">
                        <h1 class="text-4xl font-bold">$59.99</h1>
                        <p class="text-third_color text-[15px]">/team</p>
                    </div>
                    <hr class="">
                    <p class="flex gap-3 items-center font-normal text-[15px]"><img src="../../assets/icons/item.svg"
                            alt="">Full access to all features</p>
                    <p class="flex gap-3 items-center font-normal text-[14px]"><img src="../../assets/icons/item.svg"
                            alt="">Fast and free standard shipping</p>
                    <p class="flex gap-3 items-center font-normal text-[15px]"><img src="../../assets/icons/item.svg"
                            alt="">No credit card required</p>
                    <p class="flex gap-3 items-center font-normal text-[15px]"><img src="../../assets/icons/item.svg"
                            alt="">Use on unlimited projects</p>
                    <p class="flex gap-3 items-center font-normal text-[15px]"><img src="../../assets/icons/item.svg"
                            alt="">Team collaboration feature.</p>
                    <p class="flex gap-3 items-center font-normal text-[15px]"><img src="../../assets/icons/item.svg"
                            alt="">Friendly supports</p>
                    <button class="px-3 py-2 rounded-lg bg-primary_color text-white w-full">Get Started</button>
                </div>

                <div class="max-w-[20em] mx-auto p-8 space-y-4 bg-white rounded-xl">
                    <p class="text-center font-bold">Enterprise</p>
                    <div class="flex justify-center items-baseline gap-3 p-5">
                        <h1 class="text-4xl font-bold">$99.99</h1>
                        <p class="text-third_color text-[15px]">/team</p>
                    </div>
                    <hr class="">
                    <p class="flex gap-3 items-center font-normal text-[15px]"><img src="../../assets/icons/item.svg"
                            alt="">All features in Pro Plan.</p>
                    <p class="flex gap-3 items-center font-normal text-[14px]"><img src="../../assets/icons/item.svg"
                            alt="">FUse on unlimited projects</p>
                    <p class="flex gap-3 items-center font-normal text-[15px]"><img src="../../assets/icons/item.svg"
                            alt="">Team collaboration feature.</p>
                    <p class="flex gap-3 items-center font-normal text-[15px]"><img src="../../assets/icons/item.svg"
                            alt="">Friendly supports</p>
                    <button class="px-3 py-2 rounded-lg bg-[#2EBB771A] font-bold w-full">Get Started</button>
                </div>
            </div>
        </div>
    </section>

    <section class="max-w-[70em] mx-auto p-10">

        <div class="lg:flex lg:justify-between lg:items-center space-y-5 lg:space-y-0">

            <div class="max-w-[25em] mx-auto p-3 space-y-5">
                <img src="../../assets/images/plan_getstarted.svg" alt="" class="w-[20em]">
                <h1 class="text-2xl font-bold">Choose a plan & get started</h1>
                <p class="text-third_color text-[13px]">
                    Printing organization mottos While the Internet might assume
                    control of numerous parts of printing, a few things are as yet
                    favored on paper.
                </p>
            </div>

            <div class="space-y-5 sm:w-[30em] mx-auto lg:mx-0">

                <div class="sm:w-[30em] box rounded-lg px-3 py-1">

                    <div class="flex justify-between items-center">
                        <div class="flex gap-2 items-center">
                            <input type="radio" name="starter" value="starter">
                            <label for="starter" class="text-xl font-bold">Starter</label>
                        </div>
                        <div class="flex justify-center items-baseline gap-2 p-2">
                            <h1 class="text-2xl font-bold">$37</h1>
                            <p class="text-third_color text-[12px]">/month</p>
                        </div>
                    </div>
                    <p class="text-third_color text-[12px] p-2">Duis vestibulum, massa sit amet bibendum ultrices,
                        mauris lacus varius nunc, dapibus condimentum</p>
                </div>

                <div class="sm:w-[30em] box rounded-lg px-3 py-1">

                    <div class="flex justify-between items-center">
                        <div class="flex gap-2 items-center">
                            <input type="radio" name="standard" value="standard">
                            <label for="standard" class="text-xl font-bold">Standard</label>
                        </div>
                        <div class="flex justify-center items-baseline p-2">
                            <h1 class="text-2xl font-bold">$67</h1>
                            <p class="text-third_color text-[13px]">/month</p>
                        </div>
                    </div>
                    <p class="text-third_color text-[13px] p-2">Duis vestibulum, massa sit amet bibendum ultrices, <br>
                        mauris lacus varius nunc, dapibus condimentum</p>
                </div>

                <div class="sm:w-[30em] box rounded-lg px-3 py-1">

                    <div class="flex justify-between items-center">
                        <div class="flex gap-2 items-center">
                            <input type="radio" name="pro" value="pro">
                            <label for="pro" class="text-xl font-bold">Pro</label>
                        </div>
                        <div class="flex justify-center items-baseline gap-2 p-2">
                            <h1 class="text-2xl font-bold">$99</h1>
                            <p class="text-third_color text-[12px]">/month</p>
                        </div>
                    </div>
                    <p class="text-third_color text-[13px] p-2">Duis vestibulum, massa sit amet bibendum ultrices, <br>
                        mauris lacus varius nunc, dapibus condimentum</p>
                </div>
                <button class="py-3 rounded-lg bg-primary_color text-white w-full text-[15px] font-medium">Purchase
                    now</button>
            </div>
        </div>
    </section>

    <footer class="bg-[#F5F5F5]">
        <myfooter />
    </footer>
</template>

<script setup>
import { ref } from 'vue'
import myheader from '../myheader.vue'
import myfooter from '../myfooter.vue'
import HeroSection from '../HeroSection.vue'

const isChecked = ref(false)

const handleCheckboxChange = () => {
    isChecked.value = !isChecked.value
}

const isChecked1 = ref(false)

const handleCheckboxChange1 = () => {
    isChecked1.value = !isChecked1.value
}
// export default {
//     components: {
//         myheader,
//         myfooter,
//     }

// }
</script>

<style>
@media screen and (max-width: 768px) {
    .access {
        margin: 10px 10px;
    }
}
</style>