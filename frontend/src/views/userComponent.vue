<template>
    <h2 class="infromleft">
        <span>{{ name }}的得分情况</span>
        <router-link to="/">&nbsp;返回</router-link>
    </h2>
    <orbit-spinner
        v-if="unloaded"
        :animation-duration="1200"
        :size="55"
        color="#1abc9c"
    />
    <ul class="list-group infromleft">
        <li class="list-group-item infromleft" v-for="(i, count) in infoList" :key="count">
            {{ name }}在{{ i.reason }}中获得了{{ i.addvalue }}分
        </li>
    </ul>
</template>

<style scoped>
a{font-size: 1rem;}
</style>

<script>
import { OrbitSpinner } from 'epic-spinners'
import axios from "axios"

export default {
    name: 'mainComponent',
    props: ['name'],
    methods: {},
    components: {
        OrbitSpinner
    },
    data: () => {
        return { infoList: [],unloaded:true };
    },
    mounted() {
        axios.get('/api/userdetail?data=' + this.name).then(res => {
            this.unloaded = false;
            this.infoList = res['data'];
        });
    }
}
</script>