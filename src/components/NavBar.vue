<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand">Tekab</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#appNavbar" aria-controls="appNavbar" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="appNavbar">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0"> <!-- Updated class to mx-auto for centering -->
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'products' }" class="nav-link" aria-current="page">Manage Products</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-if="isAuthenticated" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
              {{ user.username }}
            </a>
            <ul class="dropdown-menu">
              <li><router-link :to="{ name: 'user' }" class="dropdown-item">Profile</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><button @click="logout" class="dropdown-item btn btn-danger">Logout</button></li>
            </ul>
          </li>
          <template v-else>
            <li class="nav-item">
              <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>


</template>

<script>
import { useAuthStore } from '../stores/auth';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const user = computed(() => authStore.user);
    const isAuthenticated = computed(() => authStore.isAuthenticated);

    async function logout() {
      try {
        await authStore.logout();
        router.replace({ name: 'home' });
      } catch (err) {
        console.log(err.message);
      }
    }

    return { user, isAuthenticated, logout };
  },
};
</script>

<style scoped>
/* Add your custom styles here */
.navbar {
  border-bottom: 1px solid #ddd;
}

.navbar-brand {
  font-weight: bold;
}

.navbar-toggler {
  border: none;
}

.nav-link {
  color: #333;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: #34b7a7;
}

.dropdown-menu {
  background-color: #f8f9fa;
}

.dropdown-item {
  color: #333;
}

.dropdown-item:hover {
  background-color: #34b7a7;
  color: #fff;
}
</style>