// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }

  modules: [

  '@nuxtjs/cloudinary'
  
  ]

  cloudinary: {

    cloudName:  process.env.NUXT_ENV_CLOUDINARY_CLOUD_NAME,
    
    useComponent:  true,
    
    secure:  true
    
    }
})

