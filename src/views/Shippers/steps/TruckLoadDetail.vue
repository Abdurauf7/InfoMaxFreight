<template>
    <div class="my-5 w-full p-4 max-auto">
        <div class="mx-auto">
            <div class="flex h-32  items-center">
                <NextStep :text="`About Shipper`" :unActive="1" />
                <CurrentStep :text="`Truckload detail`" :activeStep="2" />
                <NextStep :text="`Routing detail`" :unActive="3" />
                <NextStep :text="`Contact detail `" :unActive="4" />
            </div>
        </div>
        <div class="mt-5 p-4 ">
            <h1 class="form-main-text">Fill in the form</h1>
            <div class="mt-3 flex justify-between">
                <div class="mb-4" style="width:49%;">
                    <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="yourName">
                        Truckload type
                    </label>
                    <div class="inline-block relative w-11/12">
                        <select  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div class="mb-4" style="width:49%;">
                    <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="yourName">
                        Truck type needed
                    </label>
                    <div class="inline-block relative w-11/12">
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3 flex justify-between">
                <div class="mb-4" style="width:49%;">
                    <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="yourName">
                        Cargo type
                    </label>
                    <div class="inline-block relative w-11/12">
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div class="mb-4" style="width:49%;">
                    <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="yourName">
                        Cargo weight
                    </label>
                    <div class="inline-block relative w-11/12">
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CurrentStep from "../../../components/common/CurrentStep.vue"
import NextStep from "../../../components/common/NextStep.vue"

export default {
    name:"TruckLoadDetail",
    components:{CurrentStep, NextStep}
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
