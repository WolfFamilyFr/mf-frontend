import { createRouter, createWebHistory } from 'vue-router'
import Home from './screens/Home.vue'
import RivalsHome from './screens/rivals/Home.vue'
import RivalsCharacter from './screens/rivals/Character.vue'
import RivalsCharacters from './screens/rivals/Characters.vue'
import ComicsHome from './screens/comics/Home.vue'
import CinematicHome from './screens/cinematic/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/rivals',
        name: 'RivalsHome',
        component: RivalsHome
    },
    {
        path: '/rivals/characters',
        name: 'RivalsCharacters',
        component: RivalsCharacters
    },
    {
        path: '/rivals/characters/:id',
        name: 'RivalsCharacter',
        component: RivalsCharacter
    },
    {
        path: '/comics',
        name: 'ComicsHome',
        component: ComicsHome
    },
    {
        path: '/cinematic',
        name: 'CinematicHome',
        component: CinematicHome
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router