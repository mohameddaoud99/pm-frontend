<template>
    <div id="login">
      <div class="container">
        <div class="card card-body mt-4">
          <h5 class="card-title">Login</h5>
          <form @submit.prevent="submit">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input v-model="loginData.email" type="email" class="form-control" id="email" autocomplete="off">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input v-model="loginData.password" type="password" class="form-control" id="password">
            </div>
            <button type="submit" class="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../../stores/auth';
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const authStore = useAuthStore();
      const router = useRouter();
  
      const loginData = reactive({
        email: "",
        password: "",
      });
  
      const errorMessage = ref("");
  
      async function submit() {
        try {
          await authStore.login(loginData);
          router.replace({ name: "user" });
        } catch (err) {
          errorMessage.value = err.message;
        }
      }
  
      return { loginData, errorMessage, submit };
    },
  };
  </script>
  
  <style scoped>
  #login .card {
    max-width: 40vw;
    margin: auto;
  }
  </style>
  