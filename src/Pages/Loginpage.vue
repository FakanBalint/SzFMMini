<script setup>
import { Field as VeeField, Form as VeeForm, ErrorMessage} from 'vee-validate';

import { useUserStore } from '../stores/userStore';
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup.string().required('Name is required'),
    password: yup.string().required('Password is required')
});

const userStore = useUserStore();

const initialData = {
    username: '',
    password: '',
};

function onSubmit(values) {
    const loginData = {
    username: values.username,
    password: values.password,
  };
    userStore.loginUser(loginData);
}
</script>

<template>
    <div class="header">
        <h1>Login Page</h1>
    </div>

    <VeeForm @submit="onSubmit" :validation-schema="schema" :initial-values="initialData">
        <VeeField type="text" name="username" placeholder="Username" as="input"></VeeField>
        <ErrorMessage name="username" v-slot="{ message }">
            <span class="error">{{ message }}</span>
        </ErrorMessage>
        <VeeField type="password" name="password" placeholder="Password" as="input"></VeeField>
        <ErrorMessage name="password" v-slot="{ message }">
            <span class="error">{{ message }}</span>
        </ErrorMessage>
    </VeeForm>

    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <button class="btn btn-primary" @click="userStore.loginUser">Login</button>
            </div>
            <div class="col-md-6">
                <button class="btn btn-secondary">Don't Have an account? Make one!</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>