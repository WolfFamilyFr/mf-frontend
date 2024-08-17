<template>
    <div class="bg-slate-400 text-gray-100 shadow md:flex justify-between items-center">
        <ul class="m-auto md:flex md:items-center md:px-0 px-10 md:pb-0 md:static absolute bg-slate-400 md:w-auto w-full top-14 duration-700 ease-in">
            <li class="md:mx-4 md:my-0 my-2" v-for="page in pages" v-bind:key="page.name">
                <router-link :to="{ name: page.name }">{{ page.label }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Page } from '../types/common';

defineProps<{ pages?: Page[] }>()
</script>