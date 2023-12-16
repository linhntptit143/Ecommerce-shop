export const subTotal = (id, price) => {
  let subTotalCost = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  carts.forEach((item) => {
    if (item.id === id) {
      subTotalCost = item.quantitiy * price;
    }
  });
  return subTotalCost;
};

export const quantity = (id) => {
  let product = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  product = carts.find(item => item.id === id).quantitiy
  return product;
};

export const totalCost = () => {
  let carts = JSON.parse(localStorage.getItem("cart"));
  if (!carts) return 0;
  let totalCost = carts.reduce((accumulator, currentItem) => accumulator + currentItem.quantitiy * currentItem.price, 0);
  return totalCost;
};
