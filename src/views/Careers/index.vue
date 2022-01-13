<template>
     <BreadCrumps/>
     <div class="container h-screen mx-auto mt-20 ">
          <h3 class="content-text">Available vacancies</h3>
          <div class="content-line mt-2"/>
          <p class="mt-4 content-info ">Internship, apprenticeship or dual studies: at GLS, you put your faith in the future. Lay the foundation for your logistics career with us, in a sector that is developing dynamically and continuously growing.</p>
          <p class="mt-4 content-info ">Expert, motivated employees are the basis of our service. We need creative minds and people who can pull their weight. That is why we continually invest in well-founded training and further education of our specialist employees.</p>
         <div class="mt-10">
          <Vacancies/>
         </div>
     </div>
     <Footer/>
</template>


<script>

import BreadCrumps from '../../components/common/BreadCrump.vue'
import Vacancies from '../../components/common/Vacancies.vue'
import Footer from '../../components/Footer.vue'

export default {
     name:'careers',
    components:{
         BreadCrumps,
         Vacancies,
         Footer
         
     },
}
</script>

<style scoped>
     .content-text {
          font-style: normal;
          font-weight: bold;
          font-size: 30px;
          line-height: 100%;
          text-transform: uppercase;
          color: #3E4353;
     }
     .content-line {
          width: 60px;
          height: 2px;
          left: 124px;
          top: 444px;
          background: #9CAEED;
          border-radius: 1px;
     }
     .content-info {
          width: 1344px;
         
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 28px;
          color: #656D87;

     }
</style>