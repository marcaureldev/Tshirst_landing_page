<template>
    <nav>
        <ul class="flex items-center gap-6 font-bold">
            <li class="active:text-[rgb(46,187,119)]">Home</li>
            <MyDropdown class="cursor-pointer" :options="options1" placeholder="TeeSpace" />
            <MyDropdown class="cursor-pointer" :options="options2" placeholder="Shop" />
            <MyDropdown class="cursor-pointer" :options="options3" placeholder="Blog" />
            <MyDropdown class="cursor-pointer" :options="options4" placeholder="Pages" />
        </ul>
    </nav>
</template>

<script>
import MyDropdown from './MyDropdown.vue'
export default {

    components: {
        MyDropdown,
    },

    data() {
        return {
            options1: [
                { label: 'Services' },
                { label: 'Services Détails' },
                { label: 'Our Team' },
            ],
            options2: [
                { label: 'Shop' },
                { label: 'Pricing' },
            ],
            options3: [
                { label: 'Blog' },
            ],

            options4: [
                { label: 'About Us' },
                { label: "FAQ's" },
            ]
        };
    },

}
</script>

<style></style>