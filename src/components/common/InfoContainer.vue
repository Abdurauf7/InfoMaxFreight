<template>
    <div class="info-container">
        <div class="small-container ml-7 border-4">
            <div class="flex justify-center items-center h-full">
                <img src="../../assets/icons/job-container.svg" alt="" srcset="">
            </div>
        </div>
        <div class="ml-7 mt-3">
            <h1 class="info-title">{{title}}: </h1>
            <p class="detail-title">{{description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:["title","description"],
    created (){
        console.log(this.title)
    }
    
}
</script>

<style scoped>
    .info-container {
        width: 378px;
        height: 132px;
        background: #FAFAFC;
        border: 1px solid #EEEFF3;
        box-sizing: border-box;
        border-radius: 8px;
    }
    .small-container {
        width: 48px;
        height: 48px;
        background: #E6E9F0;
        border-radius: 0px 0px 8px 8px;
    }
    .info-title {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 130%;
        color: #7580A0;
    }
    .detail-title {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 29px;
        color: #3E4353;
    }
</style>