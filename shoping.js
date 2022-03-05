const displayLocalStorageCart = () => {
  const cart = getcart();
  for (name in cart) {
    displayProduct(name);
  }
};

const addToCart = () => {
  //   console.log("hello world ");
  const inputId = document.getElementById("shopingINput");
  const inptidText = inputId.value;
  if (!inptidText) {
    return;
  }
  // showing the product on the ui
  displayProduct(inptidText);

  // add to local localStorage
  addProductToCart(inptidText);

  //   clear input text
  inputId.value = "";
};

const displayProduct = (name) => {
  const ul = document.getElementById("product-showing");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};

const getcart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addProductToCart = (name) => {
  const cart = getcart();
  if (cart[name]) {
    cart[name] += 1;
  } else {
    cart[name] = 1;
  }
  const cartStringfyed = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringfyed);
};
displayLocalStorageCart();

const placeOrder = () => {
  document.getElementById("product-showing").textContent = "";
  localStorage.removeItem("cart");
  //   document.getElementById("product-showing").textContent = "";
  //   localStorage.removeItem("cart");
};
