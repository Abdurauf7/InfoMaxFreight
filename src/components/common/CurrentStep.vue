<template>
    <div class="step-container">
                <div class="current-step-container">
                    <span class="current-step-text flex justify-center items-center h-full">{{activeStep}}</span>
                </div>
                <h1 class="ml-5 mt-4 current-step-container-text">{{text}}</h1>
            </div>
</template>


<script>
export default {
    name:'currentStep',
    props:{
        text:{
            type:String,
            required:true
        },
        activeStep:{
            type:String,
            required:true
        }
    }
    

}
</script>

<style scoped>
.step-container {
    position: relative;
    width: 180px;
    height: 100px;
    background: #3E58A5;
    border-left: 20px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    margin:.7em;
}

.step-container:after {
    content: "";
    position: absolute;
    left: 100%;
    top: 0px;
    width: 0px;
    height: 0px;
    border-top: 50px solid transparent;
    border-left: 40px solid #3E58A5;
    border-bottom: 50px solid transparent;
}

.current-step-container {
    width: 48px;
    height: 48px;
    margin-left: 20px;
    background: rgba(237, 239, 243, 0.1);
    border: 1px solid rgba(225, 228, 235, 0.2);
    border-radius: 0px 0px 8px 8px; 
}

.current-step-text {
    font-family: Soleil;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
    text-align: center;
    color: #FFFFFF;
}
.current-step-container-text {
       font-family: Soleil;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        color: #FFFFFF;
}
</style>