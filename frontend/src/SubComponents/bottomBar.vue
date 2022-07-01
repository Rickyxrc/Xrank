<template>
    <nav class="navbar navbar-light fixed-bottom background-blur">
        <div class="container-fluid">
            <span class="smalltext navbar-brand mb-0">Xrank <a class="no-line" href="mailto:rickyxrc@outlook.com">联系作者</a></span>
        </div>
    </nav>
</template>

<style scoped>

.white-col {
    color: #ffffff!important;
}
.background-blur{
    backdrop-filter: blur(4px);
    background: #1abc9ccc;
}
.smalltext{
    font-size: .73rem;
    color: #ffffff;
}
.no-line{
    text-decoration: none;
}
</style>

<script>
export default {
    name: 'bottomBar',
    props: {}
}
</script>