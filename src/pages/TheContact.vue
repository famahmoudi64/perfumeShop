<template>
    <div class="container-fluid container2">
     <div class="container h-100"> 
       <div class="row">
         <div class="col-md-6 mt-5">
           <div class="d-flex align-items-center justify-content-center h-100">
             <img src="../assets/images/calling.jpeg" class="img-fluid rounded http://192.168.178.135:8080/" style="height: 100%">
           </div>
         </div>
           <div class="col-md-6 mt-5">
             <div class="bg-light rounded h-100 d-flex align-items-center justify-content-center">
               <div class="container">
                 <p>you can contact with us if you have any question</p>
                   <form @submit.prevent="submitForm">
                     <div class="mb-3">
                       <label for="email" class="for-label">Email :</label>
                       <input  id="email" type=" text" class="form-control">
                     </div>
                     <div class="mb-3">
                       <label for="comment" class="for-label">comment :</label>
                        <textarea id="comment" class="form-control" v-model="comment"></textarea>
                     </div>
                         <button class="btn btn-success">Submit</button>
                   </form>
               </div>
            </div> 
        </div>
       </div>
      </div>  
    </div> 
   </template>
   <script>
   import { ref } from 'vue'
   export default {
   setup() {
   const comment = ref('')

   function submitForm(){
    console.log(comment.value)
    comment.value = ''
   }
   return { comment, submitForm }
  }

   }
  </script>
   
   <style>
    .container2 {
    width:100vw; 
    height:calc(100vh - 68px); 
    background-image: url('../assets/images/main-header4.png'); 
    background-color: rgb(135, 123, 147);
    background-size: cover;
    padding-bottom: 10px;
     }  
   
   @media (max-width: 992px) {
  .container2 {
    height: auto; 
  }
  }
   </style>