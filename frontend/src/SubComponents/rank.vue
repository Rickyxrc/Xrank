<template>
  <li class="list-group-item">
    <div class="card-body">
      <div v-if="index == 1">
          1. {{ user }} / {{ score }}
      </div>
      <div v-else-if="index == 2">
        2. {{ user }} / {{ score }}
      </div>
      <div v-else-if="index == 3">
        3. {{ user }} / {{ score }}
      </div>
      <div v-else>
        oth - {{ index }}. {{ user }} / {{ score }}
      </div>
    </div>
  </li>
</template>

<style scoped>
@keyframes infromleft{
  from{opacity: 0;transform: translateX(-20px);}
  to{opacity: 1;transform: none;}
}
.cont{
  /* animation: infromleft 1s; */
  animation: infromleft 1s;
}
</style>

<script>
export default {
  name: 'rankPart',
  props: {
    user: String,
    score: Number,
    index: Number,
  }
}
</script>