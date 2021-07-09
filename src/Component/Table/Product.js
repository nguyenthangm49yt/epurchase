import React from 'react';


const Name = (props) =>{
    const {name, productCode, pathImg} =  props;
    return (
            <>
                <img src={pathImg}></img>
                <div>
                    <p style={{fontWeight: 'bold', fontSize: 13}}>{name}</p>
                    <p>{productCode}</p>
                </div>
            </>
    )
}

function Product  (props) {


    return(
            <Name name='Macbook' productCode='SKU 345-19' pathImg={process.env.PUBLIC_URL + "/images/product1.png"}></Name>

    )
}

export default Product;