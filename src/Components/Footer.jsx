import React from 'react'

 const Footer = () => {
  return (
    <div className='container-last'>
        <div className="container-footer">
            <div className="footer-page">
                <img src="footer-logo.png" alt="" />
                <p className="detail">Empowering farmers, and transforming 
                livelihoods. At Gramik, we offer 
                 direct access to top-tier agricultural inputs, 
                elevating yields and prosperity while eliminating  
                 Explore our wide range of products: 
                Seeds, Plants, Organic Pesticides, and Agricultural Tools in India.</p>
               </div>

               <div className="footer-page">
               <h4>Useful Link</h4>
                     <p>Privacy Policy</p>
                     <p>Return Policy</p>
                     <p>About Us</p>
                     <p>Seller Policy</p>
                     <p>Term and condition</p>
                     <p>Shipping Policy</p>
                     <p>News and Media</p>
                      <p>Blog</p> 
               </div>
               <div className="footer-page">
                        <h4>My Account</h4>
                        <p>Login</p>
                        <p>Order History</p>
                        <p>My Wishlist</p>
                        <p>Track Order</p>
                        <p>Be a Seller</p>
                        <button className='apply'>Apply</button>
               </div>

               <div className="footer-page">
                    <h4>Contact us </h4>
                        <p>Address:</p>
                        <p className='address-1'>AGRIPROJUNCTION VENTURES PRIVATE LIMITED  <br />
                        Registered Address (Lucknow)  <br />
                    - 209B/C & 213, 2nd Floor, Cyber Heights,Vibhuti Khand,  <br />
                    Gomti Nagar,Lucknow, Uttar Pradesh, 226010   <br />
                    Corporate Address (Pune) - Global Business Hub Office no-410,  <br />
                     4th floor near World Trade Center Tower-1 Kharadi, Pin code 411014   <br />
                     Lucknow Office - 209B/C & 213, 2nd Floor, Cyber Heights,Vibhuti Khand,  <br />
                      Gomti Nagar, Lucknow, Uttar Pradesh, 226010</p>
                       <p>Phone no:</p>
                       <p>73888821222</p>
                       <p>Email:</p>
                       <p>info@gramik.in</p>
               </div>
        </div>
    </div>
  )
}

export default Footer;
