// // import React from 'react';
// // // import {convertToUpper as upper} from '../../utils/constants'
// // import styles from './Topbar.module.css'

// import React, { Component } from "react";

// import ProductCard from "./components/productCard";


// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       productsList: [],
//       loader: true
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
//         .then((res) => res.json())
//         .then((res) => {
//           this.setState({ productsList: res, loader: false });
//         });
//     }, 5000);
//   }

//   render() {
//     const { productsList, loader } = this.state;
    
//     return (
//       <div className="App">
//         {loader ? (
//           <h1>Loading...</h1>
//         ) : (
//           <>
           
//             <div className="card-container">
//               {productsList.map(({ name, brand, price, preview }, key) => {
//                 return (
//                   <ProductCard
//                     key={key}
//                     name={name}
//                     brand={brand}
//                     price={price}
//                     image={preview}
//                   />
//                 );
//               })}
//             </div>
//           </>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

// //inheritance concept
// // class Parent extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state= {
// //              count:0,
// //             loader:true,
// //             products:[]
// //         };
// //     }

// //     componentDidMount(){
// //         fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
// //         .then(res=>res.json())
// //         .then(res=>this.setState({products : res,loader:false}));
// //     }

// //     shouldComponentUpdate(nextProps,nextState){
// //       console.log("should component update");
// //       if(nextState.count<=5 && nextState.count>=0)
// //       return true;
// //       else 
// //       return false;
// //   }

// //     render(){
// //        const {count}=this.state;
// //         return(
// //             <div>
// //                  <h1 className={styles.heading}>Count-{count}</h1>
// //                  <button onClick={()=>{
// //                      this.setState({count:this.state.count-1})
// //                  }}>-</button>

// //                 <button onClick={()=>{
// //                      this.setState({count:this.state.count+1})
// //                  }}>+</button>
// //             </div>
// //         )

// //     }
// // }
// // export default Parent;

// // {loader? (<h1>loading...</h1>
// //     ): (products.length && products.map(({name})=><h1>
// //         {name}</h1>)
// //         )}
      
      
// //       <h1 className={styles.heading}>Count-{count}</h1>
// //       <button onClick={()=>this.setState({count: ++this.state.count : count})}>+</button>
// //       <button onClick={()=>this.setState({count: --this.state.count: count})}>-</button>
// //     </div>


// // class Parent extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state= {
// //             count:0,
// //             loader:true,
// //             products:[],
// //         };
// //     }

// //     componentDidMount(){
// //         fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
// //         .then(res=>res.json())
// //         .then(res=>this.setState({products : res,loader:false}));
// //     }

// //     render(){
// //         const {loader,products}=this.state;
// //         return(
// //             <div>

// //             {loader? (<h1>loading...</h1>
// //             ): (products.length && products.map(({name})=>
              
              
// //                   <h1>{name}</h1>)
// //             )}
             
// //             </div>
// //         )

// //     }
// // }
// // export default Parent;


// // const  = () => {     sfc
// //     return (  );
// // }
 
// // export default ;

// // class Parent extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state= {
// //             loader:true,
// //             products:[]
// //         };
// //     }

// //     componentDidMount(){
// //         fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
// //         .then(res=>res.json())
// //         .then(res=>this.setState({products : res,loader:false}));
// //     }

// //     shouldComponentUpdate(nextProps,nextState){
// //       console.log("should component update");
// //       if(nextState.count<=5 && nextState.count>=0)
// //       return true;
// //       else 
// //       return false;
// //   }

//     // render(){
//     //    const {count}=this.state;
//     //     return(
//     //         <div>
//     //              <h1 className={styles.heading}>Count-{count}</h1>
//     //              <button onClick={()=>{
//     //                  this.setState({count:this.state.count-1})
//     //              }}>-</button>

//     //             <button onClick={()=>{
//     //                  this.setState({count:this.state.count+1})
//     //              }}>+</button>
//     //         </div>
//     //     )

//     // }
// // }
// // export default Parent;
// // import React, { Component } from "react";

// // import movieCard from "./components/movieCard";

// // import "./App.css";

// // class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       movieList: [],
// //       search:''
// //     };
// //   }

// //   componentDidMount() {
// //     fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
// //       .then((res) => res.json())
// //       .then((res) => {
// //         this.setState({ movieList: res.search });
// //       });
// //   }

// //   // shouldComponentUpdate(){

// //   // }
// //   render() {
// //     const { movieList } = this.state;
// //     return(
// //       <div>
// //         <h1>Movies</h1>
// //         <input
// //           onChange={(e) => this.setState({ searchValue: e.target.value })}
// //         />
// //         <button onClick={() => {}}>Submit</button>
// //         {/* <button onClick={() => {}}>Submit</button> */}

// //         {/* {movieList.map(({ Title,year,imdbID,image }, key) => {
// //                 return (
// //                   <movieCard
// //                   Title={Title}
// //                   year={year}
// //                   imdbID={imdbID}
// //                   image={Poster}
// //                   />
// //                 );
// //               })} */}
// //       </div>
// //     )
// //   }
// // }
               

// // export default App;

