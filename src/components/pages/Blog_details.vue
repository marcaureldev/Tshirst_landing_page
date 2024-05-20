<template>
    <header>
        <myheader />
    </header>

    <section class="bg-btn_color">
        <HeroSection :title="title" :subtitle="subtitle" />
    </section>

    <section class="flex md:gap-10 max-w-70 mx-auto p-5">
        <MyAsideBar />
        <DSideBar />

        <section class="">
            <div class="space-y-6 p-2 text-center">
                <div class="space-y-4">
                    <p class="text-primary_color bg-btn_color text-sm p-2 inline rounded-xl">
                        Design Services
                    </p>
                    <h1 class="font-bold md:text-3xl">What make you beautiful with us</h1>
                    <div class="flex flex-wrap justify-center gap-2 items-center">
                        <span class="text-third_color text-sm">August 20, 2022 --- </span>
                        <p class="">
                            <span class="text-third_color text-sm">&nbsp; by </span>admin
                        </p>
                        <div class="flex gap-2 items-center">
                            <img src="../../assets/icons/comment_icon.svg" alt="" />
                            <p class="font-bold text-sm">3 comments</p>
                        </div>
                    </div>
                </div>
                <img src="../../assets/images/beautiful.svg" alt="" class="w-full mx-auto" />
                <p class="text-third_color text-start text-sm">
                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh,
                    idae gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id
                    justo rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                </p>
            </div>

            <div class="space-y-6">
                <div>
                    <img src="../../assets/icons/virgule.svg" alt="" class="p-5 mx-auto" />
                    <h1 class="md:text-xl font-bold text-center">
                        I think it’s important people see themselves in film, but it’s even
                        more important they see people they maybe don’t know as well.
                    </h1>
                </div>

                <div class="space-y-4">
                    <p class="text-third_color text-start text-sm leading-relaxed">
                        Fusce eget malesuada eros. Vivamus eros dolor, auctor aliquet dolor
                        sit amet, euismod imperdiet ex. Nam sed nulla sed massa suscipit
                        feugiat. Mauris et nunc ornare, placerat ex ac, interdum magna.
                        Vestibulum urna massa, hendrerit sed fringilla in, mollis vitae
                        tellus. Vestibulum mattis nulla elementum tristique fringilla. Morbi
                        in sollicitudin erat. Ut quis tristique mauris. Proin risus purus,
                        iaculis a orci ut, cursus bibendum panisl. Duis aliquam gravida eros
                        eget molestie. Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Suspendisse pharetra, arcu
                        eu porta aliquet, eros dui tincidunt purus, eu vehicula magna nisl
                        in purus.
                    </p>

                    <p class="text-third_color text-start text-sm leading-relaxed">
                        Vivamus eros dolor, auctor aliquet dolor sit amet, euismod imperdiet
                        ex. Nam sed nulla sed massa suscipit feugiat. Mauris et nunc ornare,
                        placerat ex ac, interdum magna. Vestibulum urna massa, hemolli
                    </p>
                </div>

                <div class="md:flex justify-between items-center p-2 space-y-4 lg:space-y-0">
                    <div class="flex gap-4">
                        <p class="text-[14px] text-third_color">#company</p>
                        <p class="text-[14px] text-third_color">#printing</p>
                        <p class="text-[14px] text-third_color">#printshop</p>
                    </div>
                    <div class="flex gap-3 items-center">
                        <p class="font-bold text-[14px]">Share:</p>
                        <img src="../../assets/icons/facebook.svg" alt="" class="w-10" />
                        <img src="../../assets/icons/twitter.svg" alt="" class="w-10" />
                        <img src="../../assets/icons/pinterest.svg" alt="" class="w-10" />
                        <img src="../../assets/icons/linkedin.svg" alt="" class="w-10" />
                    </div>
                </div>

                <hr />
            </div>

            <div>
                <div class="flex gap-2 py-8">
                    <img src="../../assets/icons/open_arrow.svg" alt="" />
                    <div class="space-y-1">
                        <p class="text-third_color text-[12px]">PREVIOUS</p>
                        <p class="font-bold">Post Gallery</p>
                    </div>
                </div>
                <hr />
            </div>

            <div class="md:flex gap-5 items-center p-4">
                <img src="../../assets/icons/avatar.svg" alt="" />
                <div class="text-third_color text-[13px] space-y-2">
                    <p class="font-bold text-black">admin</p>
                    <p>
                        Suspe ndisse suscipit sagittis leo sit met condimentum essum
                        consecte uspe ndisse suscipit sagittis. Suscipit sagittis leo sit
                        met condimentum
                    </p>
                    <p class="font-bold text-black"><a href="#">Website</a></p>
                </div>
            </div>
            <hr />

            <div class="space-y-5 p-5">
                <h1 class="font-bold text-center text-xl">You may also like this</h1>
                <div class="flex flex-col md:flex-row justify-center gap-5 items-center space-y-5">
                    <BDComponent v-for="(element, index) in tableau" :key="index" :propriete="element" />
                </div>
            </div>
            <hr />


            <div class="py-5">
                <h1 class="font-bold text-center text-xl">There are 3 comments</h1>
                <AdminComponent  v-for="(element, i) in admintab" :key="i" :admin_props="element" />
            </div>
        </section>

        <!-- <section class="max-w-55 mx-auto">

            <div>
                <h1 class="font-bold text-center text-xl">Leave us a comment</h1>

                <form action="" class="w-[50em] mx-auto">
                    <div class="lg:flex gap-8 p-5">
                        <input type="text" name="nom" placeholder="Enter Your Name*"
                            class="outline-none w-[27em] h-10 p-5 rounded-lg bg-btn_color" />
                        <input type="email" name="email" placeholder="Enter Your Email*"
                            class="outline-none w-[27em] h-10 p-5 rounded-lg bg-btn_color" />
                    </div>

                    <input type="text" name="message" class="h-32 p-5 bg-btn_color rounded-lg outline-none" />
                    <div class="flex gap-2 items-center">
                        <input type="radio" name="" />
                        <p class="text-third_color text-[14px] py-5">
                            Save my name, email, and website in this browser for the next time
                            I comment.
                        </p>
                    </div>
                </form>
            </div>
        </section> -->
    </section>

    <footer class="bg-[#F5F5F5]">
        <myfooter />
    </footer>
