import axios from "axios";

const state = {
  message: 'hello Saqib',
  products: [],
};

const getters = {
  allProducts: (state) => state.products,
  countProducts(state) {
    return state.products.length;
  }
};
const actions = {
  async getProducts({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("response", response)
    commit("setProducts", response.data);
  },
  async addProduct({ commit }, product) {
    console.log("product", product)

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      product
    );
    console.log("response", response)
    commit("newProduct", response.data);
  },
  async deleteProduct({ commit }, id) {
    console.log("id", id)
    const delRow = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log("delRow", delRow)
    commit("removeProduct", id);
  },
};
const mutations = {
  setProducts: (state, products) => (state.products = products),
  newProduct: (state, product) => state.products.push(product),
  removeProduct: (state, id) =>
    state.products.filter((product) => product.id !== id),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
