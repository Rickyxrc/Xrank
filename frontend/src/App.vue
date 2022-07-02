<template>
  <topBar />
  <div class="container pt-4">
    <ul class="mt-4 p-4 list-group">
      <template v-for="(i, index) in rankList" :key="i.index">
        <rankPart :user="i.name" :score="i.score" :index="index + 1" />
      </template>
    </ul>
  </div>
  <bottomBar />
</template>

<script>
import rankPart from './SubComponents/rank.vue'
import topBar from './SubComponents/topBar.vue'
import bottomBar from './SubComponents/bottomBar.vue'
import axios from "axios"

export default {
  name: 'App',
  data: function () { return { rankList: {} } },
  components: {
    rankPart,
    topBar,
    bottomBar
  },
  methods: {},
  mounted() {
    axios.get('/user').then(res => {
      console.log(res.data);
      this.rankList = res.data;
    }).catch(err => {
      console.log("获取数据失败" + err);
    })
  }
}
</script>