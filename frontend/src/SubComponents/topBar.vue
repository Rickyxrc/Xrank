<template>
    <nav class="navbar navbar-light topin background-blur fixed-top">
        <div class="container-fluid">
            <router-link to="/" class="white-col navbar-brand mb-0 h1">Xrank</router-link>
        </div>
    </nav>
</template>

<style scoped>
@keyframes fromtopin {
    0% {
        transform: translateX(-1200px);
        opacity: 0;
    }
    100% {
        transform: none;
        opacity: 1;
    }
}

.topin {
    animation: fromtopin 0.5s ease-in;
}

.white-col {
    color: #ffffff!important;
}

.background-blur{
    backdrop-filter: blur(4px);
    background: #1abc9ccc;
}
</style>

<script>
export default {
    name: 'topBar',
    props: {}
}
</script>