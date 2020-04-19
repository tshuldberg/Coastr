import tokenService from "./tokenService";
import userService from "./userService";

const BASE_URL = "/api/drinks/";

export default {
  create,
  getAll,
  delete: deleteDrink,
};

function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

function create(drink) {
  console.log("Adding Drink TO DB", drink);
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(drink),
  })
    .then((res) => res.json())
    .then((drink) => console.log(`THIS ${drink}`));
}

function deleteDrink(id) {
  console.log(`${BASE_URL}/${id}`);
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
