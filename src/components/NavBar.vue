<template>
  <nav class="bg-gray-100 p-4">
      <div class='container mx-auto flex items-center'>
        <h5 class="text-xl font-bold">
          <router-link to="/">POS App</router-link>
        </h5>

        <ul class="flex">
          <li class="px-4"><router-link to="/products">Product</router-link></li>
          <li class="px-4"><router-link to="/users">Users</router-link></li>
        </ul>
      </div>
  </nav>
</template>

<script>
</script>


<style>
</style>