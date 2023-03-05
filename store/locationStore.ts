import {defineStore} from "pinia";

export const useLocationStore = defineStore({
    id: 'location-store',
    state: () => {
        return {
            regions: [],
            current_region: {},
        }
    },
    actions: {
        async fetchRegions() {
            if (this.regions.length === 0) {
                const { data } = await useAsyncData('regions', () => $fetch('http://0.0.0.0/region'))
                this.regions = data.value;
                for (let region of data.value) {
                    if (region.id === 1) {
                        await this.setCurrentRegion(region)
                    }
                }
            }

        },
        async setCurrentRegion(region) {
            this.current_region = region
        }
    },
})
