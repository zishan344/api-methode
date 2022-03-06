// console.log("hello world");
const inputId = document.getElementById("input-field");

const ul = document.getElementById("added-cart");
const displayLocalStorageCart = () => {
  const cart = getItem();
  for (const carts in cart) {
    displayProduct(carts);
  }
};

const addedCart = () => {
  const inputIdValue = inputId.value;
  if (!inputIdValue) {
    return;
  }
  displayProduct(inputIdValue);

  // added local storage
  addtoCart(inputIdValue);
  inputId.value = "";
};
const displayProduct = (name) => {
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};

const getItem = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};
const addtoCart = (name) => {
  const cart = getItem();
  if (cart[name]) {
    cart[name] += 1;
  } else {
    cart[name] = 1;
  }

  const stringifyeed = JSON.stringify(cart);
  localStorage.setItem("cart", stringifyeed);
};
displayLocalStorageCart();
const placeOrder = () => {
  ul.textContent = "";
  localStorage.removeItem("cart");
};
