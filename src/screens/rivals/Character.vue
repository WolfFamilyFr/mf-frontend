<template>
    <NavBar :pages="RivalsPages" :siteSelected="RivalsSite" />
    <SubNavBar :pages="RivalsCharacterPages" />
    <div>
        <div>
            <div>
                <div></div>
                <div>
                    <div>{{ character.role }}</div>
                    <div>{{ character.nickname }}</div>
                </div>
            </div>
            <div>
                {{ character.firstName }} {{ character.lastName }}
            </div>
            <div>
                Difficulty {{ character.difficulty }}
            </div>
            <div>
                {{ character.description }}
            </div>
        </div>
        <div>
            <!-- <img src="" alt=""> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import NavBar from '../../components/NavBar.vue';
import SubNavBar from '../../components/SubNavBar.vue'
import { RivalsSite } from '../../types/common';
import { Character, RivalsCharacterPages, RivalsPages } from '../../types/rivals';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute()
const character = ref({} as Character)

async function initializeCharacter() {
    const id = route.params.id
    const characterResponse = await axios.get<Character>('http://localhost:3000/rivals/character/' + id)
    character.value = characterResponse.data
}

onMounted(async () => {
    await initializeCharacter()
})
</script>