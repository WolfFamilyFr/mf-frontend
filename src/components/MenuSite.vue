<template>
  <div v-if="siteSelected" class="px-3 py-3 bg-slate-900">
    <img  @click="visibleMenu()" :src="siteSelected.logoPath" class="w-20 h-10 cursor-pointer" />
    <ul v-if="visible" class="absolute bg-slate-900 left-0 space-y-2">
      <li
        v-for="site in Sites"
        v-bind:key="site.name"
        class="px-3 py-2 hover:bg-slate-700 cursor-pointer"
      >
        <router-link :to="{ name: site.name }"><img :src="site.logoPath" class="w-20 h-10" /></router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Site, Sites } from '../types/common';

defineProps<{ siteSelected?: Site }>()

const visible = ref(false)

function visibleMenu() {
  visible.value = !visible.value
}
</script>
