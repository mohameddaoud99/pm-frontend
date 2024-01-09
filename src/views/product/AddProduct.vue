<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Products</h4>
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
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProductStore } from '../../stores/product';
import Swal from 'sweetalert2';


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

const saveProduct = async () => {
  try {
    // Validate inputs
    if (!productNameIsValid.value || !productPriceIsValid.value || !productQuantityIsValid.value || !productImageIsValid.value) {
      console.error('Validation error: Please fill in all fields with valid values');
      return;
    }

    // Create a new product object
    const newProduct = {
      name: productName.value,
      price: parseFloat(productPrice.value),
      quantity: parseInt(productQuantity.value),
      image: productImage.value,
    };

    // Call the action to save the product
    await productStore.addProduct(newProduct);
    Swal.fire({
      icon: 'success',
      title: 'Product Added!',
      text: 'Your product has been added successfully.',
      confirmButtonText: 'OK',
    });

    // Optionally, you can redirect to another page or perform any other action upon successful save

    // Clear the form fields after successful save
    productName.value = '';
    productPrice.value = '';
    productQuantity.value = '';
    productImage.value = '';
  } catch (error) {
    console.error('Error saving product:', error);
  }
};
</script>

<style scoped>
/* Add any custom styles for your component */
</style>
