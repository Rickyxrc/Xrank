<template>
  <h2 class="infromleft">
    实时排名
  </h2>
  <orbit-spinner
    v-if="unloaded"
    :animation-duration="1200"
    :size="55"
    color="#1abc9c"
  />
  <ul class="list-group infromleft">
    <template v-for="(i, index) in rankList" :key="i.index">
      <rankPart :user="i.name" :score="i.score" :index="index + 1" />
    </template>
  </ul>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners'
import rankPart from '../SubComponents/rank.vue'
import axios from "axios"

export default {
  name: 'mainComponent',
  data: function () { return { rankList: {},unloaded:true } },
  components: {
    rankPart,
    OrbitSpinner
  },
  methods: {},
  mounted() {
    axios.get('/api/user').then(res => {
      this.unloaded = false;
      this.rankList = res.data;
    })
  }
}
</script>