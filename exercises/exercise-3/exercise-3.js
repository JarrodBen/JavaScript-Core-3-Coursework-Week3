let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

console.log(`QTY\t\tITEM\t\t\t\tTOTAL`);
let priceTotal = 0;
for ({ quantity, itemName, unitPrice} of order){
  priceTotal += quantity * unitPrice;
  console.log(`${quantity}\t\t${itemName}\t\t\t${quantity * unitPrice}`);
}
console.log(`Total: ${priceTotal}`);
