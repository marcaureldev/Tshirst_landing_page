<template>
    <div>
        <div class=" max-w-[25em] mx-auto gap-4">
            <img :src="detail.pictures" alt="" class="w-[27em]">

            <div class="space-y-4">

                <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg mr-3">
                    {{ detail.dtitle }}
                </p>
                <p class="text-[#2EBB77] bg-[#F5F5F5] text-[10px] p-1 inline rounded-lg">{{ detail.dtitle1 }}</p>
                <h2 class="font-bold">{{ detail.dsubtitle }}</h2>

                <div class="flex justify-center lg:justify-start items-center">
                    <span class="text-third_color text-[15px]">August 20, 2022 --- </span>
                    <p class="text-[14px]"><span class="text-third_color">&nbsp; by </span>admin </p>
                </div>

                <p class="text-[13px] text-third_color">
                    Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae
                    gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo
                    rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...
                </p>
                <div class="space-y-10 mt-2">
                    <RouterLink :to="{name: 'Blog_details', params: {subheader:detail.dsubtitle}}">
                        <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">
                            Read More
                        </button>
                    </RouterLink>

                    <!-- <RouterLink :to="{ name: 'Blog_details', params: { name: 'test' } }">
                        <button class="bg-primary_color text-white font-medium px-6 py-2 rounded-lg">
                            Read More
                        </button>
                    </RouterLink> -->
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        detail: Object,
    }

}
</script>

<style></style>