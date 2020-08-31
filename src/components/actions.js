export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const deleteItem = (id) => ({
  type: "DELETE_ITEM",
  id,
});

export const updateQuantity = (id, newQuantity) => ({
  type: "UPDATE_QUANTITY",
  id,
  newQuantity,
});

export const setTax = (tax) => ({
  type: "SET_TAX",
  tax,
});
