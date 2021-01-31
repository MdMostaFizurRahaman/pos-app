<template>
    <!-- <nav-bar></nav-bar> -->
    <div class="flex bg-gray-100">
        <side-bar></side-bar>
        <div class="main w-full">
            <the-header></the-header>
            <div class="px-10 pt-5 relative">
                <router-view :key="$route.fullPath"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader";
import SideBar from "@/components/layouts/SideBar";

export default {
    components: {
        TheHeader,
        SideBar
    },
};
</script>

<style>

</style>
