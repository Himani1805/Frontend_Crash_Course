function rearrangeFruits(){
    const removedFruits = fruits.splice(-4)
    fruits.splice(0,0, ...removedFruits);
    return fruits;
}
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

console.log(rearrangeFruits(fruits));

