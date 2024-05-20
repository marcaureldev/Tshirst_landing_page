<template>
    <div class="md:hidden">
        <Sidebar v-model:visible="visible" header="TeeSpace">
            <div class="space-y-4">
                <label for="search" class="text-xl font-bold">Search</label>
                <div class="w-[15em] flex border-2 p-2 rounded-lg">
                    <input type="text" name="search" placeholder="Search..." class="outline-none">
                    <img src="../assets/icons/search1.svg" alt="">
                </div>
            </div>

            <h1 class="text-xl font-bold">Categories</h1>

            <div class="p-2 text-third_color space-y-5">
                <p class="flex justify-between items-center text-[14px]">Design Services<span
                        class="text-black">6</span>
                </p>
                <p class="flex justify-between items-center text-[14px]">HaruTheme<span class="text-black">4</span>
                </p>
                <p class="flex justify-between items-center text-[14px]">Print Company<span class="text-black">3</span>
                </p>
                <p class="flex justify-between items-center text-[14px]">Print Shop<span class="text-black">3</span>
                </p>
                <p class="flex justify-between items-center text-[14px]">Uncategorized<span class="text-black">5</span>
                </p>
            </div>

            <div class="space-y-5">
                <h1 class="text-xl font-bold">Latest Posts</h1>
                <div class="flex gap-4">
                    <img src="../assets/images/make_beautiful.svg" alt="" class="w-20">
                    <div class="space-y-3">
                        <p class="text-[12px] text-third_color">Design Services</p>
                        <h2 class="text-[13px] font-bold">What make you beautiful with us</h2>
                    </div>
                </div>

                <div class="flex gap-4">
                    <img src="../assets/images/mirum_est.svg" alt="" class="w-20">
                    <div class="space-y-3">
                        <p class="text-[12px] text-third_color">Design Services, HaruTheme</p>
                        <h2 class="text-[13px] font-bold">Mirum est notare quam littera gothica</h2>
                    </div>
                </div>


                <div class="flex gap-4">
                    <img src="../assets/images/haruTheme.svg" alt="" class="w-20">
                    <div class="space-y-3">
                        <p class="text-[12px] text-third_color">Design Services, HaruTheme</p>
                        <h2 class="text-[13px] font-bold">Ut wisi enim ad minim veniam</h2>
                    </div>
                </div>

                <div class="flex gap-4">
                    <img src="../assets/images/haruTheme1.svg" alt="" class="w-20">
                    <div class="space-y-3">
                        <p class="text-[12px] text-third_color">HaruTheme</p>
                        <h2 class="text-[13px] font-bold">How to make a T-shirt design online</h2>
                    </div>
                </div>

                <div class="flex gap-4">
                    <img src="../assets/images/your_way.svg" alt="" class="w-20">
                    <div class="space-y-3">
                        <p class="text-[12px] text-third_color">Print Company</p>
                        <h2 class="text-[14px] font-bold">Let say it your way</h2>
                    </div>
                </div>

                <img src="../assets/images/reduce.svg" alt="">
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
        </Sidebar>

        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<script>
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
export default {
    data() {
        return {
            visible: false
        }
    },
    components: {
        Sidebar,
        Button,
    }
}
</script>

<style></style>