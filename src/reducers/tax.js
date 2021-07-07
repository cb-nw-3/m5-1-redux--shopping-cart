const initialTaxState = 15;

export default function TaxReducer(state = initialTaxState, action) {
  switch (action.type) {
    case "SET_TAX":
      return action.tax;
    default:
      return initialTaxState;
  }
}
