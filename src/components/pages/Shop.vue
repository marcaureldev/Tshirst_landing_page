<template>
    <div class="shop">
        <header>
            <MyHeader />
        </header>

        <section class="bg-secondary_color">
            <HeroSection :title="title" :subtitle="subtitle" />
        </section>


        <section class="max-w-70 mx-auto p-12">
            <button @click="toggleSidebar" class="p-2 bg-black text-white rounded-md m-4">
                Toggle Filters
            </button>

            <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="toggleSidebar"></div>

            <aside :class="[
                'fixed top-0 left-0 h-full bg-white p-4 transition-transform transform z-50',
                { 'translate-x-0': visible, '-translate-x-full': !visible }
            ]">
                <div class="overflow-y-auto h-full p-5">
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <label for="search" class="text-xl font-bold">Search</label>
                            <img src="../../assets/icons/croix.svg" alt="" @click="toggleSidebar">
                        </div>
                        <div class="w-[15em] flex border-2 p-2 rounded-lg">
                            <input type="text" name="search" placeholder="Search..." class="outline-none"
                                v-model="search" />
                            <img src="../../assets/icons/search1.svg" alt="" />
                        </div>
                    </div>

                    <div class="p-2 text-third_color space-y-5">
                        <h1 class="text-xl font-bold text-black">Product categories</h1>
                        <p class="flex justify-between items-center text-[14px] cursor-pointer hover:text-black hover:font-bold"
                            @click="filterByCategory('hoodie')">
                            Hoodie<span class="text-black">11</span>
                        </p>
                        <p class="flex justify-between items-center text-[14px] cursor-pointer hover:text-black hover:font-bold"
                            @click="filterByCategory('kids')">
                            Kids<span class="text-black">4</span>
                        </p>
                        <p class="flex justify-between items-center text-[14px] cursor-pointer hover:text-black hover:font-bold"
                            @click="filterByCategory('long sleeve')">
                            Long Sleeves<span class="text-black">0</span>
                        </p>
                        <p class="flex justify-between items-center text-[14px] cursor-pointer hover:text-black hover:font-bold"
                            @click="filterByCategory('design')">
                            Design Product<span class="text-black">2</span>
                        </p>
                        <p class="flex justify-between items-center text-[14px] cursor-pointer hover:text-black hover:font-bold"
                            @click="filterByCategory('sweat')">
                            Sweater<span class="text-black">2</span>
                        </p>
                        <p class="flex justify-between items-center text-[14px] cursor-pointer hover:text-black hover:font-bold"
                            @click="filterByCategory('tshirt')">
                            T-Shirt<span class="text-black">5</span>
                        </p>
                    </div>

                    <div class="space-y-5">
                        <h1 class="text-xl font-bold">Filter by price</h1>
                        <input id="minmax-range" type="range" min="0" max="45" value="5" step="3"
                            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" v-model="prix" />
                        <div class="flex justify-between items-center">
                            <p><span class="text-third_color">Price:</span> ${{ prix }}</p>
                            <button class="px-4 py-2 bg-btn_color font-bold rounded-lg cursor-pointer"
                                @click="filterByPrice(prix)">
                                Filter
                            </button>
                        </div>
                    </div>

                    <div class="p-2 text-third_color space-y-5">
                        <h1 class="text-xl font-bold text-black">Filter by Color</h1>
                        <p class="flex justify-between items-center text-[14px] cursor-pointer"
                            @click="filterByColor('black')">
                            <span class="flex gap-2 items-center"><img src="../../assets/icons/bouton_noir.svg" alt=""
                                    class="w-5" />Black</span>
                            <span class="text-black">14</span>
                        </p>

                        <p class="flex justify-between items-center text-[14px] cursor-pointer"
                            @click="filterByColor('brown')">
                            <span class="flex gap-2 items-center"><img src="../../assets/icons/bouton_marron.svg" alt=""
                                    class="w-5" />Brown</span>
                            <span class="text-black">13</span>
                        </p>

                        <p class="flex justify-between items-center text-[14px] cursor-pointer"
                            @click="filterByColor('red')">
                            <span class="flex gap-2 items-center"><img src="../../assets/icons/bouton_red.svg" alt=""
                                    class="w-5" />Red</span>
                            <span class="text-black">13</span>
                        </p>

                        <p class="flex justify-between items-center text-[14px] cursor-pointer"
                            @click="filterByColor('white')">
                            <span class="flex gap-2 items-center"><img src="../../assets/icons/bouton_white.svg" alt=""
                                    class="w-5" />White</span>
                            <span class="text-black">13</span>
                        </p>

                        <p class="flex justify-between items-center text-[14px] cursor-pointer"
                            @click="filterByColor('yellow')">
                            <span class="flex gap-2 items-center"><img src="../../assets/icons/bouton_yellow.svg" alt=""
                                    class="w-5" />Yellow</span>
                            <span class="text-black">13</span>
                        </p>
                    </div>

                    <div class="space-y-5">
                        <h1 class="text-xl font-bold text-black">Stock status</h1>

                        <div class="flex gap-2 items-center">
                            <input type="radio" name="" id="inventoryTrue" class="checked:to-current"
                                @click="filterByInventory(true)" />
                            <p class="text-[15px] text-third_color cursor-pointer hover:text-black hover:font-bold">
                                In stock
                            </p>
                        </div>

                        <div class="flex gap-2 items-center">
                            <input type="radio" name="" id="inventoryFalse" @click="filterByInventory(false)" />
                            <p class="text-[15px] text-third_color cursor-pointer hover:text-black hover:font-bold">
                                Out of stock
                            </p>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h1 class="text-xl font-bold">Tags</h1>

                        <div class="space-y-2">
                            <div class="grid grid-cols-2 gap-4">
                                <span
                                    class="bg-behind_color text-[12px] p-1 text-third_color text-center">Company</span>
                                <span class="bg-behind_color text-[12px] p-1 text-third_color">Design Services</span>
                            </div>
                            <div class="grid grid-cols-3 gap-8">
                                <span class="bg-behind_color text-[12px] p-1 text-third_color w-20">HaruTheme</span>
                                <span class="bg-behind_color text-[12px] p-1 text-third_color w-14">Pricom</span>
                                <span class="bg-behind_color text-[12px] p-1 text-third_color w-14">Print</span>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <span class="bg-behind_color text-[12px] p-1 text-third_color w-14">Printing</span>
                                <span class="bg-behind_color text-[12px] p-1 text-third_color w-16">Printshop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <section class="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                <Shop_card v-for="(data, i) in data_Product" :key="i" :props_product="data"
                    class="hover:scale-90 ease-in-out duration-500" />
            </section>

            <div v-if="data_Product.length === 0" class="font-bold text-5xl text-center">
                Aucun résultat trouvé
            </div>
        </section>

        <footer class="bg-[#F5F5F5]">
            <myfooter />
        </footer>
    </div>
