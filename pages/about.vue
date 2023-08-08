<template>
    <div>
        <h2 class="container mx-auto p-4">About</h2>
        <p class="container mx-auto p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, optio soluta alias ratione necessitatibus quisquam iure inventore quis nostrum saepe nemo exercitationem ea corrupti sequi quos, est minus eum quo.</p>
        <p class="container mx-auto p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores dignissimos, possimus quibusdam officiis fuga incidunt soluta non veniam quas perferendis consectetur molestias expedita debitis dicta veritatis quisquam, architecto atque.</p>
   
        <div>{{ data }}</div>

   
    </div>

</template>
<script setup>

const { data } = await useFetch('/api/currency/GBP')

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