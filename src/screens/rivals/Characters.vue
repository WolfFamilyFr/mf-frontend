<template>
    <NavBar :pages="RivalsPages" :siteSelected="RivalsSite" />
    <div class="flex-wrap flex justify-around items-center text-center">
        <div class="cursor-pointer rounded border-solid border-gray-400 border-2 hover:bg-gray-100 active:bg-gray-200 m-3" v-for="character in characters" v-bind:key="character.nickname" >
            <router-link  :to="{ name: 'RivalsCharacter', params: { id: character.id }}">
                <img class="w-32 h-32" src="./../../assets/images/characters/logo_iron_man.png"  />
                <span>{{ character.nickname }}</span>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavBar from '../../components/NavBar.vue'
import axios from 'axios';
import { Character, RivalsPages } from '../../types/rivals';
import { onMounted, ref } from 'vue';
import { RivalsSite } from '../../types/common';

const characters = ref([] as Character[])

async function initializeCharacters() {
    const charactersResponse = await axios.get<Character[]>('http://localhost:3000/rivals/character')
    characters.value = charactersResponse.data
}

onMounted(async () => {
    await initializeCharacters()
})
</script>