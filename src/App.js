import React from 'react';
import Topbar from './components/Topbar'
import Products from './components/Products'
import Banner from  './components/Banner';
import Footer from './components/Footer'
const App = () => {
    return ( 
    <>
       <Topbar/>
       <Banner/>
       
       <Products/>
       <Footer/>
    </> 
    );
}
 
export default App;
// import PlacesGrid from './components/PlacesGrid'
// // import Footer from './components/Footer'
//Correct counter code
// import React, { useState } from 'react';
// const App = () => {
//     const [counter,updateCounter]=useState(0);
//     return ( 
//         <>
//         <h1>{counter}</h1>
//          <button onClick={()=>updateCounter(counter+1)}>+</button>
//          <button onClick={()=>updateCounter(counter-1)}>-</button>
//          </>
       
//      );
// }
 
// export default App;
// import axios from 'axios';
// import React, { useState,Component, useEffect } from 'react';

// const Products = () => {
//     const [products,setProducts] = useState([]);

//     useEffect(()=>{
//         axios('https://5d76bf96515d1a0014085cf9.mockapi.io/product')
//         .then((res)=>{
//             setProducts(res.data)
//         }).catch((err)=>alert(err))
//     },[]);
    
//     return(
//         <div>
//           {products.length && products.map((products)=>(
//               <Product key={products.id}
//               name={products.name}
//               preview={products.preview}
//               price={products.price}
//             />
//         </div>
//     )
// };
 
// export default Products;

