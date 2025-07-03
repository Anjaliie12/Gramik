import ProductFertilizer from '../Components/ProductFertilizer';
import Fertilizers from './Fertilizers'

const FertilizerCart = () => {
    const handleAdd = (product)=>{
        console.log('Added to cart:', product.name)
    }
  return (
    <div className='container-body'>
      <h1 className="heading-fertilizer">Fertilizers</h1>
      <div className="container-fertilizer">
        {Fertilizers.map(product=>(
            <ProductFertilizer
        key={product.id}
        image={product.image}
        name={product.name}
        originalPrice={product.originalPrice}
        discountedPrice={product.discountedPrice}
        onAdd={() => handleAdd(product)}
          />
        ))}
      </div>
    </div>
  )
}
export default FertilizerCart;
