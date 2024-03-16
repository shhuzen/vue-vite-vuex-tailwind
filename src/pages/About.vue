<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const stack = computed(() => {
    return store.state.stack
})
</script>

<template>
    <main class="p-24 text-center">
        <p class="font-bold">
            JS Framework:
            <a href="https://v3.vuejs.org/" target="_blank" class="font-normal italic underline text-green-500">{{
                stack.jsFramework.main }}</a>
            <span class="text-gray-400 px-2">+</span> <span class="text-sm font-normal italic">{{
                stack.jsFramework.list.join(', ') }}</span>
        </p>

        <p class="font-bold">
            CSS Framework:
            <a href="https://tailwindcss.com/" target="_blank" class="font-normal italic underline text-green-500">{{
                stack.cssFramework }}</a>
        </p>

        <p class="font-bold">
            Рекомендуемый IDE setup:
            <a href="https://code.visualstudio.com/" target="_blank"
                class="font-normal italic underline text-green-500">VSCode</a>
            +
            <a href="https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets" target="_blank"
                class="font-normal italic underline text-green-500">Vue VSCode Snippets</a>
            +
            <a href="https://github.com/johnsoncodehk/volar" target="_blank"
                class="font-normal italic underline text-green-500">Volar</a>
        </p>


        <p>
            <a href="https://vitejs.dev/guide/features.html" target="_blank" class="underline text-green-500"> Vite
                Документация</a>
            <span class="text-gray-400 px-2">|</span>
            <a href="https://v3.vuejs.org/" target="_blank" class="underline text-green-500">Vue 3 Документация</a>
        </p>
    </main>
</template>

<script>

export default {
    name: 'AboutPage',
};
</script>

<style lang="scss" scoped></style>