<template>
  <div class="ui container" style="margin-top: 1rem"
       v-if="authStore.token">
    <div class="ui segment">
      <div class="ui sixteen wide grid">
        <div class="twelve wide right aligned column">
          Bejelentkezett felhasználó: {{ authStore.username }}
        </div>

        <div class="four wide right aligned column">
          <button class="ui black basic button" @click="authStore.logout()">Kilépés</button>

        </div>


      </div>

    </div>

    <Errors/>

    <div class="ui segment">

      <div class="ui segment">
        <h1 class="ui header">Az erdő..</h1>
        FŐ olal

      </div>

      <div class="ui segment">
        <div class="ui sixteen width grid">
          <div class="eight wide column">
            <button class="ui primary button">
              Fát ültetek
            </button>
          </div>

          <div class="eight wide column">
            <button class="ui red button">
              Kivágok egy fát
            </button>
          </div>

        </div>
      </div>

    </div>

  </div>

  <div v-else>

    <div class="ui negative message">
      Tiltott terület!
    </div>

    <RouterLink to="/">
      <button class="ui basic green button">
        Bejelentkezés vagy regisztráció
      </button>
    </RouterLink>
  </div>

</template>


<script setup>
import Errors from "../components/Errors.vue";
import {useAuthStore} from "../stores/auth";

const authStore = useAuthStore();

</script>


<style scoped>

</style>