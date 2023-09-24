<template>

  <div class="ui container" style="margin-top: 1rem">
    <div class="ui segment register-segment">

      <Errors/>
      <h1 class="ui header">Regisztráció</h1>

      <VeeForm class="ui form"
               @submit="onSubmit" :validation-schema="schema" :initial-values="initialValues" v-slot="{ errors }">


        <div :class="{error: 'username' in errors}" class="field">
          <div class="ui input">
            <vee-field name="username" type="text" placeholder="Felhasználói név"/>
          </div>
          <error-message class="error-message" name="username"/>
        </div>

        <div :class="{error: 'password' in errors}" class="field">
          <div class="ui input">
            <vee-field name="password" type="password" placeholder="Nagyon titkos jelszó"/>
          </div>
          <error-message class="error-message" name="password"/>
        </div>

        <div class="ui segment">
          <button type="submit" class="ui green button">Regisztáció</button>

          <div class="ui basic button" @click="toLoginPage">
            Van már regisztrációm, inkább belépek
          </div>

        </div>
      </VeeForm>

    </div>
  </div>

</template>


<script setup>

import {ErrorMessage, Field as VeeField, Form as VeeForm} from 'vee-validate';
import * as yup from 'yup';
import Errors from "../components/Errors.vue";
import {useAuthStore} from "../stores/auth";

const schema = yup.object({
  username: yup.string().required("Kit tisztelhetek benned?"),
  password: yup.string().required("És ezt mivel szeretnéd igazolni?").min(5),
});

const initialValues = {
  username: '',
  password: '',
};


const authStore = useAuthStore();

function onSubmit(values) {
  authStore.register(values)
}

function toLoginPage() {
  window.location.href = '/login';
}

</script>

<style scoped>
.register-segment {
  background-image: linear-gradient(to right, #f5f7f1, #ddf2b8);
}

.error {
  color: red;
}


</style>

