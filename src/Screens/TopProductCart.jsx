
import TopSelling from "../Components/TopSelling";
import TopCart from "./TopCart";

const TopProductCart = () => {
    const handleAdd = (Top)=>{
        console.log('Added to cart:', Top.name)
    }
  return (
    <div className='container-body'>
      <h1 className="heading-TopProduct">Top selling product</h1>
      <div className="container-TopProduct">
        {TopCart.map(Top=>(
            <TopSelling
        key={Top.id}
        image={Top.image}
        name={Top.name}
        originalPrice={Top.price}
        discountedPrice={Top.discountPrice}
        onAdd={() => handleAdd(Top)}
          />
        ))}
        
      
      </div>
    </div>
  )
}
export default TopProductCart;
