export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (id) => ({
  type: "REMOVE_ITEM",
  id,
});

export const updateItem = (id, quantity) => ({
  type: "UPDATE_QUANTITY",
  id,
  quantity,
});
