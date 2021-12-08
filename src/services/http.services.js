export const getProducts = async () => {
  let response = await fetch('https://fakestoreapi.com/products');

  return response.json();
}