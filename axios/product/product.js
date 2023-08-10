import axios from "../custom-axios.js";

const productDetail = (_idP) => {
  return axios.get(`/product/${_idP}`);
};

const searchProduct = (name = "", type = "") => {
  console.log(name);
  return axios.get(`product/search?name=${name}&type=${type}`);
};

const userDetail = (_idUser) => {
  return axios.get(`/user/getUser/${_idUser}`);
};

export { searchProduct, productDetail, userDetail };
