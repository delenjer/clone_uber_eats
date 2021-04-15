export const roundingNumbers = (value:any) => {
  return (parseFloat(String(value)) / 100).toFixed(2);
}

export const sumMenu = (initialPrice: string, inputRadioValue: {}, inputCheckboxValue: []) => {
  const radioValue = Object.values(inputRadioValue).map((item: any) => item.value);
  const checkboxValue = inputCheckboxValue.map((item: any) => item.value);
  const allPrice = radioValue.concat(checkboxValue);
  const sum = allPrice.reduce((acc, num) => acc + Number(num), 0);

  return (sum + Number(initialPrice)).toFixed(2);
}
