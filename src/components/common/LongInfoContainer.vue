<template>
    <div class="final-container">
        <div class="small-container ml-7 border-4 ">
            <div class="flex justify-center items-center h-full">
                <img src="../../assets/icons/location.svg" alt="" srcset="">
            </div>
        </div>
        <div class="ml-7 mt-3">
            <h1 class="info-title">Address: </h1>
            <p class="detail-title">4255 Westbrook Dr Lounge, Aurora, IL 60504, USA, illinois, Aurora</p>
        </div>
    </div>
</template>

<style  scoped>

.final-container {
    height: 132px;
    width: calc(100vw - 43vw);
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