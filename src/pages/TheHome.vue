<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div class="carousel-inner">
    <div class="carousel-item active slider-image">
      <img src="../assets/images/image-main.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item slider-image">
      <img src="../assets/images/image10.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item slider-image">
      <img src="../assets/images/image3.jpeg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <div>
    <div class="container-fluid mt-3">
      <div class="row g-3">
        <perfume-list :perfumes = 'perfumes'></perfume-list>
      </div>
    </div>
  </div>
   
  </template>
  
  <script>

  import PerfumeList from '../components/Perfums/PerfumeList.vue'
  import { reactive } from 'vue'
  
  export default {
    components:{ PerfumeList },
    setup() {
    const perfumes = reactive([
      {
        id:1,
        img :require('../assets/images/image10.jpeg'),
        name:'perfum1',
        description:'this perfume is with flower smell',
        price:300
      },
      {
        id:2,
        img :require('../assets/images/image7.jpeg'),
        name:'perfum2',
        description:'smell',
        price:350
      },
      {
        id:3,
        img :require('../assets/images/image8.jpeg'),
        name:'perfum3',
        description:'this perfume is with flower smell',
        price:350
      },
      {
        id:4,
        img :require('../assets/images/image9.jpeg'),
        name:'perfum4',
        description:'this perfume is with flower smell',
        price:650
      }
    ])

    return { perfumes }
      
    }
  };
  </script>
  
  <style>
  /* .image-contain{
    width:100vw;
    height:calc(100vh - 68px);
    background-image: url('../assets/images/image-main.jpeg');
    background-size: cover;
  } */
  .slider-image{
    width:100vw;
    height:calc(100vh - 68px);
  }

  </style> 