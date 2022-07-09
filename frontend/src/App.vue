<template>
    <topBar />
    <div class="container mt-4 pt-4">
        <router-view class="pt-4"></router-view>
    </div>
    <bottomBar />
</template>

<script>
import topBar from './SubComponents/topBar.vue'
import bottomBar from './SubComponents/bottomBar.vue'

export default {
    name: 'App',
    components: {
        topBar,
        bottomBar,
    },
}
</script>