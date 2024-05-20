<template>
    <div class="text-center space-y-4">
        <img :src="propriete.image" alt="" />
        <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg mr-3">
           {{ propriete.text }}
        </p>
        <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg">
           {{ propriete.text1}}
        </p>
        <h2 class="text-md font-bold">
            {{ propriete.text2 }}
        </h2>
    </div>
</template>

<script>
export default {

    props: {
      propriete : Object,
    }

}
</script>

<style></style>