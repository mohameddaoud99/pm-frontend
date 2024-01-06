<template>
  <main id="main">
    <div class="container mt-5">
      <div class="card">
        <div class="card-header">
          <h4>
            Products
            <RouterLink to ="/products/create" class="btn btn-primary float-end">
              Add Product
            </RouterLink>
          </h4>
        </div>
        <div>
          <table class="table table-bordred">
            <thead>
              <tr>
                <th>Product name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-if="data.length > 0">
              <tr v-for="(product, index) in data" :key="index">
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.quantity }}</td>
                <td><img style="height: 80px; width: 80px;" :src="product.image" /></td>
                <td>
                  <RouterLink :to="{ path: '/products/' + product._id + '/edit' }" class="btn btn-success float-start mr-2">
                    Edit
                  </RouterLink>
                  <button type="button" @click="deleteProduct(product._id)" class="btn btn-danger float-start">Delete</button>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="4">Loading...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useProductStore } from "../../stores/product";
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';

export default {
  setup() {
    const productStore = useProductStore();
    const data = ref([]);

    async function getProducts() {
      data.value = await productStore.getProducts();
    }

    async function deleteProduct(productId) {
      try {
        const shouldDelete = await confirmDelete();

        if (shouldDelete) {
          const result = await productStore.deleteProduct(productId);

          if (result) {
            console.log('Product deleted successfully');
            Swal.fire({
              icon: 'success',
              title: 'Product Deleted!',
              text: 'Your product has been deleted successfully.',
              confirmButtonText: 'OK',
            });

            // Refresh the product list after deletion
            data.value = await productStore.getProducts();
          }
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }

    async function confirmDelete() {
      return Swal.fire({
        icon: 'question',
        title: 'Are you sure?',
        text: 'You are about to delete this product. This action cannot be undone.',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
      }).then((result) => {
        return result.isConfirmed;
      });
    }

    onMounted(async () => {
      await getProducts();
    });

    return {
      data,
      deleteProduct,
    };
  },
};
</script>

<style scoped>
  /* Add margin to the right of the RouterLink */
  .mr-2 {
    margin-right: 0.5rem; /* You can adjust the value based on your preference */
  }

  #main {
    margin-top: 50px;
    margin-bottom: 100px;
  }

  @media (max-width: 992px) {
    #main {
      margin-top: 30px;
      margin-bottom: 100px;
    }
  }
</style>
