import {defineStore} from "pinia";

export const useBrandStore = defineStore({
    id: 'brand-store',
    state: () => {
        return {
           brands: [],
        }
    },
})
