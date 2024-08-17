<template>
  <div v-if="!IsEmpty()" class="bg-slate-900 text-gray-100 shadow md:flex justify-between items-center">
    <div class="flex items-center">
      <MenuSite :siteSelected="siteSelected" />
    </div>

    <div class="px-6">
      <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
        <img
          class="w-20 h-10"
          :src="[
            open ? './src/assets/images/logo_rivals.png' : './src/assets/images/logo_rivals.png'
          ]"
        />
      </span>

      <ul
        class="md:flex md:items-center md:px-0 px-10 md:pb-0 md:static absolute bg-slate-900 md:w-auto w-full top-14 duration-700 ease-in"
        :class="[open ? 'left-0' : 'left-[-100%]']"
      >
        <li class="md:mx-4 md:my-0 my-auto" v-for="page in pages" v-bind:key="page.name">
          <router-link :to="{ name: page.name }">{{ page.label }}</router-link>
        </li>
      </ul>
    </div>
  </div>
  <div v-if="IsEmpty()" class="bg-slate-900 text-gray-100 shadow flex justify-between items-center">
    <div class="m-auto px-3 py-3">
      <img class=" w-20 h-10" src="./../assets/images/logo_marvel.png">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuSite from './MenuSite.vue'
import { Page, Site } from '../types/common';

const props = defineProps<{ pages?: Page[], siteSelected?: Site }>()

const open = ref(false)

function IsEmpty() {
  return props.pages === undefined && props.siteSelected === undefined
}

function MenuOpen() {
  open.value = !open.value
}

</script>
