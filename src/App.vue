<template>
    <!-- <nav-bar></nav-bar> -->
    <div class="flex">
        <side-bar></side-bar>
        <div class="main w-full">
            <the-header></the-header>
            <div class="px-10 pt-5">
                <router-view :key="$route.fullPath"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from "@/views/layouts/TheHeader";
import SideBar from "@/views/layouts/SideBar";

export default {
    components: {
        TheHeader,
        SideBar,
    },
};
</script>

<style>
.router-link-active {
    color: black;
    font-weight: bold;
}

.router-link-exact-active {
    color: black;
    font-weight: bold;
}
</style>
