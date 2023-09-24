<template>
  <div v-if="store.errors.length"
       class="ui negative message">

    <i class="ui cloce icon"
       @click.stop="store.clearErrors"></i>

    <div class="ui list">
      <div v-for="(error, index) in store.errors" :key="index"
           class="item">
        <i class="bug icon"></i>
        {{ error.message_public }}
      </div>
    </div>
  </div>

</template>

<script setup>
import {useErrorsStore} from "../stores/errors";

const store = useErrorsStore();

</script>

<style scoped>

</style>
