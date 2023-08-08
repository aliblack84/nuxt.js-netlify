// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
modules:['@nuxtjs/tailwindcss'],
app:{
head:{
    title:'Nuxt',
    meta:[
        {
            name:'description' ,content:'about Nuxt.js'
        }
    ],
    link:[
        {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ]
}
},
runtimeConfig:{
    currencyKey:process.env.CURRENCY_API_KEY,

}
})
 