<template>
    <div class="my-5 w-full p-4 mx-auto">
       <div class="mx-auto"> 
            <div class="flex h-32  items-center">
                <CurrentStep :text="`About Shipper`" :activeStep="1"/>
                <NextStep :text="`Truckload detail`" :unActive='2'/>
                <NextStep :text="`Routing detail`" :unActive='3'/>
                <NextStep :text="`Contact detail`" :unActive='4'/>
            </div>
            <div class="mt-5 p-4">
                <h1 class="form-main-text">Fill in the form</h1>
                <div class="mt-3 flex justify-between">
                     <div class="mb-4" style="width:49%;">
                        <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="name">
                            Your Name
                        </label>
                        <input v-bind:value="formValue.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Write your name">
                     </div>
                     <div class="mb-4" style="width:49%;">
                        <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="companyName">
                            Company name
                        </label>
                        <input v-bind:value="formValue.companyName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="companyName" type="text" placeholder="Write the name of your company">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CurrentStep from '../../../components/common/CurrentStep.vue'
import NextStep from '../../../components/common/NextStep.vue'
export default {
    name:'AboutShippers',
    props:{
        formValue:{
            name:String,
            companyName:String
        }
    },
    components : {
        CurrentStep,
        NextStep
    },
}
</script>

<style scoped>

.form-main-text {
    font-family: Soleil;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 35px;
    color: #3E4353;
    letter-spacing: 3px;
}

</style>