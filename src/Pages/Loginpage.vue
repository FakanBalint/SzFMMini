<script setup>
import { useUserStore  } from '../stores/userStore';
const userStore = useUserStore();
</script>

<template>
  
    <div class="header">
        <h1>Login Page</h1>
    </div>
    <div>
        <input type="text" v-model="userStore.username" placeholder="Username">
        <input type="password" v-model="userStore.password"  placeholder="Password">
        
    </div>

        <div>
        <!-- Bootstrap Grid Container -->
        <div class="container">
        <div class="row">
            <div class="col-md-6">
            <!-- Button 1 -->
            <button class="btn btn-primary" @click="userStore.loginUser">Login</button>
            </div>
            <div class="col-md-6">
            <!-- Button 2 -->
            <button class="btn btn-secondary">Dont Have an account make one !</button>
            </div>
        </div>
        </div>
    </div>
    
  
</template>

<style scoped>

</style>