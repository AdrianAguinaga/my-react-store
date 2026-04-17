import Product from '../components/Product';
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';

function Catalog() {
  // const products = [];
 const [products, setProducts] = useState([]);
 
  // useEffect runs when the component loads
  useEffect(function(){
    console.log("Component Loaded");
    let service = new DataService();
    let data = service.getProducts();
    setProducts(data);
  },[] // the empty array [] means: "run this fuction only once"
);

  return (
    <div>
      <h1>Check our amazing products</h1>
      

      <div className="row">
       {products.map(prod => <Product key={prod._id} data={prod}/>)}
       
      </div>

    </div>
  )
}

export default Catalog;