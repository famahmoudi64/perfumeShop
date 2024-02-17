<template>
   <nav class="navbar navbar-expand-lg navbar-light  shadow-sm mt-0 header ">
    <div class="container-fluid">
      <a class="navbar-brand margin-left text-light" href="#">BE Perfume</a>
      <button class="navbar-toggler margin-right" type="button" data-bs-toggle="collapse" href="navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link text-light font" aria-current="page" href="#"  to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light font" aria-current="page" href="#"  :to="{name:'About'}">About BE</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light font" href="#" :to="{name:'perfume'}">Perfumes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light font" href="#" :to="{name:'contact'}">Contact BE</router-link>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav ms-auto">
          <!-- <li class="nav-item">
            <router-link class="nav-link p-1 me-3 text-light" to="/QR">
              BE
            </router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>
.router-link-active {
    color:rgba(0,0,0,0.9);
    border-bottom:2px solid rgba(155, 111, 163, 0.9)
}
.bi{
    font-size:2rem
}
.margin-left{
  margin-left:30px
} 
.margin-right{
  margin-right:30px;
}
.margin {
  margin-left:600px
}
  .header {
    background-color:rgba(42, 19, 66, 0.72);
    z-index: 3;
    position:sticky;
    top:0;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    padding:15px 0px 7px;
  }
  .font {
    font-size: var(--bs-navbar-brand-font-size)
  }
</style>
