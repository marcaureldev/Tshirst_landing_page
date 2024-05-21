<template>
      <button @click="toggleSidebar" class="md:hidden p-2 bg-black text-white rounded-md m-4">
        <Button icon="pi pi-angle-double-right" />
            </button>

</template>

<script>
import { inject } from 'vue';
import Button from 'primevue/button';

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
