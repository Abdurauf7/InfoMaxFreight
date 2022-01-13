<template>
    <BreadCrumps/>
    <div class="container mx-auto ">
        <div class=" my-12 flex">
            <div>
            <img src="../../assets/people/operator.svg" alt="" srcset="">
            <div class="content-line mt-9" />
                <div class="mt-4 detail-info-container flex justify-between flex-col  h-32">
                    <p class="detail-info">Internship, apprenticeship or dual studies: at GLS, you put your faith in the future. </p>
                    <p class="detail-info">Lay the foundation for your logistics career with us, in a sector that is developing dynamically and continuously growing.</p>
                </div>
            </div>
                <div class="ml-10 grid grid-cols-2 grid-rows-3 gap-7 h-2/3 gap-1 w-11/11 ">
                    <InfoContainer :title="`Position`" :description="Operator" />
                    <InfoContainer :title="`Company`" :description="`InfomaxFreight`"  />
                    <InfoContainer :title="`Time`" :description="`Full time, 40 hours a week`"  />
                    <InfoContainer :title="`Payment`" :description="`$2600 per week`"  />
                    <InfoContainer :title="`E-mail`" :description="`operations@infomaxfreight.com`"  />
                    <InfoContainer :title="`Phone`" :description="`630-413-0404`"  />
                    <LongInfoContainer/>
                </div>
        </div>
        <div class="mt-5 mb-7 w-11/11">
        <Vacancies />
        </div>
    </div>
    <Footer/>
    
</template>


<script>
import BreadCrumps from '../../components/common/BreadCrump.vue'
import InfoContainer from '../../components/common/InfoContainer.vue'
import LongInfoContainer from '../../components/common/LongInfoContainer.vue'
import Vacancies from '../../components/common/Vacancies.vue'
import Footer from '../../components/Footer.vue'

export default {
    name:'details',
   components:{
       BreadCrumps,
       InfoContainer,
       LongInfoContainer,
       Vacancies,
       Footer
   },
   data(){
        return {
            detailInfo:{}
        }
    },
  created(){
      console.log(this.detailInfo)
  }
}

//   <h1> {{ JSON.parse(this.$route.params.data).position}}</h1>
//     <h1>{{ JSON.parse(this.$route.params.data).time}}</h1>
//     <h1>{{ JSON.parse(this.$route.params.data).payment}}</h1>
</script>

<style scoped>
.content-line {
    width: 89px;
    height: 2px;
    background: #9CAEED;
    border-radius: 1px;
}
.detail-info-container {
    width: 379px;
}
.detail-info {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    color:#656D87;
}
</style>