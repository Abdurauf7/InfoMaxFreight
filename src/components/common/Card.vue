<template>
    <div class="card-container mt-5" @mouseover="isHovered = true" @mouseleave="isHovered = false" >
        <div class="flex p-3">
            <img src="../../assets/people/people.png" alt="" srcset="">
            <div class="position-info ml-3 w-full"> 
                <h6 class="text-title">Position:</h6>
                <h5 class="text-detail">{{vacancies.position}}</h5>
                <h6 class="text-title">Time:</h6>
                <h5 class="text-detail">{{vacancies.time}}</h5>
                <div class="flex justify-between">
                    <div> 
                        <h6 class="text-title">Payment:</h6>
                        <h5 class="text-detail">{{vacancies.payment}}</h5>
                    </div>
                    <div class="pt-5 pr-2" v-show="isHovered">
                        
                       <img src="../../assets/img/detail_Info.png" alt="" srcset="" v-on:click="handleChangeLocation(vacancies)">
                        
                    </div>

                </div>
               
            </div>
        </div>
    </div>
  
        
</template>

<script>
export default {
    props:['vacancies'],
    data () {
        return {
            isHovered: false
        }
    },
    methods : {
        handleChangeLocation () {
            this.$router.push({name:'details'});
            
        }

    }
}

</script>


<style scoped>
    .card-container {
        width: 379px;
        height: 162px;
        background: #fff;
        box-shadow: 0px 8px 12px rgba(9, 21, 54, 0.08);
        border-radius: 8px;
    }
    
    .card-container:hover  {
        background:#3E58A5;
        transition: 1s ease all;
        cursor: pointer;
        color: #fff;
        
    }
    .card-container:hover h5 {
        color: #fff; 
    }
    .card-container:hover h6{
        color: rgba(255, 255, 255, 0.7); 
    }

    .text-title {
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 130%;
        color: #7580A0;
        margin-top: .5rem;
    }

    .text-detail {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 130%;
        color: #3E4353;
    }
</style>