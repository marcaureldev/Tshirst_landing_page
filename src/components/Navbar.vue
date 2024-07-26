<template>
    <nav>
        <ul class="lg:flex items-center gap-6 font-bold">
            <RouterLink to="/">
                <li class="active:text-[rgb(46,187,119)]">Home</li>
            </RouterLink>
            <MyDropdown class="cursor-pointer custom-dropdown" :options="options1" placeholder="TeeSpace"
                @select="navigateTo" />
            <MyDropdown class="cursor-pointer custom-dropdown" :options="options2" placeholder="Shop" @select="navigateTo" />
            <RouterLink to="/blog">
                <li>Blog</li>
            </RouterLink>
            <MyDropdown class="cursor-pointer custom-dropdown" :options="options4" placeholder="Pages" @select="navigateTo" />
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

<style>
.custom-dropdown .p-dropdown-label.p-placeholder {
  color: #000; 
  font-weight: bold;
}
</style>