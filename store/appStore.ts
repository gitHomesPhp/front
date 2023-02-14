import { defineStore } from "pinia";

export const useAppStore = defineStore({
    id: 'app-store',
    state: () => {
        return {
            device: ''
        }
    },
    actions: {
        async setDeviceDesktop() {
            this.device = 'desktop'
            const deviceCookie = useCookie('device')
            deviceCookie.value = this.device
        },
        async setDeviceMobile() {
            this.device = 'mobile'
            const deviceCookie = useCookie('device')
            deviceCookie.value = this.device
        }
    }
})
