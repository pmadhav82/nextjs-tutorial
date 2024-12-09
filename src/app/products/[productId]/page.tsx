'use client'
import { useEffect, useState } from "react"

type Prop = {
    params:{productId:number}
}

type Product = {
    id:number,
    detail:string
}


type ProductList = [Product];


const productDetail= [
    {
        id:1,
        detail: "This is the detail of product 1"
    },
    {
        id:2,
        detail: "This is the detail of product 2"
    },
    {
        id:3,
        detail: "This is the detail of product 3"
    },
    {
        id:4,
        detail: "This is the detail of product 4"
    }
    
    ]


export default    function ProductDetail({params}:Prop){
   


const [product, setProduct] = useState<Product>({id:0, detail:""});


useEffect(()=>{

    const getProduct= async()=>{
const {productId} = await params;

    const product = productDetail.find(product=> product.id === productId);
    console.log(productId);
    if(product){
        setProduct(product);
    }

    }
getProduct();
},[params])

return <>

<h2>{product.detail}</h2>

    </>
}