</template>

<script>
import myheader from "../myheader.vue";
import MyAsideBar from "../MyAsideBar.vue";
import DSideBar from "../DSideBar.vue";
import myfooter from "../myfooter.vue";
import HeroSection from "../HeroSection.vue";
import BDComponent from "../BDComponent.vue";
import AdminComponent from '../AdminComponent.vue';
export default {
    data() {
        return {
            title: "Blog Details",
            subtitle: "Design Services",

            tableau: [
                {
                    image: "src/assets/images/man_woman.svg",
                    text: "Design Services",
                    text1: "HaruTheme",
                    text2: "10 Steps to Writing the Perfect Prospectus",
                },

                {
                    image: "src/assets/images/tshirt_black_white.svg",
                    text: "Design Services",
                    text2: "Watch the Sony a9 Livestream Event Online",
                },
            ],

            admintab: [
                {
                    img: "src/assets/icons/avatar.svg",
                    paragraphe:
                        "Suspe ndisse suscipit sagittis leo sit met condimentum essum consecte uspe ndisse suscipit sagittis. Suscipit sagittis leo sit met condimentum",
                    date: "July 14, 2017",
                    reponse: "Reply",
                },

                {
                    img: "src/assets/icons/avatar.svg",
                    paragraphe:
                        "Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae gravida mi purus sit amet erat. Ut dictum nisi massa, vitae pusemat fringilla lobor",
                    date: "July 14, 2017",
                    reponse: "Reply",
                },

                {
                    img: "src/assets/icons/avatar.svg",
                    paragraphe:
                        "Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae gravida mi purus sit amet erat. Ut dictum nisi massa, vitae pusemat fringilla lobor",
                    date: "July 14, 2017",
                    reponse: "Reply",
                },
            ],
        };
    },

    components: {
        myheader,
        myfooter,
        HeroSection,
        MyAsideBar,
        DSideBar,
        BDComponent,
        AdminComponent,
    },
};
</script>

<style></style>