</template>

<script>
import BDD from "../../BDD.js";
import HeroSection from "../HeroSection.vue";
import myfooter from "../myfooter.vue";
import Shop_card from "../Shop_card.vue";
import { onMounted, ref, watch } from "vue";
import MyHeader from "../MyHeader.vue";
export default {
    data() {
        return {
            prix: 0,
            title: "Shop",
            subtitle: "Shop",
        };
    },
    components: {
        MyHeader,
        HeroSection,
        Shop_card,
        myfooter,
    },

    setup() {
        class Product {
            constructor(name, image, categorie, color, price, inventory) {
                this.name = name;
                this.image = image;
                this.categorie = categorie;
                this.color = color;
                this.price = price;
                this.inventory = inventory;
            }
        }

        let data_Product = ref([]);
        let visible = ref(false);

        const makeDataProduct = () => {
            for (const product of BDD) {
                // Création de plusieurs instances de la classe Product que l'on récupère dans la variable new_product

                const new_product = new Product(
                    product.name,
                    product.image,
                    product.categorie,
                    product.color,
                    product.price,
                    product.inventory
                );

                // Remplissage du tableau data_Product avec chacune des valeurs de chaque instance créées en utilisant la méthode push

                data_Product.value.push(new_product);
            }
        };

        const filterByCategory = (param) => {
            data_Product.value = BDD.filter((bdd) => bdd.categorie == param);
        };

        const filterByColor = (param) => {
            data_Product.value = BDD.filter((bdd) => bdd.color == param);
        };

        const filterByPrice = (param) => {
            data_Product.value = BDD.filter((bdd) => bdd.price == param);
        };

        const filterByInventory = (param) => {
            data_Product.value = BDD.filter((bdd) => bdd.inventory == param);
        };

        let search = ref("");

        watch(search, (new_value) => {
            let regex = RegExp(new_value.toLowerCase());

            data_Product.value = BDD.filter((bdd) =>
                regex.test(bdd.name.toLowerCase())
            );
        });

        const toggleSidebar = () => {
            visible.value = !visible.value;
        };

        onMounted(makeDataProduct);

        return {
            data_Product,
            search,
            filterByCategory,
            filterByColor,
            filterByPrice,
            filterByInventory,
            visible,
            toggleSidebar,
        };
    },
};
</script>

<style></style>
