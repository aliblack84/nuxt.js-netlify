<template>
    <div>
<div class="grid grid-cols-4 gap-5">
    <div v-for="p in products">
        <productCard :product="p"/>
    </div>
</div>   
 </div>
</template>
<script setup>
definePageMeta({
    layout:'products'
})
const {data:products}= await useFetch('https://fakestoreapi.com/products')
  useHead({
    title:'nuxt ali / merch',
    meta:[{name:'description',content:'nuxt ali merch'}]
  })

</script>

<style  scoped>
h2{
    margin: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
</style>