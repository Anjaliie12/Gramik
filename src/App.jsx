
import './App.css'

import  Content  from './Components/Content';
import  ProductShow  from './Components/ProductShow';
 import Brands from './Components/Brands';
import Peersbrands from './Components/Peersbrands';
import FertilizerCart from './Screens/FertilizerCart';
import Footer from './Components/Footer';
import TopSelling from './Components/TopSelling';
import Navbar from './Components/Navbar';
//  import NextProduct from './Nextfolder/NextProduct'
// import Sidebar from './Nextfolder/Sidebar';



function App() {
  return (
    <>
      <div>

        {/* <MainShop/>  
       <NextProduct/> 
         <Sidebar/>  */}
         <Navbar/>
        <Content/>
        <ProductShow/>
        <TopSelling/>
        <Brands/>
        <Peersbrands/>
        <FertilizerCart/>
    <Footer/>
    
       
      </div>
    </>
  )
}
export default App;
