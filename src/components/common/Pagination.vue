<template>
<div class="flex justify-end w-11/12 mt-7 mb-2">
    <div class="flex items-center space-x-3">
    <a href="#" class="flex items-center px-4 py-2 text-gray-500 arrow-container  rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
    </a>

    <a href="#" class="px-4 py-2 text-gray-700 rounded-md  page-container">
        1
    </a>
    <a href="#" class="px-4 py-2 text-gray-700 rounded-md  page-container">
        2
    </a>
    <a href="#" class="px-4 py-2 text-gray-500 arrow-container  rounded-md  ">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    </a>
</div>
</div>
</template>


<style scoped>
    .arrow-container {
        background: #ECEFF6;
    }

    .page-container {
        color: #7580A0;
    }
    .page-container:hover {
        border:2px solid #3E58A5;
        color: #3E58A5;
    }
</style>