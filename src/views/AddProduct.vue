<template>
  <div class="add-product">
    <h1>Add Product</h1>
    <h2>Title is :{{ title }}</h2>
    <form @submit.prevent="onSubmit">
      <input
        type="text"
        name="name"
        v-model="name"
        placeholder="Enter Your Name..."
        required
      />
      <input
        type="text"
        name="username"
        v-model="username"
        placeholder="Enter Your User Name..."
        required
      />
      <input
        type="text"
        name="email"
        v-model="email"
        placeholder="Enter Your Email..."
        required
      />
      <input
        type="text"
        name="city"
        v-model="city"
        placeholder="Enter Your City..."
        required
      />
      <input
        type="text"
        name="street"
        v-model="street"
        placeholder="Enter Your Street..."
        required
      />
      <input
        type="text"
        name="cname"
        v-model="cname"
        placeholder="Enter Your Company Name..."
        required
      />
      <input
        type="text"
        name="lng"
        v-model="lng"
        placeholder="Enter Your lng..."
        required
      />
      <input class="submit" type="submit" value="Submit" required />
      <input
        class="submit"
        type="button"
        value="button"
        v-on:click="
          addProduct({ id: '11', name: 'abdullah', email: 'saqib@gmail.com' })
        "
        required
      />
    </form>
  </div>
</template>
  
<script>
import { mapActions } from "vuex";
import EventBus from "./Event-bus.js";
export default {
  name: "AddProduct",
  data() {
    return {
      id: "",
      name: "",
      username: "",
      email: "",
      city: "",
      street: "",
      cname: "",
      lng: "",
      title: "hello",
    };
  },
  methods: {
    ...mapActions(["addProduct"]),
    // ...mapActions(["newProduct"]),
    onSubmit(e) {
      e.preventDefault();
      this.addProduct({
        id: "",
        name: this.name,
        username: this.username,
        email: this.email,
        address: {
          city: this.city,
          street: this.street,
          geo: {
            lng: this.lng,
          },
        },
        company: {
          name: this.cname,
        },
      }),
        (this.id = ""),
        (this.name = ""),
        (this.username = ""),
        (this.email = ""),
        (this.city = ""),
        (this.street = ""),
        (this.lng = "");
      this.cname = "";
    },
  },
  async mounted() {
    EventBus.$on("EVENT", (data) => {
      console.log("data", data);
    });
  },
};
</script>
  
 <style scoped>
.add-product {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}
.add-product input {
  width: 200px;
  border-radius: 6px;
  outline: none;
  border: 1px solid lightgrey;
  margin-right: 12px;
  margin-bottom: 10px;
  padding: 8px 8px;
}
/* .add-product input:nth-child(2){
    margin-right: 0px;
  } */
.submit {
  width: 100px;
  background: #607d8b;
  color: rgba(255, 255, 255, 0.8);
  outline: none;
  width: 100px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
}
</style>