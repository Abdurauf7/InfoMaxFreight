<template>
    <div>
               <h3 class="content-text"> VACANCIES:</h3>
                    <div class="content-line mt-2"/>
               <div class="grid grid grid-cols-3 gap-2">
                    <Card  v-for="vacancies in vacancies" :key="vacancies.id" v-bind:vacancies = "vacancies" />
                 </div>
          <Pagination/>
    </div>
</template>

<script>
import Card from './Card.vue'
import Pagination from './Pagination.vue'

export default {
    data(){
        return {
            vacancies:[
                    {id:1, position:'Operator',time:'9:00 - 18:00',payment:'$15.5 p/h'},
                    {id:2, position:'Graphic Designer',time:'9:00 - 18:00',payment:'$15.5 p/h'},
                    {id:3, position:'Photographer',time:'9:00 - 18:00',payment:'$15.5 p/h'},
                    {id:4, position:'Office manager',time:'9:00 - 18:00',payment:'$15.5 p/h'},
                    {id:5, position:'Marketing manager',time:'9:00 - 18:00',payment:'$15.5 p/h'},
                    {id:6, position:'Forntend developer',time:'9:00 - 18:00',payment:'$15.5 p/h'},
                    {id:7, position:'Webdeveloper',time:'9:00 - 18:00',payment:'$15.5 p/h'},
                    {id:8, position:'Senior Backend developer',time:'9:00 - 18:00',payment:'$15.5 p/h'},
                    {id:9, position:'Q/A assistant',time:'9:00 - 18:00',payment:'$15.5 p/h'},
               ]
        }
    },
    components:{
        Card,
        Pagination
    }

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
    
</style>