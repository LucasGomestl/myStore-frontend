export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const discountCalc = (price, discount) =>
  price - (price * discount) / 100;
