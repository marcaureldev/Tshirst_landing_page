<template>
    <header>
        <myheader/>
    </header>

    <section class="bg-btn_color">

        <div class="max-w-[70em] mx-auto p-6">
            <h1 class="text-4xl font-bold text-center">BLOG</h1>
            <p class="flex justify-center gap-2 items-center p-5"> 
                <span class="text-third_color">Home</span> 
                <img src="../../assets/icons/horizontal_line.svg" alt="">BLOG
            </p>
        </div>
    </section>

    <section class="max-w-[70em] mx-auto flex gap-20 p-10">

        <aside class="w-[15em] space-y-2 p-2">
            <div class="space-y-4">
                <label for="search" class="text-xl font-bold">Search</label>
                <div class="w-[15em] flex border-2 p-2 rounded-lg">
                    <input type="text" name="search" placeholder="Search..." class="outline-none">
                    <img src="../../assets/icons/search1.svg" alt="">
                </div>
            </div>

            <h1 class="text-xl font-bold">Categories</h1>

            <div class="p-2 text-third_color">
                <p class="flex justify-between items-center text-[14px]">Design Services<span class="text-black">6</span></p>
                <p class="flex justify-between items-center text-[14px]">HaruTheme<span class="text-black">4</span></p>
                <p class="flex justify-between items-center text-[14px]">Print Company<span class="text-black">3</span></p>
                <p class="flex justify-between items-center text-[14px]">Print Shop<span class="text-black">3</span></p>
                <p class="flex justify-between items-center text-[14px]">Uncategorized<span class="text-black">5</span></p>
            </div>

           <div class="space-y-5">
                <h1 class="text-xl font-bold">Latest Posts</h1>
                <div class="flex gap-4">
                    <img src="../../assets/images/make_beautiful.svg" alt="" class="w-20">
                    <div class="space-y-3">
                        <p class="text-[12px] text-third_color">Design Services</p>
                        <h2 class="text-[13px] font-bold">What make you beautiful with us</h2>
                    </div>
                </div>

                <div class="flex gap-4">
                    <img src="../../assets/images/mirum_est.svg" alt="" class="w-20">
                    <div class="space-y-3">
                        <p class="text-[12px] text-third_color">Design Services, HaruTheme</p>
                        <h2 class="text-[13px] font-bold">Mirum est notare quam littera gothica</h2>
                    </div>
                </div>


                <div class="flex gap-4">
                    <img src="../../assets/images/haruTheme.svg" alt="" class="w-20">
                    <div class="space-y-3">
                        <p class="text-[12px] text-third_color">Design Services, HaruTheme</p>
                        <h2 class="text-[13px] font-bold">Ut wisi enim ad minim veniam</h2>
                    </div>
                </div>

                <div class="flex gap-4">
                    <img src="../../assets/images/haruTheme1.svg" alt="" class="w-20">
                    <div class="space-y-3">
                        <p class="text-[12px] text-third_color">HaruTheme</p>
                        <h2 class="text-[13px] font-bold">How to make a T-shirt design online</h2>
                    </div>
                </div>

                <div class="flex gap-4">
                    <img src="../../assets/images/your_way.svg" alt="" class="w-20">
                    <div class="space-y-3">
                        <p class="text-[12px] text-third_color">Print Company</p>
                        <h2 class="text-[14px] font-bold">Let say it your way</h2>
                    </div>
                </div>

                <img src="../../assets/images/reduce.svg" alt="">
           </div>

           <div class="space-y-4">
                <h1 class="text-xl font-bold">Tags</h1>

                <div class="space-y-2">
                    <div class="grid grid-cols-2 gap-4">
                        <span class="bg-behind_color text-[12px] p-1 text-third_color text-center">Company</span>
                        <span class="bg-behind_color text-[12px] p-1 text-third_color">Design Services</span>
                    </div>
                   <div class="grid grid-cols-3 gap-8">
                        <span class="bg-behind_color text-[12px] p-1 text-third_color w-20">HaruTheme</span>
                        <span class="bg-behind_color text-[12px] p-1 text-third_color w-14">Pricom</span>
                        <span class="bg-behind_color text-[12px] p-1 text-third_color w-14">Print</span>
                   </div>
                   <div class="grid grid-cols-2 gap-2">
                        <span class="bg-behind_color text-[12px] p-1 text-third_color w-14">Printing</span>
                        <span class="bg-behind_color text-[12px] p-1 text-third_color w-16">Printshop</span>
                   </div>
                </div>
           </div>
         

        </aside>

        <section class="max-w-[55em]">
            <div>
                <div class="lg:flex gap-10 space-y-5 lg:space-y-0">

                    <div>
                        <div class=" max-w-[27em] mx-auto gap-4">
                            <img src="../../assets/images/acticel.svg" alt="" class="w-[27em]">

                            <div class="space-y-4">

                                <p class="text-primary_color bg-btn_color text-[10px] p-1 inline rounded-lg">Design Services</p>
                                <div class="flex gap-2 items-start">
                                    <img src="../../assets/icons/etoile_verte.svg" alt="">
                                    <h2 class="font-bold">Make yourself happy with our T-shirt customer designer</h2>
                                </div>

                                <div class="flex justify-center lg:justify-start gap-4 items-center">
                                    <span class="text-third_color text-[15px]">August 20, 2022</span>
                                    <img src="../../assets/icons/horizontal_line.svg" alt="">
                                    <p class="text-[14px]"><span class="text-third_color">by </span>admin</p>
                                    <div class="flex gap-5 items-center">
                                        <img src="../../assets/icons/etoile_verte.svg" alt="" class="w-[1em]">
                                        <p class="text-primary_color">Sticky</p>
                                    </div>
                                </div>

                                <p class="text-[13px] text-third_color">
                                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                                </p>

                                <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">Read More</button>
                                <hr>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class=" max-w-[27em] mx-auto gap-4">
                            <img src="../../assets/images/acticel_1.svg" alt="" class="w-[27em]">

                            <div class="space-y-4">

                                <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg mr-3">Print Company</p>
                                <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg">Print Shop</p>
                                <h2 class="font-bold">Are you ready to make it awesome with us</h2>

                                <div class="flex justify-center lg:justify-start gap-4 items-center">
                                    <span class="text-third_color text-[15px]">August 20, 2022</span>
                                    <img src="../../assets/icons/horizontal_line.svg" alt="">
                                    <p class="text-[14px]"><span class="text-third_color">by </span>admin </p>
                                </div>

                                <p class="text-[13px] text-third_color">
                                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                                </p>
                                <div class="space-y-10 mt-2">
                                    <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">Read More</button>
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

                                <p class="text-primary_color bg-btn_color text-[10px] p-1 inline rounded-lg">Print Company</p>
                                <h2 class="font-bold text-[14px]">The best custom T-shirt designer WordPress theme</h2>
                                <div class="flex justify-center lg:justify-start gap-4 items-center">
                                    <span class="text-third_color text-[15px]">August 20, 2022</span>
                                    <img src="../../assets/icons/horizontal_line.svg" alt="">
                                    <p class="text-[14px]"><span class="text-third_color">by </span>admin</p>
                                </div>

                                <p class="text-[13px] text-third_color">
                                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                                </p>

                                <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">Read More</button>
                                <hr>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class=" max-w-[27em] mx-auto gap-4">
                            <img src="../../assets/images/print_shop.svg" alt="" class="w-[27em]">

                            <div class="space-y-4">

                                <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg mr-3">Print Shop</p>
                                <h2 class="font-bold text-[14px]">We can make your work better</h2>

                                <div class="flex justify-center lg:justify-start gap-4 items-center">
                                    <span class="text-third_color text-[15px]">August 20, 2022</span>
                                    <img src="../../assets/icons/horizontal_line.svg" alt="">
                                    <p class="text-[14px]"><span class="text-third_color">by </span>admin </p>
                                </div>

                                <p class="text-[13px] text-third_color">
                                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                                </p>
                                <div class="space-y-9 mt-2">
                                    <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">Read More</button>
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

                                <p class="text-primary_color bg-btn_color text-[10px] p-1 inline rounded-lg">Print Company</p>
                                <h2 class="font-bold text-[14px]">Let say it your way</h2>
                                <div class="flex justify-center lg:justify-start gap-4 items-center">
                                    <span class="text-third_color text-[15px]">August 20, 2022</span>
                                    <img src="../../assets/icons/horizontal_line.svg" alt="">
                                    <p class="text-[14px]"><span class="text-third_color">by </span>admin</p>
                                </div>

                                <p class="text-[13px] text-third_color">
                                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                                </p>

                                <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">Read More</button>
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

                                <div class="flex justify-center lg:justify-start gap-4 items-center">
                                    <span class="text-third_color text-[15px]">August 20, 2022</span>
                                    <img src="../../assets/icons/horizontal_line.svg" alt="">
                                    <p class="text-[14px]"><span class="text-third_color">by </span>admin </p>
                                </div>
                                <h2 class="font-bold">How to make a T-shirt design online</h2>
                                <p class="text-[13px] text-third_color">
                                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                                </p>
                                <div class="space-y-56 mt-2">
                                    <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">Read More</button>
                                    <hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-4 w-12 mx-auto justify-items-center gap-20 font-bold">
                    <div><span class="w-16 px-4 bg-black py-2 text-white rounded-full text-center box">1</span></div>
                    <div>2</div>
                   <div>3</div>
                   <p class="flex gap-2">Next <span class="text-third_color">>></span></p>
                </div>
            </div>
        </section>
    </section>
 
    <footer class="bg-[#F5F5F5]">
        <myfooter/>
    </footer>
</template>

<script>
import guillemets from '../../assets/icons/guillemets.svg'
import myheader from '../myheader.vue'
import myfooter from '../myfooter.vue'
export default {
    data(){
        return{
            guillemets : guillemets
        }
       },
    components:{
        myheader,
        myfooter,
    }

}
</script>

<style>

</style>