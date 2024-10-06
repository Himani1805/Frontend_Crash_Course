function deepCopy(obj){
    if (typeof obj !== 'object' || obj === null){
        return obj
    }
    const copied = Array.isArray(obj) ? [] : {};
    for (let i in obj){
        if (obj.hasOwnProperty(i)){
            copied[i]= deepCopy(obj[i])
        }
    }
    return copied
}
const obj = {
    name: "John",
    address: {
      city: "New York",
      zip: 10001
    }
  };
  
  const copy = deepCopy(obj);
  console.log(copy);
  // Output: { name: "John", address: { city: "New York", zip: 10001 } }
  
  