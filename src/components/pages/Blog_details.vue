<template>
    <header>
        <myheader/>
    </header>

    <section class="bg-btn_color">
        <HeroSection :title="title" :subtitle="subtitle"/>
    </section>

    <section class="lg:flex gap-10 max-w-70 mx-auto p-10">

        <aside class="w-[15em] space-y-2 p-2 hidden lg:block">
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

        <section class="max-w-55 mx-auto">
            <div class="text-center">

                <p class="text-primary_color bg-btn_color text-[10px] p-1 inline rounded-lg">Design Services</p>
                <h1 class="font-bold text-2xl">What make you beautiful with us</h1>

                <div class="flex justify-center gap-4 items-center mt-5">
                    <span class="text-third_color text-[15px]">August 20, 2022</span>
                    <img src="../../assets/icons/horizontal_line.svg" alt="">
                    <p class="text-[14px]"><span class="text-third_color">by </span>admin</p>
                    
                    <div class="flex gap-4 items-center">
                        <img src="../../assets/icons/comment_icon.svg" alt="">
                        <p class="font-bold text-[14px]">3 comments</p>
                    </div>
                </div>

                <img src="../../assets/images/beautiful.svg" alt="" class="mt-8 w-50 mx-auto">

                <p class="text-third_color max-w-45 text-start mt-8 text-[15px]">
                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                </p>

                <img src="../../assets/icons/virgule.svg" alt="" class="p-5 mx-auto">
                <h1 class="text-xl font-bold">I think it’s important people see themselves in film, but it’s even more important they see people they maybe don’t know as well.</h1>

                <p class="text-third_color max-w-50 text-start mt-8 text-[15px]">
                    Fusce eget malesuada eros. Vivamus eros dolor, auctor aliquet dolor sit amet, euismod imperdiet ex. Nam sed nulla sed massa suscipit feugiat.
                    Mauris et nunc ornare, placerat ex ac, interdum magna. Vestibulum urna massa, hendrerit sed fringilla in, mollis vitae tellus. Vestibulum mattis nulla
                    elementum tristique fringilla. Morbi in sollicitudin erat. Ut quis tristique mauris. Proin risus purus, iaculis a orci ut, cursus bibendum panisl. Duis
                    aliquam gravida eros eget molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse
                    pharetra, arcu eu porta aliquet, eros dui tincidunt purus, eu vehicula magna nisl in purus.
                </p>

                <p class="text-third_color max-w-50 text-start mt-8 text-[15px]">
                    Vivamus eros dolor, auctor aliquet dolor sit amet, euismod imperdiet ex. Nam sed nulla sed massa suscipit feugiat. Mauris et nunc ornare, placerat
                    ex ac, interdum magna. Vestibulum urna massa, hemolli
                </p>

                <div class="lg:flex justify-between items-center p-5">
                    <div class="flex gap-4">
                        <p class="text-[14px] text-third_color">#company</p>
                        <p class="text-[14px] text-third_color">#printing</p>
                        <p class="text-[14px] text-third_color">#printshop</p>
                    </div>
                    <div class="flex gap-3 items-center">
                        <p class="font-bold text-[14px]">Share:</p>
                        <img src="../../assets/icons/facebook.svg" alt="" class="w-10">
                        <img src="../../assets/icons/twitter.svg" alt="" class="w-10">
                        <img src="../../assets/icons/pinterest.svg" alt="" class="w-10">
                        <img src="../../assets/icons/linkedin.svg" alt="" class="w-10">
                    </div>
                </div>
                <hr>
            </div>

            <div>
               <div class="flex gap-2 py-8">
                    <img src="../../assets/icons/open_arrow.svg" alt="">
                    <div class="space-y-1">
                        <p class="text-third_color text-[12px]">PREVIOUS</p>
                        <p class="font-bold">Post Gallery</p>
                    </div>
               </div>
               <hr>
            </div>

            <div class="flex gap-5 items-center p-4 max-w-[55em]">
                <img src="../../assets/icons/avatar.svg" alt="">
                <div class="text-third_color text-[13px] space-y-2">
                    <p class="font-bold text-black">admin</p>
                    <p>Suspe ndisse suscipit sagittis leo sit met condimentum essum consecte uspe ndisse suscipit sagittis. Suscipit sagittis leo sit met condimentum</p>
                    <p class="font-bold text-black"><a href="#">Website</a></p>
                </div>
            </div>
            <hr>

            <div class="space-y-5 p-5">
                <h1 class="font-bold text-center text-xl">You may also like this</h1>
                <div class="flex gap-5 items-center">
                    <div class="text-center space-y-4">
                        <img src="../../assets/images/man_woman.svg" alt="">
                        <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg mr-3">Design Services</p>
                        <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg">HaruTheme</p>
                        <h2 class="text-md font-bold">10 Steps to Writing the Perfect Prospectus</h2>
                    </div>

                    <div class="text-center space-y-4">
                        <img src="../../assets/images/tshirt_black_white.svg" alt="">
                        <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg mr-3">Design Services</p>
                        <h2 class="text-md font-bold">Watch the Sony a9 Livestream Event Online</h2>
                    </div>
                </div>
            </div>
            <hr>

            <div class="py-5">
                <h1 class="font-bold text-center text-xl">There are 3 comments</h1>


                <div class="flex gap-5 items-center p-4">
                    <img src="../../assets/icons/avatar.svg" alt="">
                    <div class="text-third_color text-[13px] space-y-2">
                        <p class="font-bold text-black">Admin</p>
                        <p>
                            Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae gravida mi purus sit amet erat. Ut dictum nisi massa, 
                            vitae pusem at fringilla lobor HaruTheme
                        </p>
                        <p>July 14, 2017 &nbsp; | &nbsp; <span class="font-bold text-black">Reply</span></p>
                    </div>
                </div>

                <div class="flex gap-5 items-center p-4">
                    <img src="../../assets/icons/avatar.svg" alt="">
                    <div class="text-third_color text-[13px] space-y-2">
                        <p class="font-bold text-black">Admin</p>
                        <p>
                            Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae gravida mi purus sit amet erat. Ut dictum nisi massa, 
                            vitae pusem at fringilla lobor HaruTheme
                        </p>
                        <p>July 14, 2017 &nbsp; | &nbsp; <span class="font-bold text-black">Reply</span></p>
                    </div>
                </div>

                <div class="ml-20 flex gap-5 items-center p-4">
                    <img src="../../assets/icons/avatar.svg" alt="">
                    <div class="text-third_color text-[13px] space-y-2">
                        <p class="font-bold text-black">Admin</p>
                        <p>
                            Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae gravida mi purus sit amet erat. Ut dictum nisi massa, 
                            vitae pusem at fringilla lobor HaruTheme
                        </p>
                        <p>July 14, 2017 | <span class="font-bold text-black">Reply</span></p>
                    </div>
                </div>
            </div>
            
            <div>
                <h1 class="font-bold text-center text-xl">Leave us a comment</h1>

               <form action="" class="w-[50em] mx-auto">
                    <div class="lg:flex gap-8 p-5">
                        <input type="text" name="nom" placeholder="Enter Your Name*" class="outline-none w-[27em] h-10 p-5 rounded-lg bg-btn_color">
                        <input type="email" name="email" placeholder="Enter Your Email*" class="outline-none w-[27em] h-10 p-5 rounded-lg bg-btn_color">
                    </div>

                    <input type="text" name="message" class="h-32 p-5 bg-btn_color rounded-lg outline-none">
                    <div class="flex gap-2 items-center">
                        <input type="radio" name="">
                        <p class="text-third_color text-[14px] py-5">Save my name, email, and website in this browser for the next time I comment.</p>
                    </div>
               </form>

            </div>
        </section>

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
    title: 'Blog Details',
    subtitle: 'Design Services',
}
},

    components:{
        myheader,
        myfooter,
        HeroSection,
    }

}
</script>

<style>

</style>