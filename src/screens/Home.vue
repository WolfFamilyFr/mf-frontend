<template>
    <NavBar />
    <div class="mx-auto w-fit">
        <h1 class="mt-6 mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">Welcome on the Marvel family site</h1>
        <p class="mx-auto w-fit text-lg font-normal text-gray-600 lg:text-xl">Please select a site</p>
    </div>
    <div class="flex-wrap flex justify-around items-center text-center mt-6">
        <div class="rounded border-solid border-gray-400 border-2 m-3">
            <router-link :to="{ name: 'RivalsHome'}">
                <img src="./../assets/images/logo_rivals.png" class="w-80 h-40 cursor-pointer  p-6"/>
            </router-link>
        </div>
        <div class="rounded border-solid border-gray-400 border-2 m-3">
            <router-link :to="{ name: 'ComicsHome'}">
                <img src="./../assets/images/logo_comics.png" class="w-80 h-40 cursor-pointer  p-6"/>
            </router-link>
            
        </div>
        <div class="rounded border-solid border-gray-400 border-2 m-3">   
            <router-link :to="{ name: 'CinematicHome'}">
                <img src="./../assets/images/logo_cinematic.png" class="w-80 h-40 cursor-pointer  p-6"/>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
</script>