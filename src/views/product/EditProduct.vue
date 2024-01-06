<template>
    <main id="main">
      <div class="container mt-5">
        <div class="card">
          <div class="card-header">
            <h4>Edit Products</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="saveProduct">
              <div class="mb-3">
                <label for="productName">Name</label>
                <input v-model="productName" type="text" class="form-control" id="productName" required />
                <span v-if="!productNameIsValid" class="text-danger">Please enter a valid product name</span>
              </div>
              <div class="mb-3">
                <label for="productPrice">Price</label>
                <input v-model="productPrice" type="text" class="form-control" id="productPrice" required />
                <span v-if="!productPriceIsValid" class="text-danger">Please enter a valid product price</span>
              </div>
              <div class="mb-3">
                <label for="productQuantity">Quantity</label>
                <input v-model="productQuantity" type="text" class="form-control" id="productQuantity" required />
                <span v-if="!productQuantityIsValid" class="text-danger">Please enter a valid product quantity</span>
              </div>
              <div class="mb-3">
                <label for="productImage">Image</label>
                <input v-model="productImage" type="text" class="form-control" id="productImage" required />
                <span v-if="!productImageIsValid" class="text-danger">Please enter a valid product image URL</span>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import Swal from 'sweetalert2';
  import { useProductStore } from '../../stores/product';
  import router from "@/router";
  
  export default {
    setup() {
      const productId = ref(router.currentRoute.value.params.id); // Assumes the id is passed in the route
      const productName = ref('');
      const productPrice = ref('');
      const productQuantity = ref('');
      const productImage = ref('');
  
      const productStore = useProductStore();
  
      // Validation checks
      const productNameIsValid = computed(() => productName.value.trim() !== '');
      const productPriceIsValid = computed(() => !isNaN(parseFloat(productPrice.value)));
      const productQuantityIsValid = computed(() => !isNaN(parseInt(productQuantity.value)));
      const productImageIsValid = computed(() => productImage.value.trim() !== '');
  
      const formIsValid = computed(() => 
        productNameIsValid.value &&
        productPriceIsValid.value &&
        productQuantityIsValid.value &&
        productImageIsValid.value
      );
  
      const saveProduct = async () => {
        try {
          // Validate inputs
          if (!formIsValid.value) {
            console.error('Validation error: Please fill in all fields with valid values');
            return;
          }
  
          // Create a new product object
          const updatedProduct = {
            id: productId.value,
            name: productName.value,
            price: parseFloat(productPrice.value),
            quantity: parseInt(productQuantity.value),
            image: productImage.value,
          };
  
          // Call the action to update the product
          await productStore.updateProduct(updatedProduct);
  
          // Show SweetAlert on successful update
          Swal.fire({
            icon: 'success',
            title: 'Product Updated!',
            text: 'Your product has been updated successfully.',
            confirmButtonText: 'OK',
          });
  
          // Redirect to the product details page after successful update
          router.push('/products');
        } catch (error) {
          console.error('Error updating product:', error);
        }
      };
  
      onMounted(async () => {
        // Fetch product data when the component is mounted
        await productStore.getProductdata(productId.value);
  
        // Populate form fields with the fetched data
        productName.value = productStore.product.name;
        productPrice.value = productStore.product.price.toString();
        productQuantity.value = productStore.product.quantity.toString();
        productImage.value = productStore.product.image;
      });
  
      return {
        productName,
        productPrice,
        productQuantity,
        productImage,
        productNameIsValid,
        productPriceIsValid,
        productQuantityIsValid,
        productImageIsValid,
        formIsValid,
        saveProduct,
      };
    },
  };
  </script>
  
  <style scoped>
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
  