<template>
  <nav class="navbar bg-light">
    <div class="container">

      
      <ul class="navbar-nav flex-row">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'products' }" class="nav-link" aria-current="page">Manage Products</router-link>
        </li>

        <li v-if="isAuthenticated" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">
            {{ user.username }}
          </a>
          <ul class="dropdown-menu">
            <li><router-link :to="{ name: 'user' }" class="dropdown-item">Profile</router-link></li>
            <li><hr class="dropdown-divider"></li>
          </ul>
        </li>

        <template v-else>
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link" aria-current="page">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'register' }" class="nav-link" aria-current="page">Register</router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const user = computed(() => authStore.user);
const isAuthenticated = computed(() => authStore.isAuthenticated);


</script>

<style scoped>
/* Add your custom styles for the navbar here */
.navbar {
  padding: 15px 15px 15px 15px;
}

.nav-item {
  margin-right: 10px; /* Add margin-right to create space between items */
}




</style>
