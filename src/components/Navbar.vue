<template>
  <div class="container mx-auto ">
    <router-link to="/"> <button class="bg-gray-100  ml-px p-1 text-gray-400 w-56 ">CARRIERS</button></router-link> 
    <router-link to="/Shippers"><button class="bg-gray-100  ml-px p-1 text-gray-400 w-56 "> SHIPPERS</button></router-link>
    <router-link to="/About"> <button class="bg-gray-100  ml-px p-1 text-gray-400 w-56 ">WHO WE ARE</button> </router-link>
    <router-link to="/Insights"> <button class="bg-gray-100  ml-px p-1 text-gray-400 w-56 ">INSIGHTS</button> </router-link>
    <router-link to="/Careers"><button class="bg-gray-100  ml-px p-1 text-gray-400 w-56 ">CAREERS</button> </router-link>
    <router-link to="/Contact"> <button class="bg-gray-100  ml-px p-1 text-gray-400 w-56 ">CONTACT US</button> </router-link>
  
  </div>
  <router-view/>
</template>

<script>

export default {
  
}
</script>
<style scoped> 

 a.nav-active button {
   background:#D8D9DD;
   color:#3E4353
 }
</style>



