<template>
  <div class="ui container page-background" style="margin-top: 1rem">

    <div class="ui segment">

      <h1 class="ui header">Üdvözöljük a Fa-Szimulátor játékunkban</h1>
      <div class="ui info message">
        Ahhoz, hogy fát tudjon ültetni, lépjen be.
        <p>
          Ha még nem regisztrált, akkor regisztráljon és utána már be tud lépni.
        </p>
      </div>
    </div>

    <div class="ui segment">
      <div class="ui equal width grid">
        <div class="column">
          <RouterLink to="/login">
            <button class="ui green button">
              Bejelentkezés
            </button>
          </RouterLink>
        </div>

        <div class="column">
          <RouterLink to="/registration">
            <button class="ui red button">
              Regisztráció
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

</template>


<script setup>


</script>



<style scoped>
.page-background {
  background-image: linear-gradient(to right, #f5f7f1, #aae8e3);
}
</style>