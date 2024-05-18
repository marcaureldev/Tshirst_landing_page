<template>
    <nav>
        <ul class="flex items-center gap-6 font-bold">
            <RouterLink to="/">
                <li class="active:text-[rgb(46,187,119)]">Home</li>
            </RouterLink>
            <MyDropdown class="cursor-pointer" :options="options1" placeholder="TeeSpace" @select="navigateTo" />
            <MyDropdown class="cursor-pointer" :options="options2" placeholder="Shop" @select="navigateTo" />
            <MyDropdown class="cursor-pointer" :options="options3" placeholder="Blog" @select="navigateTo" />
            <MyDropdown class="cursor-pointer" :options="options4" placeholder="Pages" @select="navigateTo" />
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
                { label: 'Services', route: '/services' },
                { label: 'Services Détails', route: '/services-details' },
                { label: 'Our Team', route: '/our-team' },
            ],
            options2: [
                { label: 'Shop', route: '/shop' },
                { label: 'Pricing', route: '/pricing' },
            ],
            options3: [
                { label: 'Blog', route: '/blog' },
            ],
            options4: [
                { label: 'About Us', route: '/about-us' },
                { label: "FAQ's", route: '/faqs' },
            ]
        };
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route);
        }
    }
}
</script>

<style></style>