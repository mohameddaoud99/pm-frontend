import { defineStore } from "pinia";
import { useApiPrivate } from "../composables/useApi";
import router from "@/router";

export const useProductStore = defineStore('product', {
  state: () => ({
    product: {},
    accessToken: "",
    authReady: false
  }),

  getters: {
    userDetail: (state) => state.product,
    isAuthenticated: (state) => state.accessToken ? true : false
  },

  actions: {
    async attempt() {
      try {
        await this.getProducts();
      } catch (error) {
        return;
      }
    },

    async getProducts() {
      try {
        const { data } = await useApiPrivate().get(`/api/products/getAllProducts`);
        this.product = data;
        return data;
      } catch (error) {
        throw error.message;
      }
    },

    async addProduct(newProduct) {
      try {
        const api = useApiPrivate();
        const { data } = await api.post('/api/products/addProduct', newProduct);
        router.push('/products');
        return data;
      } catch (error) {
        console.error('Error adding product:', error);
        throw error.message;
      }
    },

    async getProductdata(id) {
      try {
        const api = useApiPrivate();
        const { data } = await api.get(`/api/products/getProductById/${id}`);
        this.product = data;
        return data;
      } catch (error) {
        console.error('Error getting product data:', error);
        throw error.message;
      }
    },

    async updateProduct(updatedProduct) {
      try {
        const api = useApiPrivate();
        const { data } = await api.put(`/api/products/updateProduct/${updatedProduct.id}`, updatedProduct);
        // Assuming the API response contains the updated product data
        this.product = data;
        return data;
      } catch (error) {
        console.error('Error updating product:', error);
        throw error.message;
      }
    },

    async deleteProduct(productId) {
      try {
        const api = useApiPrivate();
        await api.delete(`/api/products/deleteProduct/${productId}`);
        
        // Assuming you want to refresh the product list after deletion
        await this.getProducts();
        
        return true; // You can return true or any value to indicate success
      } catch (error) {
        console.error('Error deleting product:', error);
        throw error.message;
      }
    }
  }
});
