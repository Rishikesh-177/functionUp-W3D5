import React from 'react';

function ProductCard(props){
    const { productId, productPic, productName, Brand, productDescription, Price, Rating } = props;

    function addToCart() {
        alert (`Product of is ${productId},   which is ${productName} of brand ${Brand} has of rupees ${Price} is added in the cart, Please proceed to pay !`);
}

return (
    <div className='product-list'>
<div className='product-card'>
    <div className=' product-image'>
<img src= {productPic} alt= {productName} />
    </div>
    <div className='product-details'>
        <h2 className='product-name' > {productName}</h2>
        <p className='product-brand' > {Brand}</p>
        <p className='product-description' > {productDescription}</p>
        <p className=' product-price'> {Price}</p>
        <p className='product-rating' > {Rating}/5</p>
<button className='add-to-cart'  onClick= {addToCart}> Add to Cart </button>
</div>
 </div>
</div>
);
}

export default ProductCard;