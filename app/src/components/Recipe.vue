<template>
  <div>
    <h1>{{ msg }}</h1>
    <fast-button appearance="accent" v-on:click="onClick">Click Me</fast-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({

})
export default class Recipe extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
