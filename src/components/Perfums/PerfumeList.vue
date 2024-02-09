<template>
  <div v-for = "perfume in perfumes" :key="perfume.id" class="col-md-3">
    <!-- <a :href="getPerfumeLink(perfume.id)"> -->
    <div class="card">
      <img @click="navigateToPerfumDetails(perfume.id)" class="card-img-top" :src="perfume.img">
      <div class="card-body">
        <h5 class="card-title">{{ perfume.name }}</h5>
        <p class="card-text">{{ perfume.description }}</p>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
        
        <span>${{ perfume.price }}</span>
      </div>
    </div>
  <!-- </a> -->
  </div>
</template>
<script>

export default {
props:['perfumes'],

setup(){
  // Function to get the link for each perfume
  const getPerfumeLink = (perfumeId) => {
      // Assuming you have a route named 'perfumeDetails' with a parameter ':id'
      // Adjust the route name and parameters as per your actual router setup
      return `/perfume/${perfumeId}`;
    };

    // Return  methods to be used in the template
    return {
      getPerfumeLink
    }
}
}
</script>