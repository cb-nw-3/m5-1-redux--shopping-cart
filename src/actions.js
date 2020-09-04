export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const updateQuantity = (item_id, new_quantity) => ({
  type: "UPDATE_QUANTITY",
  item_id,
  new_quantity,
});
