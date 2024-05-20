<template>
    <div class="flex gap-5 items-center p-4">
        <img :src="admin_props.img" alt="" />
        <div class="text-third_color text-[13px] space-y-2">
            <p class="font-bold text-black">Admin</p>
            <p>
                {{ admin_props.paragraphe }}
            </p>
            <p>
                {{ admin_props.date }} &nbsp; | &nbsp;
                <span class="font-bold text-black">{{ admin_props.reponse }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        admin_props: Object,
    }

}
</script>

<style></style>