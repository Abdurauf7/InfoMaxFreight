<template>
    <BreadCrump/>
    <div class="mx-auto container p-2 my-12">
        <component v-bind:is="steps[currentStep].component"
        v-bind:formValue="formValue[steps[currentStep].label]"
        />
        <div class="flex justify-end items-end mr-7" v-bind:class="{'h-32': currentStep === 0 , 'h-14': currentStep !== 0 }">
            <button :disabled="currentStep === 0" v-bind:class="{ 'cursor-not-allowed' : currentStep === 0, 'opacity-50': currentStep === 0}" class="input-button-container text-white font-bold py-2 px-4 rounded  mr-5" @click="previosPage()">Previous step</button>
            <button class="input-button-container text-white font-bold py-2 px-4 rounded" @click="nextPage()">Next step</button>
        </div>
    </div>
    <Footer/>
</template>



<script>
import BreadCrump from '../../components/common/BreadCrump.vue'
import Footer from '../../components/Footer.vue'

import AboutShippers from './steps/AboutShipper.vue'
import TruckLoadDetail from './steps/TruckLoadDetail.vue'
import RoutingDetail from './steps/RoutingDetail.vue'
import ContactDetail from './steps/ContactDetail.vue'

export default {
    name:'Shippers',
    data () {
        return {
            currentStep : 0,
            formValue:{
                aboutShipperInformation:{
                    name:'',
                    companyName:''
                },
                truckLoadDetailInformation:{
                    truckLoadType:'',
                    truckTypeNeeded:'',
                    cargoType:'',
                    cargoWeight:''
                },
                routingDetailInformation:{
                    pickupDate:'',
                    deliverDate:'',
                    fromCity:'',
                    toCity:''
                },
                contactDetailInformation:{
                    phoneNumber:'',
                    email:'',
                    comments:''
                }
            },
            steps:[
                {
                    component:AboutShippers,
                    label:'aboutShipperInformation'
                },
                {
                    component:TruckLoadDetail,
                    label:'truckLoadDetailInformation'

                },
                {
                    component:RoutingDetail,
                    label:'routingDetailInformation'
                },
                {
                    component:ContactDetail,
                    label:'contactDetailInformation'
                }
            ]

        }
    },
    components : {
        BreadCrump,
        Footer,
        AboutShippers,
        TruckLoadDetail,
        RoutingDetail,
        ContactDetail
    },

    methods: {
        nextPage () {
            this.currentStep += 1;
        },
        previosPage () {
            console.log("previous")
            this.currentStep -= 1 ;
        }
    }
}
</script>

<style scoped>
.container{
    width:53%;
    background: #FFFFFF;
    border: 1px solid #EEEFF3;
    box-sizing: border-box;
    box-shadow: 0px 6px 15px rgba(9, 21, 54, 0.1);
    border-radius: 8px;
    height:calc(100vh - 40vh);
}

.input-label {
    font-family: Soleil;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #7580A0;
}

.input-button-container {
    width: 169px;
    height: 44px;
    background: #3E58A5;
    border-radius: 4px;
}
</style>