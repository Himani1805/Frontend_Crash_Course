const supermarketData = {
    supermarketName: "SuperMart",
    location: "Cityville",
    products: {
      electronicsSection: {
        inventory: {
          laptop: { available: 20, price: 800 },
          smartphone: { available: 30, price: 500 },
          tablet: { available: 15, price: 300 },
        },
        sales: [
          { id: 1, items: ["laptop", "tablet"], total: 1100 },
          { id: 2, items: ["smartphone", "tablet"], total: 800 },
          { id: 3, items: ["laptop", "smartphone"], total: 1300 },
        ],
      },
      clothingSection: {
        inventory: {
          shirt: { available: 50, price: 25 },
          jeans: { available: 40, price: 40 },
          dress: { available: 30, price: 60 },
        },
        sales: [
          { id: 1, items: ["shirt", "jeans"], total: 60 },
          { id: 2, items: ["dress", "shirt"], total: 85 },
          { id: 3, items: ["jeans", "dress"], total: 100 },
        ],
      },
    },
    sectionNames: ["electronicsSection", "clothingSection"],
  };
  
function findProductDetails(data){
    const laptopAvailable = data.products.electronicsSection.inventory.laptop.available;
    const laptopPrice = data.products.electronicsSection.inventory.laptop.price;
    const shirtAvailable = data.products.clothingSection.inventory.shirt.available;
    const shirtPrice = data.products.clothingSection.inventory.shirt.price;
    
    return {
        laptopAvailable: laptopAvailable,
        shirtAvailable: shirtAvailable,
        laptopPrice:laptopPrice,
        shirtPrice:shirtPrice
    }
} 
const productDetails = findProductDetails(supermarketData);
console.log(productDetails)