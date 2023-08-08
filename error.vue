<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <br> 
        <hr>
        <p class="mt-7 text-6xl ">Ooops.</p>
        <p class="mt-7 ">{{ error.message }}</p>
        <br>
        <button style="background-color:darkslategray;font-size: large;border-radius: 5px;" class="btn text-blue-400" @click="handle"><p class="p-5">go home...</p></button>

    </div>
</template>
<script setup>
defineProps(['error'])
const handle =()=>{
    clearError({redirect:'/'})
}
</script>
<style scoped>
</style>