<template>
    <div class="bg-secondary w-64 h-screen overflow-auto">
        <div class="text-2xl text-center bg-white shadow h-16 flex items-center justify-center">
            <router-link class="" to="/">POS App</router-link>
        </div>

        <ul>
            <li class="">
                <router-link class="block p-4 text-white" to="/">Dashboard</router-link>
            </li>

            <li class="">
                <router-link class="block p-4 text-white" to="/products">Products</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>