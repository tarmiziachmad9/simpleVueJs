<template>

  <div class="hello">
  <h1>{{ msg }}</h1>
  <section-nav></section-nav>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Vue Wallpapers'
    }
  },
  components: {
    'section-nav': Navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
