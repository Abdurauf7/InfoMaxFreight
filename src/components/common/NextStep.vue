<template>
    <div class="next-steps-container">
                <div class="next-steps-text-container">
                    <span class="next-step-text flex justify-center items-center h-full">{{unActive}}</span>
                </div>
                <h1 class="next-steps-container-text mt-4 ml-5">{{text}}</h1>
    </div>
</template>

<script>
export default {
    props :{
        text:{
            type:String,
            required:true
        },
        unActive:{
            type:Number,
            required:true
        }
    }
    
}
</script>

<style scoped>

.next-steps-container {
    width: 183px;
    height: 100px;
    background: #FAFAFC;
    margin-left:.6em
}
.next-steps-text-container{
    width: 48px;
    height: 48px;
    margin-left: 20px;
    background: #EDEFF3;
    border: 1px solid #E1E4EB;
    border-radius: 0px 0px 8px 8px;
}
.next-step-text {
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 32px;
    text-align: center;
    color: #3E58A5;
}
.next-steps-container-text {
    font-family: Soleil;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #7580A0;
}
</style>