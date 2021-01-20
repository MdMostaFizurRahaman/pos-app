<template>
  <div class="card text-white bg-primary mb-3">
    <div class="card-header">{{title}}</div>
    <div class="card-body">
      <h5 class="card-title">${{amount}} USD</h5>
    </div>
  </div>
</template>

<script>

export default {
    props: {
        title: {
            required: true,
            type: String,
        },
        amount: {
            required: true
        }
    },

    // data(){
        
    // },
    // methods: {

    // }
}
</script>