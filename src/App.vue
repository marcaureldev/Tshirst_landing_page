<template>
     <div id="app">
        <!-- <Homepage/> -->
        <!-- <Ourteam/> -->
        <Services/>
    </div>
</template>

<script>
import Homepage from './components/pages/Homepage.vue'
import Ourteam from './components/pages/Ourteam.vue'
import Services from './components/pages/Services.vue'
export default {
    components:{
        Homepage,
        Ourteam,
        Services,
    }
}
</script>

<style>
   @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
    #app{
        font-family: "Plus Jakarta Sans", sans-serif;
    }
    .box{
        box-shadow: 0px 2px 5px #808080d3;
    }
</style>