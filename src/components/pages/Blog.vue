<template>
    <header>
        <myheader />
    </header>

    <section class="bg-btn_color">
        <HeroSection :title="title" :subtitle="subtitle" />
    </section>
    <ToogleButton />
    <section class="max-w-[75em] mx-auto flex md:gap-14 lg:gap-20 p-5">

        <div class="card justify-content-center relative max-w-[15em]">
            <DSideBar />
            <MyAsideBar />
        </div>

        <section class="max-w-[55em] mx-auto">

                <div class="grid grid-cols-1 md:grid-cols-2  gap-5">
                    <Details v-for="(element, index) in details" :key="index" :detail="element" />

                    <div>

                        <div class=" max-w-[27em] mx-auto gap-4 space-y-4">
                            <div class="flex items-center gap-5 bg-harutheme rounded-lg">
                                <div class="bg-primary_color p-4 rounded-lg">
                                    <img src="../../assets/icons/Symbol.svg" alt="" class="">
                                </div>
                                <p class="uppercase font-bold underline">HaruTheme</p>
                            </div>

                            <div class="space-y-4">

                                <div class="flex justify-center lg:justify-start items-center">
                                    <span class="text-third_color text-[15px]">August 20, 2022 ---</span>
                                    <p class="text-[14px]"><span class="text-third_color">&nbsp; by </span>admin </p>
                                </div>
                                <h2 class="font-bold">How to make a T-shirt design online</h2>
                                <p class="text-[13px] text-third_color">
                                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                                </p>
                                <div class="space-y-56 mt-2">
                                    <RouterLink to="/blog-details">
                                        <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">
                                            Read More
                                        </button>
                                    </RouterLink>
                                    <hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </section>

    <footer class="bg-[#F5F5F5]">
        <myfooter />
    </footer>
</template>

<script>
import HeroSection from '../HeroSection.vue';
import guillemets from '../../assets/icons/guillemets.svg'
import myheader from '../myheader.vue'
import myfooter from '../myfooter.vue'
import MyAsideBar from '../MyAsideBar.vue';
import DSideBar from '../DSideBar.vue';
import Details from '../Details.vue';
import ToogleButton from '../ToogleButton.vue';
import { ref, provide } from 'vue'
export default {
    data() {
        return {
            guillemets: guillemets,
            visible: false,
            title: 'BLOG',
            subtitle: 'BLOG',

            details: [
                {
                    dtitle: "Design Services",
                    dsubtitle: "Make yourself happy with our T-shirt customer designer",
                    pictures: "src/assets/images/acticel.svg",
                },

                {
                    dtitle: "Print Company",
                    dtitle1: "Print Shop",
                    dsubtitle: "Are you ready to make it awesome with us?",
                    pictures: "src/assets/images/acticel_1.svg",
                },

                {
                    dtitle: "Print Company",
                    dsubtitle: "The best custom T-shirt designer WordPress theme",
                    pictures: "src/assets/images/print_company.svg",
                },

                {
                    dtitle: "Print Shop",
                    dsubtitle: "We can make your work better",
                    pictures: "src/assets/images/print_shop.svg",
                },

                {
                    dtitle: "Print Company",
                    dsubtitle: "Print Company",
                    pictures: "src/assets/images/print_shop.svg",
                },
            ],
        }
    },
    components: {
        myheader,
        myfooter,
        MyAsideBar,
        DSideBar,
        HeroSection,
        Details,
        ToogleButton,
    },

    setup() {
        const visible = ref(false);
        provide('visible', visible);

        return {
            visible,
        };
    }

}
</script>

<style></style>