<template>
    <div>
        <div class="flex justify-center items-center space-y-2 relative w-[15em] h-[20em] bg-center bg-cover bg-no-repeat rounded-xl animation" :style="changebackground">

            <div class="text-white px-5 py-2 bg-primary_color absolute font-bold rounded-lg left-2 top-2"  v-if="props_product.categorie === 'tshirt'">
                Sale!
            </div>

            <div class="text-white px-5 py-2 bg-unregular absolute font-bold rounded-lg left-2 top-11"  v-if="props_product.categorie === 'tshirt'">
                New
            </div>

            <div class="flex justify-center items-center w-[7em] h-[7em] rounded-[3.5em] bg-black bg-opacity-65 text-white" v-if="props_product.inventory === false">
                Out of Stock
            </div>
        </div>
        <div class="p-5">
            <p class="font-bold text-sm text-center">{{ props_product.name }}</p>
            <p class="font-bold text-center">$ {{ props_product.price }}</p>
            <p class="flex gap-3 justify-center">
                <img src="../assets/icons/point_noir.svg" alt="" />
                <img src="../assets/icons/point_marron.svg" alt="" />
                <span class="font-medium">+3</span>
            </p>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue' 
export default {
    props: {
        props_product: Object,
    },

    setup(props) {
        const changebackground = computed(() => {
            return {
                backgroundImage: `url(${props.props_product.image})`
            }
        })

        return {
            changebackground
        }
    }
}
</script>

<style>
    /* .animation:hover{
        background-size: 110%;
    } */
</style>