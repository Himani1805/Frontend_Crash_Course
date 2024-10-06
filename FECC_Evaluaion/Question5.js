function mergeObjects(obj1, obj2){
    const mergedObjects = {};
    for (let i in obj1){
        if(obj1.hasOwnProperty(i)){
            mergedObjects[i] = obj1[i]
        }
    }
    for (let i in obj2){
        if(obj2.hasOwnProperty(i)){
            mergedObjects[i] = obj2[i]
        }
    }
    return mergedObjects;

}
const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };

const j = mergeObjects(obj1, obj2);
console.log(j);
// Output: { name: "John", age: 40, city: "New York" }

