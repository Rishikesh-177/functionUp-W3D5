import React from 'react';
import './App.css';
import './product/product.css';
import ProductCard from './product/myproducts';

function App() {
  const products = [
    {
productId: '1',
productPic: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b85712949a0640e2ab17afb200d69969_9366/RokrTrail_Turquoise_GC0718_02_standard_hover.jpg",
productName: "Shoes",
Brand: "Adidas",
productDescription: "These shoes are comfortable and Stylish ",
Price: " Rs.2500/-",
Rating: 4

  },

  {
    productId: '2',
    productPic: "https://m.media-amazon.com/images/I/31EbcWq-8nL.jpg",
    productName: "Cotton T-shirt",
    Brand: 'H&M',
    productDescription: 'Short and breathable cotton T-shirt for every wear,',
    Price: "Rs. 800/-",
    Rating: 4

  },

  {
    productId: '3',
    productPic: "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-classic-399208-sm-r890nzkainu-481180996?$1300_1038_PNG$",
    productName: "SmartWatch",
    Brand: "Samsung",
    productDescription: 'Feature-packed smart watch with a sleek design',
    Price: 'Rs. 47000/-',
    Rating: 4.5
  },

  {
productId: '4',
    productPic: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/y/b/2/-original-imagjmhqndcxs6yg.jpeg?q=70",
    productName: 'Laptop',
    Brand: 'HP',
    productDescription: "HP Spectre Eyesafe Intel Evo Core i7 12th Gen - (16 GB/512 GB SSD/Windows 11 Home) x360 f1003TU Thin and Light Laptop  (16 Inch, Nightfall Black, 1.34 Kg)", 
    Price:'Rs. 1,47,000/-',
    Rating: 4
  },

  {
    productId: '5',
    productPic: "https://www.ulcdn.net/images/products/409472/slide/666x363/Florence_Storage_Bed_QUEEN_1.jpg?1634125511",
    productName: 'Bed',
    Brand:'Florence Engineered',
    productDescription: "Wood Queen Size Box Storage Bed In Finish",
    Price: 'Rs. 24000/-',
    Rating: 3.5
  }
];
  return (
    <div className='product-container'>
      {products.map((product) => (
        <ProductCard key={product.productId} {...product} />

      ))}
      
    </div>
  );
}

export default App;
