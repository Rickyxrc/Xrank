<template>
  <template v-if="index == 1">
    <li class="list-group-item infromleft p-0 first">
      <div class="card-body m-2">
        <span>1. <router-link :to="{path:'/users/'+user}">{{ user }}</router-link> </span>
        <span class="float-end">{{ score }}</span>
      </div>
    </li>
  </template>
  <div v-else-if="index == 2">
    <li class="list-group-item infromleft p-0 second">
      <div class="card-body">
        <span>2. <router-link :to="{path:'/users/'+user}">{{ user }}</router-link></span>
        <span class="float-end">{{ score }}</span>
      </div>
    </li>
  </div>
  <div v-else-if="index == 3">
    <li class="list-group-item infromleft p-0 third">
      <div class="card-body">
        <span>3. <router-link :to="{path:'/users/'+user}">{{ user }}</router-link></span>
        <span class="float-end">{{ score }}</span>
      </div>
    </li>
  </div>
  <div v-else>
    <li class="list-group-item infromleft p-0">
      <div class="card-body">
        <span>{{ index }}. <router-link :to="{path:'/users/'+user}">{{ user }}</router-link></span>
        <span class="float-end">{{ score }}</span>
      </div>
    </li>
  </div>
</template>

<style scoped>
.first {
  background: #F4D35E;
  font-size: 2.5rem;
  color: #444!important;
}

.second {
  background: #9CAFB7;
  font-size: 2rem;
  color: #333!important;
}

.third {
  background: #D7816A;
  font-size: 1.5rem;
  color: #333!important;
}

/* .first>div{

} */
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