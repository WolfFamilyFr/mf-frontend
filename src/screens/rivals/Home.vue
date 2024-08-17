<template>
    <NavBar :pages="RivalsPages" :siteSelected="RivalsSite" />
    <div>
        Home Rivals
    </div>
    <div>
        <router-link :to="{ name: 'RivalsCharacters'}">
            Go characters
        </router-link>
    </div>
</template>

<script setup lang="ts">
import NavBar from '../../components/NavBar.vue'
import { RivalsSite } from '../../types/common';
import { RivalsPages } from '../../types/rivals';

</script>