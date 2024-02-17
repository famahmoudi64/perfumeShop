<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3200">
  <div class="carousel-inner">
    <div class="carousel-item active slider-image">
      <img src="../assets/images/main-header11.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item slider-image">
      <img src="../assets/images/main-header2.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item slider-image">
      <img src="../assets/images/main-header4.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item slider-image">
      <img src="../assets/images/main-header5.png" class="d-block w-100" alt="...">
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
    <div class="container-fluid mt-2 ">
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
        img :require('../assets/images/img1.jpeg'),
        name:'Willem friderik',
        price:32
      },
      {
        id:2,
        img :require('../assets/images/img2.jpeg'),
        name:'Juliana',
        price:29
      },
      {
        id:3,
        img :require('../assets/images/img3.jpeg'),
        name:'Willem alexander',
        price:32
      },
      {
        id:4,
        img :require('../assets/images/img4.jpeg'),
        name:'Wilhelmina',
        price:29
      },
    ])
    return { perfumes }
    }
  };
  </script>
  
  <style>
  .slider-image {
    width:100vw;
    height:calc(100vh - 10px);
  }
  .bg2-color{
    background-color: rgb(65, 35, 77);
  }
  </style> 