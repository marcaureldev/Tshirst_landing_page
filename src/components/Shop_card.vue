<template>
    <div class="space-y-2 relative">
        <img :src="props_product.image" alt="" class="rounded-lg" />
        <p class="font-bold text-sm text-center">Youth Short Sleeve Tee</p>
        <p class="font-bold text-center">$26.00 – $29.00</p>
        <p class="flex gap-3 justify-center">
            <img src="../assets/icons/point_noir.svg" alt="" />
            <img src="../assets/icons/point_marron.svg" alt="" />
            <span class="font-medium">+3</span>
        </p>
<!-- 
        <div class="text-white px-5 py-2 bg-primary_color absolute font-bold rounded-lg left-2 top-0">
            Sale!
        </div>

        <div class="text-white px-5 py-2 bg-unregular absolute font-bold rounded-lg left-2 top-11">
           New
        </div> -->
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props:{
        props_product: Object,
    },

    // setup(props){
    //     const changeImage = computed( () => {
    //         return{
    //             src : `${props.props_product.image}` 
    //         }
    //     })


    //     return{
    //         changeImage
    //     }
    // }



}
</script>

<style></style>