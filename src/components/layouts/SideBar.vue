<template>
  <div class="bg-secondary-500 w-64 h-screen overflow-auto">
    <div
      class="text-2xl text-center bg-white shadow h-16 flex items-center justify-center"
    >
      <a class="" href="#">POS App</a>
    </div>

    <ul>
      <li class="">
        
        <router-link class="px-4 py-3 border-l-4 border-transparent hover:border-primary-500 hover:bg-secondary-600 text-white flex items-center" :to="{name: 'Home'}">
            <svg class="h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Dashboard
        </router-link>
      </li>

      <li class="">
         <router-link class="px-4 py-3 border-l-4 border-transparent hover:border-primary-500  hover:bg-secondary-600 text-white flex items-center" :to="{name: 'Branch'}">
           <svg class="h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Branches
        </router-link>
      </li>

      <li class="">
         <router-link class="px-4 py-3 border-l-4 border-transparent hover:border-primary-500 hover:bg-secondary-600 text-white flex items-center" :to="{name: 'Product'}">
            <svg class="h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            Products
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
   
};
</script>

<style lang="scss" scoped>

</style>