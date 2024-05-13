<template>
    <div class="shop">
        <header>
            <myheader />
        </header>

        <section class="bg-secondary_color">
            <div class="max-w-[70em] mx-auto p-6">
                <h1 class="text-4xl font-bold text-center">Shop</h1>

                <div class="flex justify-center gap-2 items-center p-5 font-bold">
                    <a href="Homepage.vue" class="flex gap-3 items-center">
                        <img src="../../assets/icons/home.png" alt="" class="w-5" /> Home
                    </a>

                    <img src="../../assets/icons/superiority_symbol.png" alt="" class="w-5" />

                    <a href="Shop.vue">Shop</a>
                </div>
            </div>
        </section>

        <section class="flex gap-12 max-w-70 mx-auto p-12">
            <aside class="hidden lg:block w-[15em] space-y-5 p-2">
                <div class="space-y-4">
                    <label for="search" class="text-xl font-bold">Search</label>
                    <div class="w-[15em] flex border-2 p-2 rounded-lg">
                        <input type="text" name="search" placeholder="Search..." class="outline-none" />
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
                    <input id="minmax-range" type="range" min="10" max="40" value="5" step="3"
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
                        <input type="checkbox" name="" id="" />
                        <p class="text-[15px] text-third_color">On sale</p>
                    </div>

                    <div class="flex gap-2 items-center">
                        <input type="checkbox" name="" id="" />
                        <p class="text-[15px] text-third_color cursor-pointer hover:text-black hover:font-bold"
                            @click="filterByInventory(true)">In stock</p>
                    </div>

                    <div class="flex gap-2 items-center">
                        <input type="checkbox" name="" id="" />
                        <p class="text-[15px] text-third_color cursor-pointer hover:text-black hover:font-bold"
                            @click="filterByInventory(false)">Out of stock</p>
                    </div>

                    <div class="flex gap-2 items-center">
                        <input type="checkbox" name="" id="" />
                        <p class="text-[15px] text-third_color">On back order</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h1 class="text-xl font-bold">Tags</h1>

                    <div class="space-y-2">
                        <div class="grid grid-cols-2 gap-4">
                            <span class="bg-behind_color text-[12px] p-1 text-third_color text-center">Company</span>
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
            </aside>

            <section class="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                <Shop_card v-for="(data, i) in data_Product" :key="i" :props_product="data"
                    class="hover:scale-90 ease-in-out duration-500" />
            </section>
        </section>


        <footer class="bg-[#F5F5F5]">
            <myfooter />
        </footer>
    </div>
</template>

<script>
import BDD from "../../BDD.js";
import myheader from "../myheader.vue";
import myfooter from "../myfooter.vue";
import Shop_card from "../Shop_card.vue";
import { onMounted, ref } from "vue";
export default {
    data() {
        return {
            prix: 0,
        };
    },
    components: {
        myheader,
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
        
        onMounted(makeDataProduct);

        return {
            data_Product,
            filterByCategory,
            filterByColor,
            filterByPrice,
            filterByInventory,
        };
    },
};
</script>

<style></style>
