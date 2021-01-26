<template>
  <table class="w-full">
  <thead>
    <tr class="">
      <th class="border p-4">#</th>
      <th class="border p-4">Image</th>
      <th class="border p-4">Title</th>
      <th class="border p-4">Category</th>
      <th class="border p-4">Price</th>
      <th class="border p-4">Description</th>
      <th class="border p-4" colspan="3">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border" v-for="product in products" :key="product.id">
      <th class="border p-4" >{{product.id}}</th>
      <td class="border p-4">
        <img :src="product.image" alt="" class="product-img">
      </td>
      <td class="border p-4">{{product.title}}</td>
      <td class="border p-4">{{capitalize(product.category)}}</td>
      <td class="border p-4">{{product.price}}</td>
      <td class="border p-4">{{truncate(product.description)}}</td>
      <td>
        <router-link :to="`/product/${product.id}`" class="bg-green-500 text-white px-3 py-1 rounded">View</router-link>
      </td>
      <td>
          <button class="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
      </td>
      <td>
        <button class="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
      </td>
    </tr>
  </tbody>
</table>



</template>
  
<script>
import axios from 'axios';

export default {

  data(){
    return {
      products: [],
    }
  },
  methods: {
    truncate(value){
      if(value.length > 50){
        return value.substr(0, 50) + "..."
      }
    },
    capitalize(value){
      if(value == ''){
        return '';
      }

      let arr = value.split(' ');
      let newArr = arr.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      return newArr.join(' ');

    }
  },
  created() {
    axios.get('https://fakestoreapi.com/products?limit=5')
        .then(res => {
          this.products = res.data
        })
        .catch(err => {
          console.log(err)
        })    
  },
};
</script>


<style scoped>
.product-img{
  height: 60px;
}
</style>
