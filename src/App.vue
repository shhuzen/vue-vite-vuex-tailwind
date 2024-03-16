<template>
    <nav class="relative flex items-center justify-center capitalize text-lg pt-24">
        <router-link class="inline pr-5" to="/" active-class="active">Главная</router-link>
        <router-link class="inline" to="/about" active-class="active">Об продукте</router-link>
    </nav>
    <router-view class="p-24"></router-view>
    <footer>
        <p class="text-gray-400 text-xs text-center">
            <a class="flex items-center justify-center text-base font-medium text-black"
                :href="'https://github.com/' + username + '/vue-vite-vuex-tailwind'">
                <GithubSVG class="w-5 mr-1" />{{ username }}
            </a>
        </p>
    </footer>
</template>

<script>
import GithubSVG from './assets/github.svg'

export default {
    components: {
        GithubSVG,
    },
    data() {
        return {
            username: this.$store.state.username
        }
    },

    beforeCreate() {



        this.$store.commit('initializeStore')
        //    const token = this.$store.state.token
        //    if (token) {
        //      axios.defaults.headers.common['Authorization'] = "Token " + token
        //    } else {
        //      axios.defaults.headers.common['Authorization'] = ""
        //    }
        //  },

    }

}
</script>


<style lang="scss">
#app {
    @apply h-screen bg-gray-50;
}

nav {
    a.active {
        &::after {
            @apply block w-full bg-green-500;
            content: '';
            height: 1.5px;
        }
    }
}
</style>
