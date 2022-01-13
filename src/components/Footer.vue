<template>
<div class="h-2/4">

    <div class="footer-container">
        <div class="grid grid-cols-12 h-full relative">
            <div class="logo-container  col-start-1 col-end-3  w-8/12 absolute top-0 right-0 h-full">
                 <div class="flex justify-between flex-col items-center h-2/4 mt-8">
                     <img  src="../assets/img/footer_logo.svg" alt="" srcset="">
                     <div class="w-7/12 pt-7">
                         <div class="flex justify-around">
                             <img src="../assets/img/twitter_org.svg" alt="" srcset="">
                             <img src="../assets/img/facebook_org.svg" alt="" srcset="">
                             <img src="../assets/img/telegram_org.svg" alt="" srcset="">
                             <img src="../assets/img/instagram.png" width="15" height="15" alt="" srcset="">
                         </div>
                     </div>
                </div>
            </div>
            <div class=" mt-12 col-start-1 col-end-3 ml-6 ">
                <img src="../assets/img/footer_dots.svg" alt="" srcset="">
            </div>
            <div class="col-start-3  mt-6 pl-5">
                <div class="flex mt-3">
                    <img src="../assets/img/phone.svg" alt="" srcset="">
                     <h1 class="text-white pl-1 contacts-text">630-413-0404</h1>
                </div>
                <div class="flex justify-around mt-3">
                    <img src="../assets/img/fax.svg" alt="" srcset="">
                     <h1 class="text-white contacts-text">630-468-0893</h1>
                </div>
                <div class="flex mt-3">
                    <img src="../assets/img/mail.svg" alt="" srcset="">
                     <h1 class="text-white ml-2 contacts-text">operations@infomaxfreight.com</h1>
                </div>
            </div>
            <div class="col-start-6 mt-7">
                <h1 class="text-white mt-4 menu-text" >Carriers</h1>
                <h1 class="text-white mt-4 menu-text" >Insights</h1>
            </div>
            <div class="col-start-8 mt-7"> 
                <h1 class="text-white mt-4 menu-text" >Shippers</h1>
                <h1 class="text-white mt-4 menu-text" >Careers</h1>
            </div>
            <div class="col-start-10 mt-7">
                <h1 class="text-white mt-4 menu-text" >Who we are</h1>
                <h1 class="text-white mt-4 menu-text" >Contacts</h1>
            </div>
        </div>
    </div>
        <div class="border-t-2 border-gray-500  w-full copiration-container grid grid-cols-12 relative ">
             <div class="col-start-1  col-span-4">
                 <h1 class="ml-28 mt-5 text-white">This site and all content is copyright ©2020 Infomax Freight, Inc.</h1>
             </div>
             <div class="col-start-10  col-span-3 flex">
                 <h5 class="text-white mt-4">Designed and developed by:</h5>
                 <div class="ml-2 mt-5">
                  <img src="../assets/img/uic.svg" alt="" srcset="">
                 </div>
             </div>
             <div class="absolute bottom-0 right-1">
                 <img src="../assets/img/uic_doots.svg" alt="" srcset="">
             </div>
        </div>

</div>
</template>

<script>

export default {
    
}
</script>



<style scoped>
.footer-container {
    width: 100%;
    height: 161px;
    background: #1F3167;
}
.copiration-container {
    height: 70px;
    background: #1F3167;
}
.logo-container{
    background: rgba(255, 255, 255, 0.1);
}

.contacts-text {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px
}

.menu-text {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    color: #FFFFFF;
}
</style>