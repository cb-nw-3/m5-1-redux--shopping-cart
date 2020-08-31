const initialTaxState = 0;

export default function TaxReducer(state = initialTaxState, action) {
  switch (action.type) {
    case "SET_TAX":
      return { ...state };
    default:
      return state;
  }
}
