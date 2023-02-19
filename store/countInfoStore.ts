import {defineStore} from "pinia";

export const useCountInfoStore = defineStore({
    id: 'count-info-store',
    state: () => {
        return {
            company_count: 0,
            review_count: 0,
        }
    },
    actions: {
        async fetchCountInfo() {
            const { data } = await useAsyncData('count-info', () => $fetch('http://0.0.0.0/site-count-info'))
            this.company_count = data.value.company_count
            this.review_count = data.value.review_count
        }
    }
})
