<template>


  <div class="ui container" style="margin-top: 1rem">

    <Errors/>

    <div class="ui segment login-segment">

      <h1 class="ui header">Bejelentkezés</h1>

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
          <button class="ui green button">Bejelentkezés</button>

          <div class="ui basic button" @click="toRegistrationPage">
            Inkább regisztrálok
          </div>


        </div>

      </VeeForm>

    </div>
  </div>


</template>


<script setup>

import {ErrorMessage, Field as VeeField, Form as VeeForm} from 'vee-validate';
import * as yup from 'yup';
import {useAuthStore} from "../stores/auth";
import Errors from "../components/Errors.vue";

const authStore = useAuthStore();

const schema = yup.object({
  username: yup.string().required("Kit tisztelhetek benned?"),
  password: yup.string().required("És ezt mivel igazolod?").min(5),

});

const initialValues = {
  username: '',
  password: '',
};


function onSubmit(values) {
  authStore.login(values);
}

function toRegistrationPage() {
  window.location.href = '/registration';
}

</script>

<style scoped>
.login-segment {
  background-image: linear-gradient(to right, #f5f7f1, #aae8e3);
}
.error{
  color: red;
}

</style>