<template>
    <Button icon="pi pi-arrow-right" @click="toggleSidebar" />
</template>

<script>
import Button from 'primevue/button';
import { inject } from 'vue';

export default {
    components: {
        Button,
    },
    setup() {
        const visible = inject('visible');
        const toggleSidebar = () => {
            visible.value = !visible.value;
        };

        return {
            toggleSidebar
        };
    }
};
</script>

<style></style>
