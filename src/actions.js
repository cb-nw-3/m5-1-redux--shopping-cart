export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const addQuantity = (id, updateQty) => ({
  type: "UPDATE_QUANTITY",
  id,
  updateQty,
});

export const removeItem = (id) => ({
  type: "REMOVE_ITEM",
  id,
});
export const updatePurchaseTotal = (id) => ({
  type: "UPDATE_PURCHASE_TOTAL",
  id,
});
