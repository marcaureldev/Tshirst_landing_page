<template>
    <div class="flex justify-between items-center bg-secondary_color p-2">
                <p class="max-w-[35em] mx-auto text-unregular">Free shipping on all U.S. orders $50+</p>
                <img src="../assets/icons/croix.svg" alt="">
    </div>
            
    <div class="lg:flex justify-between items-center p-6 hidden">
        <Navbar/>
                
        <img src="../assets/images/logo.svg" alt="" class="w-[8em]">
                
        <div class="flex items-center gap-4">
                <img src="../assets/icons/search.svg" alt="">
                <img src="../assets/icons/person_icon.svg" alt="">
                <p class="relative max-w-6">
                    <img src="../assets/icons/etoile.svg" alt="" class="w-20">
                    <span class="absolute bg-primary_color top-0 text-[10px] text-center
                        text-white rounded-full right-0 w-3 h-3"> 0
                    </span>
                </p>
                <p class="relative max-w-6">
                    <img src="../assets/icons/shop.svg" alt="" class="w-20">
                    <span class="absolute bg-primary_color top-0 text-[10px] text-center
                         text-white rounded-full right-0 w-3 h-3"> 0
                    </span>
                </p>
        </div>
        <button class="px-4 py-3 rounded-lg font-bold border-2">Let's talk</button>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    components:{
        Navbar,
    }

}
</script>

<style>

</style>