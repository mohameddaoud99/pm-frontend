<template>
    <div id="user">
      <div class="container">
        <Suspense>
          <div style="margin-top: 20px;" class="d-flex justify-content-center align-items-center" >
            <div class="card" style="width: 18rem;">
              <img src="../../assets/myphoto.png" class="card-img-top" alt="...">
              <div class="card-body">
                <div class="user-info">
                  <p><strong>Email:</strong> {{ user.email }}</p>
                  <p><strong>First Name:</strong> {{ user.first_name }}</p>
                  <p><strong>Last name:</strong> {{ user.last_name }}</p>
                  <p><strong>Full name:</strong> {{ user.full_name }}</p>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../../stores/auth';
  import { computed, onMounted } from 'vue';
  
  export default {
    setup() {
      const authStore = useAuthStore();
  
      const user = computed(() => authStore.userDetail);
  
      async function getUser() {
        await authStore.getUser();
      }
  
      onMounted(async () => {
        await getUser();
      });
  
      return { user };
    },
  };
  </script>
  
  <style scoped>
  #user .card {
    max-width: 18rem;
  }
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  }
  </style>
  