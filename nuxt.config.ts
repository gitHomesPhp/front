// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/_fonts.scss" as *; @use "@/assets/styles/_global.scss" as *;',
                }
            },

        }
    },
    css: [
        '@/assets/styles/reset.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    modules: ['@pinia/nuxt'],
})
