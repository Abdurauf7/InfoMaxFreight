<template>
<div class="container mx-auto">
    <div class="grid grid-cols-12 gap-4  m-5 p-3">
        <div class="flex justify-between col-start-1 col-end-5">
                <div class="flex p-4">
                    <span><img src="../assets/img/map.png" alt="" srcset=""></span>
                    <h3 class="text-sm mx-3 tracking-widest">Aurora, Illinois, U.S.A</h3>
                </div>
                <div class="flex py-4">
                    <span><img src="../assets/img/call-phone.png" alt="" srcset=""></span>
                    <h3 class="text-sm mx-3 tracking-widest">630-413-0404</h3>
                </div>
        </div>

        <div class="flex justify-around text-center col-start-6 col-end-8">
            <span><img src="../assets/img/logo.png" alt="" srcset=""></span>
            <h3 class="text-lg font-bold">INFOMAX<br/><span class="font-thin tracking-widest">FREIGHT</span></h3>
        </div>
        <div class="col-start-10 col-end-12 ">
            <button class="flex rounded border-2 p-2 bg-gray-100"> 
                 <img src="../assets/img/quote.svg" alt="" srcset="" >
                <span class=" ml-2 tracking-widest text-indigo-900">Request a quote</span></button>
        </div>
    </div>
    </div>
     <Navbar />
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components:{
      Navbar
  }
}
</script>