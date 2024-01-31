async function create() {
    const response = await fetch('https://dummyjson.com/products');
    const jsons = await response.json();
    const result = await jsons.products
    console.log(result);
    showData(result);
  }
  
  create()
  
  // fetch("https://dummyjson.com/products")
  // .then((response) => response.json())
  // .then((result) => {
  //   console.log(result.products);
  //   showData(result.products);
  // });
  
  
  
  function showData(data) {
    for (let i = 0; i < data.length; i++) {
      const parent = document.createElement("div");
      parent.classList.add("product");
      const productPhoto = document.createElement("img");
      const productName = document.createElement("h3");
      const productDesc = document.createElement("p");
      const productPrice = document.createElement("p"); 
  
      productPhoto.src = data[i].thumbnail;
      productName.innerHTML = data[i].title;
      productDesc.innerHTML = data[i].description;
      productPrice.innerHTML = data[i].price;
      productPhoto.classList.add("img-fluid")
  
  
      parent.append(productPhoto);
      parent.append(productName);
      parent.append(productDesc);
      parent.append(productPrice);
  
  
      document.querySelector(".products").append(parent);
    }
  }