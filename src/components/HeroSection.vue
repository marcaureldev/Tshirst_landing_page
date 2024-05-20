<template>
    <div class="max-w-[70em] mx-auto p-6">

        <h1 class="text-4xl font-bold text-center"> {{ title }} </h1>

        <div class="flex justify-center gap-2 items-center p-5 font-bold">

            <a href="Homepage.vue" class="flex gap-3 items-center"> <img src="../assets/icons/home.png" alt=""
                    class="w-5"> Home </a>

            <img src="../assets/icons/superiority_symbol.png" alt="" class="w-5">

           <p>{{ subtitle }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props : {
    title: {
        type: String
    },

    subtitle: {
        type:String
    }
  }
}
</script>

<style></style>