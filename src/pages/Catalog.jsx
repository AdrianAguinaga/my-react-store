import Product from '../components/Product';
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';

function Catalog() {
  // const products = [];
 const [products, setProducts] = useState([]);
 const [categories, setCategories] = useState([]);//to hold the categories
 const [prodsToDisplay, setProdsToDisplay] = useState([]);//To hold the producs to show
  // useEffect runs when the component loads
  useEffect(function(){
    console.log("Component Loaded");
    let service = new DataService();
    let data = service.getProducts();
    setProducts(data);
    loadCatalog();
  },[] // the empty array [] means: "run this fuction only once"
);

function loadCatalog(){
  let service = new DataService();
  let data = service.getProducts();
  setProdsToDisplay(data);//Initially, display all products
  let cats= ["fruit","berry"];
  setCategories(cats);
}

function filter(category){
let list = [];
//find the products that match the category
for(let i=0; i<products.length;i++)
{
  let prod = products[i];
  if(prod.category === category)
  {
    list.push(prod);
  }
}
setProdsToDisplay(list);
}

  return (
    <div>
      <h1>Check our amazing products</h1>
      

      <div className="row">
        {categories.map( cat => <button className='btn btn-primary' onClick={() => filter(cat)} > {cat} </button>)}
        <br/>
       {prodsToDisplay.map(prod => <Product key={prod._id} data={prod}/>)}
       
      </div>

    </div>
  )
}

export default Catalog;