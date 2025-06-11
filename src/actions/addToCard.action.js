"use server";

let productDetails = [];

export async function addedData(product) {
  if (!product) return;
  productDetails.push(product);
  console.log("product action", productDetails);
}
