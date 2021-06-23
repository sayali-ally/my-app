// import React from 'react';
// import Topbar from './components/Topbar'
// import PlacesGrid from './components/PlacesGrid'
// import Footer from './components/Footer'


// const App = () => {
//   return ( 
//     <div>
//       <Topbar 
//       name="Sayali"
    
//       />
//       <PlacesGrid/>
//       <Footer/>
//     </div>
//    );
// }
 
// export default App;
import React, { Component } from "react";

import ProductCard from "./components/productCard";


import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      loader: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then((res) => res.json())
        .then((res) => {
          this.setState({ productsList: res, loader: false });
        });
    }, 5000);
  }

  render() {
    const { productsList, loader } = this.state;
   
    return (
      <div className="App">
        {loader ? (
          <h1>Loading...</h1>
        ) : (
          <>
            
            <div className="card-container">
              {productsList.map(({ name, brand, price, preview }, key) => {
                return (
                  <ProductCard
                    key={key}
                    name={name}
                    brand={brand}
                    price={price}
                    image={preview}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
