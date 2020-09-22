import produce from "immer";
export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});
export const removeItem = (itemId) => ({
  type: "REMOVE_ITEM",
  itemId,
});
export const updateQuantity = (itemId, newQuantities) => ({
  type: "UPDATE_QUANTITIES",
  itemId,
  newQuantities,
});
export const emptyCart = () => ({
  type: "EMPTY_CART",
});
