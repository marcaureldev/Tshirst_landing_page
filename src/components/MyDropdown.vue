<template>
    <div class="card flex justify-content-center">
        <Dropdown ref="dropdown" v-model="selectedCity" :options="options" optionLabel="label"
            :placeholder="placeholder" 
            class="w-full md:w-14rem" @change="handleChange" />
    </div>
</template>

<script>
export default {

    props: {
        options: {
            type: Array,
            required: true,
        },

        placeholder: {
            type: String,
            required: true,
        }

    },

    data() {
        return {
            selectedCity: null,
        };
    },


    methods: {
        // openDropdown() {
        //     this.$refs.dropdown.show(); 
        // },
        // closeDropdown() {
        //     this.$refs.dropdown.hide();
        // }
        handleChange(event) {
            this.$emit('select', event.value.route); // Émet l'événement avec la route associée
        }
    
    }
};
</script>

<style>
</style>
