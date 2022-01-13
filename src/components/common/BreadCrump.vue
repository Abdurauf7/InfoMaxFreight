<template>
    <div class="w-full h-48 bg-img mt-8">
        <div class="relative  w-full h-48 bg-cover-img">
            <div class="grid grid-cols-12 gap-1" >
                <div class="relative col-start-1 col-end-2 ml-5 grid grid-cols-3 grid-rows-4 gap-11 mt-5">
                    <div class="w-1 h-1 bg-white rounded-lg"></div>
                    <div class="w-1 h-1 bg-white rounded-lg"></div>
                    <div class="w-1 h-1 bg-white rounded-lg"></div>
                    <div class="w-1 h-1 bg-white rounded-lg"></div>
                    <div class="w-1 h-1 bg-white rounded-lg"></div>
                    <div class="w-1 h-1 bg-white rounded-lg"></div>
                    <div class="w-1 h-1 bg-white rounded-lg"></div>
                    <div class="w-1 h-1 bg-white rounded-lg"></div>
                    <div class="w-1 h-1 bg-white rounded-lg"></div>
                    <div class="w-1 h-1 bg-white rounded-lg"></div>
                    <div class="w-1 h-1 bg-white rounded-lg"></div>
                    <div class="w-1 h-1 bg-white rounded-lg"></div>
                </div>
                <div class="col-start-2 mt-8 ml-5 w-40">
                    <div class="flex justify-around"> 
                        <h3 class="text-white">Home</h3>
                            <div class="romb">    
                            </div>
                        <h2 style="color:#9498A3;" class="">{{this.$route.fullPath.replace('/', "")}}</h2>
                    </div>
                    <h1 class="main-text">{{this.$route.fullPath.replace('/', "")}}</h1>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
export default {
    created(){
        
    }
}
</script>

<style scoped>
.bg-img {
    background: url('../../assets/img/breadcrumpBackground2.svg') no-repeat;
    background-size: cover;
}
.bg-cover-img {
    background-color: rgb(30, 58, 138, 0.5);
}
.romb {
    height: 4px;
    width: 4px;
    background-color: #9CAEED;
    margin-top: 0.6em;
    transform: rotate(45deg);
}
.main-text {
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 70px;
color: #FFFFFF;
}
</style>