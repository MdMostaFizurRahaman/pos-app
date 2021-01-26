<template>
    <div>
        <div>
                <img :src="product.image" id="product-single-image">
        </div>
        <ul class="list-group mt-3">
            <li class="list-group-item">Product Name: {{product.title}}</li>
            <li class="list-group-item">Product Category: {{product.category}}</li>
            <li class="list-group-item">Product Price: {{product.price}}</li>
            <li class="list-group-item">Product Description: {{product.description}}</li>
        </ul> 
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data(){
            return {
                product: {}
            }
        },
        created(){
            console.log(this.$route.params.id)
            axios.get('https://fakestoreapi.com/products/'+this.$route.params.id)
                .then(res => this.product = res.data)
                .catch(err => console.log(err))
        }
    }
</script>

<style scoped>
    #product-single-image{
        height: 300px;
    }
</style>