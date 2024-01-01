/*for a given array of prices of 5 items->[250,645,300,900,50]
All items have an offer of 10% OFF on them.Change the array to store final price 
after the offer.
 */

let items=[250,645,300,900,50];

for(let i=0;i<items.length;i++){
let offer=items[i]/10;
items[i]-=offer;
}
console.log(items);