<template>
  <div class="image-container1">
     <div class="row">
     <!-- <the-header></the-header> -->
     <p>jhjhjhjhjhjhjh</p>
  </div>
</div>
 

</template>

<script>
// import TheHeader from '../components/UI/TheHeader.vue'

import { ref } from 'vue'
import { useRouter, useRoute} from 'vue-router'
export default{
    
// components:{ TheHeader },
setup() {
  const num1 = ref(2)
  const num2 = ref(5)
  const result = ref()
  const route = useRoute()
  const router = useRouter()
  console.log(route.params)
  function goToHome(){
       result.value = (num1.value + num2.value)
       router.push('/')

  }
  return { num1, num2, goToHome, result, route}
}

}

</script>
<style>


</style>