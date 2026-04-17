import QuantityPicker from './QuantityPicker';

function Product(props) {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={"/images/"+ props.data.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="text-start">{props.data.title}</h5>
          <h6 className="text-start">${props.data.price.toFixed(2)}</h6>
          
          <QuantityPicker />

          <button href="#" className="btn btn-dark mt-4">Add to cart</button>
        </div>
    </div>
  )
}

export default Product;