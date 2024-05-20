<template>
    <header>
        <myheader />
    </header>

    <section class="bg-btn_color">
        <HeroSection :title="title" :subtitle="subtitle" />
    </section>

    <section class="max-w-[75em] mx-auto flex md:gap-14 lg:gap-20 p-5">

        <div class="card justify-content-center relative max-w-[15em]">
            <DSideBar />
            <MyAsideBar />
        </div>

        <section class="max-w-[55em] mx-auto">
            <div>
                <div class="lg:flex gap-10 space-y-5 lg:space-y-0">

                    <div>
                        <div class=" max-w-[27em] mx-auto gap-4">
                            <img src="../../assets/images/acticel.svg" alt="" class="w-[27em]">

                            <div class="space-y-4">

                                <p class="text-primary_color bg-btn_color text-[10px] p-1 inline rounded-lg">Design
                                    Services</p>
                                <div class="flex gap-2 items-start">
                                    <img src="../../assets/icons/etoile_verte.svg" alt="">
                                    <h2 class="font-bold">Make yourself happy with our T-shirt customer designer</h2>
                                </div>

                                <div class="flex flex-wrap justify-center lg:justify-start items-center">
                                    <span class="text-third_color text-[15px]">August 20, 2022 --- </span>

                                    <p class="text-[14px]"><span class="text-third_color">&nbsp; by </span>admin</p>
                                    <div class="flex sm:gap-5 items-center">
                                        <img src="../../assets/icons/etoile_verte.svg" alt="" class="w-[1em]">
                                        <p class="text-primary_color">Sticky</p>
                                    </div>
                                </div>

                                <p class="text-[13px] text-third_color">
                                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                                </p>

                                <RouterLink to="/blog-details">
                                    <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">
                                        Read More
                                    </button>
                                </RouterLink>
                                <hr>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class=" max-w-[27em] mx-auto gap-4">
                            <img src="../../assets/images/acticel_1.svg" alt="" class="w-[27em]">

                            <div class="space-y-4">

                                <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg mr-3">Print
                                    Company</p>
                                <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg">Print Shop</p>
                                <h2 class="font-bold">Are you ready to make it awesome with us</h2>

                                <div class="flex justify-center lg:justify-start items-center">
                                    <span class="text-third_color text-[15px]">August 20, 2022 --- </span>
                                    <p class="text-[14px]"><span class="text-third_color">&nbsp; by </span>admin </p>
                                </div>

                                <p class="text-[13px] text-third_color">
                                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                                </p>
                                <div class="space-y-10 mt-2">
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

                <div class="lg:flex gap-10 space-y-5 lg:space-y-0 py-8">

                    <div>
                        <div class=" max-w-[27em] mx-auto gap-4">
                            <img src="../../assets/images/print_company.svg" alt="" class="w-[27em]">

                            <div class="space-y-4">

                                <p class="text-primary_color bg-btn_color text-[10px] p-1 inline rounded-lg">Print
                                    Company</p>
                                <h2 class="font-bold text-[14px]">The best custom T-shirt designer WordPress theme</h2>
                                <div class="flex justify-center lg:justify-start items-center">
                                    <span class="text-third_color text-[15px]">August 20, 2022 --- </span>
                                    <p class="text-[14px]"><span class="text-third_color">&nbsp; by </span>admin</p>
                                </div>

                                <p class="text-[13px] text-third_color">
                                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                                </p>

                                <RouterLink to="/blog-details">
                                    <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">
                                        Read More
                                    </button>
                                </RouterLink>
                                <hr>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class=" max-w-[27em] mx-auto gap-4">
                            <img src="../../assets/images/print_shop.svg" alt="" class="w-[27em]">

                            <div class="space-y-4">

                                <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg mr-3">Print Shop
                                </p>
                                <h2 class="font-bold text-[14px]">We can make your work better</h2>

                                <div class="flex justify-center lg:justify-start items-center">
                                    <span class="text-third_color text-[15px]">August 20, 2022 ---</span>
                                    <p class="text-[14px]"><span class="text-third_color">&nbsp; by </span>admin </p>
                                </div>

                                <p class="text-[13px] text-third_color">
                                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                                </p>
                                <div class="space-y-9 mt-2">
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

                <div class="lg:flex gap-10 space-y-5 lg:space-y-0 py-8">

                    <div>
                        <div class=" max-w-[27em] mx-auto gap-4">
                            <img src="../../assets/images/print_shop.svg" alt="" class="w-[27em]">

                            <div class="space-y-4">

                                <p class="text-primary_color bg-btn_color text-[10px] p-1 inline rounded-lg">Print
                                    Company</p>
                                <h2 class="font-bold text-[14px]">Let say it your way</h2>
                                <div class="flex justify-center lg:justify-start items-center">
                                    <span class="text-third_color text-[15px]">August 20, 2022 ---</span>
                                    <p class="text-[14px]"><span class="text-third_color"> &nbsp;by </span>admin</p>
                                </div>

                                <p class="text-[13px] text-third_color">
                                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                                </p>

                                <RouterLink to="/blog-details">
                                    <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">
                                        Read More
                                    </button>
                                </RouterLink>
                                <hr>
                            </div>
                        </div>
                    </div>

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
                <!-- 
                <div class="grid grid-cols-4 w-12 mx-auto justify-items-center gap-20 font-bold">
                    <div><span class="w-16 px-4 bg-black py-2 text-white rounded-full text-center box">1</span></div>
                    <div>2</div>
                    <div>3</div>
                    <p class="flex gap-2">Next <span class="text-third_color">>></span></p>
                </div> -->
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
export default {
    data() {
        return {
            guillemets: guillemets,
            visible: false,
            title: 'BLOG',
            subtitle: 'BLOG',
        }
    },
    components: {
        myheader,
        myfooter,
        MyAsideBar,
        DSideBar,
        HeroSection,
    }

}
</script>

<style></style>