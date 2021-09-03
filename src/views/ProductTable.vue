<template>
  <div>
    <AddProduct />
    <h1>Products</h1>
    <table class="allproducts">
      <thead class="products-listing">
        <tr class="product_title">
          <th>Id</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Street</th>
          <th>Company Name</th>
          <th>lng</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in allProducts" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.username }}</td>
          <td>{{ product.email }}</td>
          <td>{{ product.address.city }}</td>
          <td>{{ product.address.street }}</td>
          <td>{{ product.company.name }}</td>
          <td>{{ product.address.geo.lng }}</td>
          <td><button @click="deleteProduct(index)">X</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import AddProduct from "./AddProduct.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductTable",
  components: {
    AddProduct,
  },
  methods: {
    ...mapActions(["getProducts", "deleteProduct"]),
  },
  computed: mapGetters(["allProducts"]),
  mounted() {
    this.getProducts();
  },
};
</script>
  
  <style scoped>
.allproducts {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid lightgrey;
  border-radius: 6px;
  padding: 24px;
}
table,
th,
td {
  padding: 12px 4px;
  border: 1px solid black;
}
table thead {
  text-align: justify;
  border: 2px solid black;
  padding: 20px;
}
button {
  margin-left: 30px;
  border: none;
  background: darkred;
  color: white;
  padding: 5px 8px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  cursor: pointer;
}
</style>