import axios from "axios";
import filterParams from "./filterParams";

export default {
  // Gets articles from the NYT API
  getArt: function(params) {
    return axios.get("/api/nyt", { params: filterParams(params) });
  },
  // Gets all saved articles
  getAllArt: function() {
    return axios.get("/api/art/");
  },

  getNewArt: function () {
    return axios.get("/api/art/new");
  },

  getAllProducts: function () {
    return axios.get("/api/product/");
  },

  getOneArt: function (id) {
    return axios.get("/api/art/" + id);
  },

  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the saved article with the given id
  deleteArt: function(id) {
    return axios.delete("/api/art/" + id);
  },
  // Saves an article to the database
  saveArt: function(artData) {
    return axios.post("/api/art", artData);
  },

  saveUser: function (userData) {
    console.log(userData);
  return axios.post("/api/user", userData);
  },

  saveProduct: function (productData) {
    console.log(productData);
    return axios.post("/api/product", productData);
  },

  userAuth: function (userData) {
    console.log(userData);
    return axios.post("/api/authenticate", userData)
      .then(res => {
        localStorage.setItem('x-access-token', res.data.token) // Setting the token in localStorage
        return Promise.resolve(res);
      })
  }
};
