<template>
  <div v-for = "perfume in perfumes" :key="perfume.id" class="col-md-3 mb-4">
    <div class="card">
      <router-link to="/perfume">
      <img  class="card-img-top" :src="perfume.img">
      </router-link>
      <div class="card-body">
        <h5 class="card-title">{{ perfume.name }}</h5>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
        <span> €{{ perfume.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props:['perfumes'],
}
</script>
