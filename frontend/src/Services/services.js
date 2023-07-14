import axios from "axios";
export const getCategoricalProduct = (category, thenBody, catchBody) => {
  axios.get(`/api/product?category=${category}`).then(thenBody).catch(catchBody);
};
export const login = (data, thenBody, catchBody) => {
  axios.post("api/login", data).then(thenBody).catch(catchBody);
};
export const userAbout = (thenBody, catchBody) => {
  axios.get("api/me").then(thenBody).catch(catchBody);
};
export const signUp = (data, thenBody, catchBody) => {
  axios.post("api/register", data).then(thenBody).catch(catchBody)
};
export const logout = (thenBody, catchBody) => {
  axios.get("api/logout").then(thenBody).catch(catchBody)
};
