<template>
    <div class="my-5 w-full p-4 max-auto">
        <div class="mx-auto">
            <div class="flex h-32  items-center">
                <NextStep :text="`About Shipper`" :unActive="1" />
                <NextStep :text="`Truckload detail`" :unActive="2" />
                <NextStep :text="`Routing detail`" :unActive="3" />
                <CurrentStep :text="`Contact detail`" :activeStep="4" />
            </div>
        </div>
        <div class="mt-5 p-4 ">
        <h1 class="form-main-text">Fill in the form</h1>
        <div class="mt-3 flex justify-between">
                    <div class="mb-4" style="width:49%;">
                        <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="phone_number">
                            Phone number
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone_number" type="text" placeholder="Write your phone number">
                    
                    </div>
                    <div class="mb-4" style="width:49%;">
                        <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="companyName">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="example@mail.com">
                    </div>
                </div>
                <div class="mb-4 w-full">
                        <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="yourName">
                            Comments
                        </label>
                        <textarea class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comment" type="text" placeholder="Write your comment"></textarea>
                </div>
        </div>
    </div>
</template>

<script>
import CurrentStep from '../../../components/common/CurrentStep.vue'
import NextStep from '../../../components/common/NextStep.vue'

export default {
    name:'TruckLoadDetail',
    components:{
        CurrentStep,
        NextStep
    }
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