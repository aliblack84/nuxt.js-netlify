<template>
    <div>
        <header class="shadow-sm bg-white ">
            <nav class="container mx-auto p-4  ">
                 <ul class="flex justify-around">
                <li><nuxt-link to="/" class=" gap-4">Home</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>   
                 <li><nuxt-link to="/products">products</nuxt-link></li>
            </ul>
        </nav>
        </header>
        <div class="container mx-auto p-4">
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, optio soluta alias ratione necessitatibus quisquam iure inventore quis nostrum saepe nemo exercitationem ea corrupti sequi quos, est minus eum quo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores dignissimos, possimus quibusdam officiis fuga incidunt soluta non veniam quas perferendis consectetur molestias expedita debitis dicta veritatis quisquam, architecto atque.</p>
    </div>
    </div>
</template>
<script setup>

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