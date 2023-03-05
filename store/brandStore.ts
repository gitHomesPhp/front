import {defineStore} from "pinia";

export const useBrandStore = defineStore({
    id: 'brand-store',
    state: () => {
        return {
            brands: [],
            brandsWithImage: [
                'Acer', 'Apple', 'Asus', 'BlackBerry', 'Digma', 'Fly',
                'Honor', 'HTC', 'Huawei', 'Lenovo', 'LG', 'Meizu', 'Nokia',
                'OPPO', 'Samsung', 'Sony', 'Xiaomi', 'ZTE',
            ],
        }
    },
    actions: {
        async fetchBrands() {
            if (this.brands.length === 0) {
                const { data } = await useAsyncData('brands', () => $fetch('http://0.0.0.0/brand'))

                this.brands = data.value
            }
        }
    },
    getters: {
        brandObjects: (state) => {
            const brands = [];

            for (let brand of state.brands) {
                const obj = {};
                obj.name = brand.name
                obj.slug = brand.slug
                obj.hasImage = state.brandsWithImage.includes(brand.name)
                brands.push(obj)
            }

            return brands;

        }
    }
})
