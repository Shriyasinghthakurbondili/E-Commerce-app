// // import React, { useState } from 'react'
// // import { ToastContainer, toast } from 'react-toastify'
// // import React, { useState } from 'react'
// // import NavBar from './NavBar'
// // import Header from './Header'
// import './App.css'
// import React, { useEffect, useState } from 'react'
// // import Python from './Python'
// // import SignUp from './SignUp'
// // import Login from './Login'
// // import Home from './Home'
// // import Javascript from './Javascript'
// // import NavBar2 from './NavBar2'
// // import Header2 from './Header2'
// // import Body from './Body'
// // import Footer from './Footer'
// // import Sidebar from './Sidebar'
// // import {useState} from 'react'


// // import {BrowserRouter,Routes,Route, useSearchParams} from "react-router-dom"


// // function App(){
//   // function handleAlert(){
//   //   alert("hello world")
//   //   console.log("hello world")
//   // } 
// // function App(){
// //   var [data,setData] = useState("hello world") 
  
// //   function handleChange(){
// //     setData("Hello bye")
// //   }

// // function App(){
// //   var [count,setCount] = useState(0)
// //   console.log("count", count)

// //   function handleInc(){
// //     setCount(count++)
// //   }
// //   function handleDec(){
// //     setCount(count--)
// //   }
// //   function handleReset(){
// //     setCount(count=0)
// //   }  

// // function App(){
// //   var [count,setCount] = useState(0)
// //   console.log("count",count)
//   // console.log("Inline styling")
//   // var tag ={
//   //   color:"lavender",
//   //   backgroundColor:"Orange",
//   //   height:"150px"
//   // }

//   // Conditional rendering
//   // var accountExists = null
//   // console.log(accountExists)
//   // var component
//   // console.log(component)
//   // if(accountExists){
//   //   component=<Login/>
//   // }
//   // else{
//   //   component=<SignUp/>
//   // }
//   // var isLogin = null
//   // return (
//     // 
//     // <div>
//       {/* inline css */}
//       {/* <h1 style={{color:"red",backgroundColor:"yellow",height:"200px"}}>I am the Inline styling</h1> */}

//       {/* Internal css */}
//       {/* <h2 style={tag}>I am the Internal styling</h2>
//       <h3 style={tag}>I am the Internal styling</h3> */}
      
//       {/* External tag */}
//       {/* <h3 id='h3Tag'>I am the External Tag</h3> */}

//       {/* <SignUp/>
//       <br></br>
//       <Login/> */}

//       {/* conditional rendering component*/}
//       {/* the output will show login because the condition is true else it will show singup page if the condition is false and null*/}
//       {/* {component} */}
      
//       {/* <div>
//         {
//           isLogin ? <SignUp/> : <Login/>
//         }
//       </div>
//     </div> */}
  
   
//   // )

//   //  

//   // return(
//   //   <div>
//   //     <button onClick={handleAlert}>click</button>
//   //   </div>
//   // )

//   // return(
//   //   <div>
//   //     <h1>{data}</h1>
//   //     <button onClick={handleChange}>change</button>
//   //   </div>
//   // )

//   // return(
//   //   <div>
//   //     <h1>{count}</h1>
//   //     <button onClick={handleInc}>Increment</button>
//   //     <button onClick={handleDec}>Decrement</button>
//   //     <button onClick={handleReset}>Reset</button>
//   //   </div>
//   // )
//   // return(
//   //   <div>
//   //     <h1>{count}</h1>
//   //     <button onClick={()=>{setCount(count+1)}}>Increment</button>
//   //     <button onClick={()=>{setCount(count-1)}}>Decrement</button>
//   //     <button onClick={()=>{setCount(0)}}>Reset</button>
//   //   </div>
//   // )

//   // return(
//   //   <div className="app-bg">
//   //     <h1>Hello React</h1>
//   //   </div>
//   // )
// // }

// // function App(){
// //   return(
// //     <div>
// //       <NavBar2/>
// //       <Header2/>
// //       {/* Sidebar + Body */}
// //       <div style={{display:"flex" }}>
// //         <Sidebar/>
// //         <Body/>
// //       </div> 
// //       <Footer/> 
// //     </div>
// //   )
// // }
// // function App(){
//       // var[name,setName] = useState("")
//       // var[email,setEmail] = useState("")
//       // var[number, setNumber] = useState("")
//       // var[password,setPassword] = useState("")

//       // return(
//       //   <body>
//       //   <div id='div12'>
//       //     <label htmlFor=''>Enter Name:</label>
//       //     <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" />
//       //     <br></br>
//       //     <br></br>
//       //     <label htmlFor="">Enter Email:</label>
//       //     <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' />
//       //     <br></br>
//       //     <br></br>
//       //     <label htmlFor=''>Enter Number:</label>
//       //     <input value={number} onChange={(e)=>{setNumber(e.target.value)}} type='number' />
//       //     <br></br>
//       //     <br></br>
//       //     <label htmlFor=''>Enter Password:</label>
//       //     <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' />
//       //   </div>
//       //   </body>
//       // )
// // }

// // 

// // function App(){

// // const App = () => {
// //   return (
// // SignUpPrgram
// //       <BrowserRouter>
// //         <Routes>

// //           {/* Default Route */}
// //           {/* <Route path='/' element={<SignUp/>}/> */}

// //           {/* Signup Route */}
// //           {/* <Route path='/SignUp' element={<SignUp/>}/> */}

// //           <Route path='/' element={<Login/>}/>

// //           {/* Signup Route */}
// //           <Route path='/Login' element={<Login/>}/>

// //         </Routes>
// //       </BrowserRouter>
// //   )
// // }

//   // var[name,setName] = useState("")
//   // var[email,setEmail] = useState("")
//   // var[number,setNumber] = useState("")
//   // var[password,setPassword] = useState("")

//   // function HandleForm(e){
//   //   e.preventDefault()//without refreshing it will take/store the data
//   //   if(name===""||email===""||password===""||number===""){
//   //     alert("Please fill the details of the fields");
//   //   }else{
//   //     if(name=='admin' && email=='admin@gmail.com' && password=='admin123' && number==9295404035){
//   //       alert("form submitted")
//   //       // to empty the input field after clicking the submit button and sending the data's
//   //       setName("")
//   //       setEmail("")
//   //       setPassword("")
//   //     }
//   //   }
//   // }

//   // console.log(name,email,password)
//   // return(
//   //      <div>
//   //       <label htmlFor=''>Enter Name</label>
//   //       {/* e.target.value=>to trigger the data of the input the field */}
//   //       <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
//   //       <label htmlFor=''>Enter Email</label>
//   //       <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
//   //       <label htmlFor=''>Enter password</label>
//   //       <input type='password' value={password} onChange={(e)=>{setPassword(e.target)}}></input>
//   //       <label htmlFor=''>Enter Number</label>
//   //       <input type='number' value={number} onChange={(e)=>{setNumber(e.target)}}></input>
//   //       <button type="submit">submit</button>
        
//   //      </div>
//   // )
  

//   //toast program
// // function App(){
// //     var [name,setName] = useState("")
// //     var [email,setEmail] = useState("")
// //     var [number,setNumber] = useState("")
// //     var [password,setPassword] = useState("")

// //     function handleForm(e){
// //         e.preventDefault()
// //         if(name === "" || email == "" || number == "" || password == ""){
// //            toast.error("fill all the feilds")
// //         }else{
// //             if(name == "ananth" && email == "ananth" && password == "ananth" && number == "ananth"){
// //                 toast.success("login done")
// //                   setName("")
// //                   setEmail("")
// //                   setNumber("")
// //                   setPassword("")
// //             }else{
// //                 toast.warn("invalid details")
// //                 setName("")
// //                 setEmail("")
// //                 setNumber("")
// //                 setPassword("")
// //             }
            
// //         }

// //     }
// //     console.log(name,email,password,number);

    
// //     return(
// //         <div>
// //             <ToastContainer/>
// //             <form onSubmit={handleForm} action="">
// //             <label htmlFor="">Enter Name</label>
// //             <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" />
// //             <label htmlFor="">Enter Email</label>
// //             <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" />
// //             <label htmlFor="">Enter Number</label>
// //             <input value={number} onChange={(e)=>{setNumber(e.target.value)}} type="text" />
// //             <label htmlFor="">Enter Password</label>
// //             <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" />
// //             <button type='submit'>submit</button>
// //             </form>

// //         </div>
// //     )
// // }



// // export default App;

// // Login Program
// // function App(){
// //   return(
// //     <div>
// //       <BrowserRouter>
// //           <Routes>
// //             <Route path='/' element={<Home/>} />
// //             <Route path='/js' element={<Javascript/>} />
// //             <Route path='/python' element={<Python/>} />
// //           </Routes>
// //       </BrowserRouter>
// //       </div>
// //   )
// // }

// // export default App;

// function App(){
//   // [] is used to initialize an empty array since the API returns multiple products.
//   const[data, setData] = useState([])


//   async function fetchData() {
//     const result = await fetch("https://fakestoreapi.com/products")
//     const jsonData = await result.json()
//     setData(jsonData)
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div className="app">
//       <h1 className="app-title">🛒 FakeStore</h1>

//       <div className="product-container">
//         {
//           data.map((item) => (
//             <div className="product-card" key={item.id}>
              
//               <div className="image-box">
//                 <img src={item.image} alt={item.title} />
//               </div>

//               <div className="product-info">
//                 <h2 className="product-title">{item.title}</h2>
//                 <p className="product-price">₹ {item.price}</p>
//                 <button className="buy-btn">Add to Cart</button>
//               </div>

//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

//   export default App;


// import React, { useEffect, useState } from 'react'
// import "./App.css"

// function App(){

  // [] is used to initialize an empty array since the API returns multiple products.
//   const [data, setData] = useState([])

//   async function fetchData() {

//     try {

//       const result = await fetch("https://fakestoreapi.com/products")

//       // ✅ Prevent crash if API fails
//       if(!result.ok){
//         throw new Error("API is not responding")
//       }

//       const jsonData = await result.json()

//       // ✅ Safety check (VERY IMPORTANT)
//       if(Array.isArray(jsonData)){
//         setData(jsonData)
//       }else{
//         console.log("Unexpected API response")
//       }

//     } catch(error) {

//       console.log("Fetch Error 👉", error)

//     }
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div className="app">
//       <h1 className="app-title">🛒 FakeStore</h1>

//       <div className="product-container">

//         {/* ✅ Prevent map error */}
//         {data.length === 0 ? (
//           <h2>Loading products...</h2>
//         ) : (

//           data.map((item) => (
//             <div className="product-card" key={item.id}>
              
//               <div className="image-box">
//                 <img src={item.image} alt={item.title} />
//               </div>

//               <div className="product-info">
//                 <h2 className="product-title">{item.title}</h2>
//                 <p className="product-price">₹ {item.price}</p>
//                 <button className="buy-btn">Add to Cart</button>
//               </div>

//             </div>
//           ))

//         )}

//       </div>
//     </div>
//   )
// }

// export default App;

// import React, { useMemo, useState } from 'react'
// UseMemo Prgram
// const App = () => {
//     var [number,setNumber] = useState(0)
//     var [count,setCount] = useState(0)
//     function cubeNum(num){
//         console.log("calculation done");
//         return Math.pow(num,3)
//     }
//     var result = useMemo(()=>{return cubeNum(number)},[number])
//   return (
//     <div>
//         <h1>Cube of the number</h1>
//         <input value={number} onChange={(e)=>{setNumber(e.target.value)}} type="text" />
//         <h1>{result}</h1>
//         <h1>{count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>+1</button>
//     </div>
//   )
// }

// export default App;

// import React, { useCallback, useState } from "react";
// import Header from "./Header"
// const App = ()=>{
//   var [count,setCount] = useState(0)
//   var newFn = useCallback(()=>{},[])
//   return(
//     <div>
//       <Header newFn = {newFn}></Header>
//       <h1>{count}</h1>
//       <button onClick={()=>{setCount(count+1)}}>+1</button>
//     </div>
//   )
// }
// export default App; 

// import React from "react";
// import { useEffect, useState } from "react";
// const App = () =>{
//   var[data,setData] = useState([])
//   var[input,setInput] = useState("")

//   async function fetchData(){
//     var result = await fetch("https://fakestoreapi.com/products")
//     var jsonResult = await result.json()
//     setData(jsonResult)
//   }
//   useEffect(()=>{
//     fetchData()
//   })

//   var filteredData = data.filter(item=>item.title.toLowerCase().includes(input.toLowerCase()))
//   return(
//     <div>
//       <input value={input} onChange={(e)=>{setInput(e.target.value)}} type='text'></input>
//       {
//         filteredData.map((item)=>{
//           return(
//             <div>
//               <h1>{item.title}</h1>
//             </div>
//           )
//         })
//       }
//     </div>   
//   )
// }
// export default App;

// import React from "react";
// import Home  from "./Home";
// const App = () =>{
//   var myName = "javascript"
//   return(
//     <div>
//       <Home name={myName}></Home>
//     </div>
//   )
// }
// export default App;

// import React, { Suspense, lazy } from "react";
// import "./App.css"
// var Home = lazy(() =>
//   new Promise(resolve => {
//     setTimeout(() => resolve(import("./Home")), 3000)
//   })
// )
// const App = () =>{
//   return(
//     <div>
//       {/* <Suspense fallback={"loading"}>
//        <Home></Home> 
//       </Suspense> */}
//       <Suspense
//         fallback = {
//           <div className="spinner-container">
//             <div className="spinner"></div>
//           </div>
//         }
//         >
//           <Home/>
//       </Suspense>

//     </div>
//   )
// }
// export default App;

// import React, { Suspense, lazy } from "react";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// const Home = lazy(()=>import("./Home"))
// const App = () =>{
    
//     // App container style
//     const appStyle = {
//         minheight : "100vh",
//         background : "linear-gradient(135deg,#667eea,#764ba2)",
//         display : "flex",
//         justifyContent : "center",
//         alignItems:"center"
//     }

//     // Loader style 
//     const loaderStyle = {
//         minheight : "100vh",
//         background : "linear-gradient(135deg,#667eea,#764ba2)",
//         display : "flex",
//         justifyContent : "center",
//         alignItems:"center"
//     }

//     return(
//         <div style={appStyle}>
//             <Suspense fallback={
//                 <div style={loaderStyle}>
//                   <AiOutlineLoading3Quarters></AiOutlineLoading3Quarters>  
//                 </div>
//             }>
//                 <Home></Home>
//             </Suspense>
//         </div>
//     )
// }
// export default App;

// import React, { useState } from "react";

// const App = () =>{
//   var [email,setEmail] = useState("")
//   var [password,setPassword] = useState("")
//   var[error,setError] = useState("")
  
//   function HandleForm(e){
//     e.preventDefault()
//     if(email=="js@gmail.com" && password=="javascript"){
//       alert("Login is success")
//       setError(null)
//     }else{
//       setError("Email or Password is incorrect")
//     }
//   }

//   return(
//     <div>
//       <form onSubmit={HandleForm} action="">
//         <label htmlFor="">Enter Email</label>
//         <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email"></input>
//         <label htmlFor="">Enter Password</label>
//         <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
//         <button>Login</button>
//         <h1>{error}</h1>
//       </form>
//     </div>
//   )
// }
// export default App;

// import React from "react";
// import {Toaster,toast} from "react-hot-toast"
// const App = () =>{
//   var HandleClick = () => {
//     toast("Hello World")
//   }
//   return(
//     <div>
//       <Toaster position="top-center" reverseOrder={false}></Toaster>
//       <button onClick={HandleClick}>click</button>
//     </div>
//   )
// }
// export default App;

// import React from "react";
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Login from './Login'
// import SignUp from './SignUp'
// import Home from './Home'
// const App = () =>{
//   return(
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login/>}></Route>
//         <Route path='/signup' element={<SignUp/>}></Route>
//         <Route path="/home" element={<Home/>}></Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App;


// import React, { useEffect, useState } from 'react'

// import {BrowserRouter,Routes,Route} from "react-router-dom"

// import Login from './Login'
// import Signup from './Signup'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>
//         <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<Login/>}/>
//             {/* <Route path='/signup' element={<Signup/>}/> */}
//             <Route path='/home' element = {<Home/>}/>

//         </Routes>
//         </BrowserRouter>

//     </div>
//   )
// }

// export default App;

// import React, { useEffect, useState } from 'react'

// const App = () => {

//     const [data, setData] = useState([])
//     const [cart, setCart] = useState([])

//     // Fetch Products
//     async function fetchData(){
//         console.log("Fetched started....")
//         const result = await fetch("https://fakestoreapi.com/products")
//         const jsonResult = await result.json()
//         setData(jsonResult)
//     }

//     useEffect(()=>{
//         fetchData()
//     },[])

//     // Add To Cart
//     function addToCart(product){

//         const itemExist = cart.find(item => item.id === product.id)

//         if(itemExist){

//             const updatedCart = cart.map(item =>
//                 item.id === product.id
//                 ? {...item, quantity: item.quantity + 1}
//                 : item
//             )

//             setCart(updatedCart)

//         }else{

//             setCart([...cart, {...product, quantity:1}])
//         }
//     }

//   return (
//     <div style={{padding:"20px"}}>

//         <h1>🛒 Products</h1>

//         {
//             data.map((item)=>(
//                 <div key={item.id} style={{
//                     border:"1px solid gray",
//                     margin:"10px",
//                     padding:"10px"
//                 }}>
//                     <h3>{item.title}</h3>
//                     <p>${item.price}</p>

//                     <button onClick={()=>addToCart(item)}>
//                         Add To Cart
//                     </button>
//                 </div>
//             ))
//         }

//         <hr/>

//         <h1>🛍 Cart</h1>

//         {
//             cart.length === 0 ? (
//                 <h3>Cart is Empty</h3>
//             ) : (
//                 cart.map(item => (
//                     <div key={item.id} style={{
//                         border:"1px solid black",
//                         margin:"10px",
//                         padding:"10px"
//                     }}>
//                         <h3>{item.title}</h3>

//                         <p>Quantity: {item.quantity}</p>
//                     </div>
//                 ))
//             )
//         }

//     </div>
//   )
// }

// export default App;

// import React, {useEffect, useState} from "react";
// const App = () => {
//     const[product,setProduct] = useState([])
//     async function fetchData(){
//         const response = await fetch("https://fakestoreapi.com/products")
//         var data = await response.json()
//         setProduct(data) //store/call  the products
//     }
//     // used to load when the page is refresh
//     useEffect(()=>{
//         fetchData()
//     }, [])
//     return(
//         <div>
//             <h1>Products</h1>
//             {
//                 product.map((item)=>(
//                     <div key={item.id} style={{border:"1px solid black", margin:"20px", padding:"20px"}}>
//                     <h1>{item.title}</h1>
//                     <h1>{item.price}</h1>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }
// export default App;

// import React, {useState} from "react";
// const App = () =>{
//     var[count,setCount] = useState(0)
//     console.log(count)
//     return(
//         <div>
//         <h1>{count}</h1>    
//         <button onClick={()=>{setCount(count+1)}}>+1</button>
//         <button onClick={()=>{setCount(count-1)}}>-1</button>
//         <button onClick={()=>{setCount(0)}}>Reset</button>
//         </div>
//     )
// }
// export default App;

// import React, {useEffect, useState} from "react";
// const App =  () =>{
//     const[product,setProduct] = useState([])
//     async function fetchData(){
//         const response = await fetch("https://fakestoreapi.com/products")
//         const data= await response.json()
//         setProduct(data)
//     }

//     useEffect(()=>{
//         fetchData()
//     }, [])

//     return(
//         <div>
//             <h1>Product</h1>
//             {
//                 product.map((item)=>(
//                     <div key={item.id} style={{border:"1px solid gray", margin:"10px", padding: "10px"} }>
//                         <h1>{item.id}</h1>
//                         <h1>{item.title}</h1>
//                         <img src={item.image} alt={item.title}></img>
//                    </div> 
//                 ))
//             }
//         </div>
//     )
// }
// export default App;

// import React, { useState } from "react";
// const App = () =>{
//     const[count,setCount] = useState(0)
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>{setCount(count+1)}}>+1</button>
//             <button onClick={()=>{setCount(count-1)}}>-1</button>
//             <button onClick={()=>{setCount(0)}}>reset</button>
//         </div>
//     )
// }
// export default App;

// import React, {useEffect, useState} from "react";
// const App = () => {
//     const[product, setProduct] = useState([])
//     async function fetchData(){
//         const response = await fetch("https://fakestoreapi.com/products")
//         const data = await response.json()
//         setProduct(data)
//     }

//     useEffect(()=>{
//         fetchData()
//     }, [])

//     return(
//         <div>
//             <h1>Products</h1>
//             {
//                 product.map((item)=>(
//                 <div>
//                     <h1>{item.title}</h1>
//                     <h1>${item.price}</h1>
//                     <img src={item.image} alt={item.title}></img>
//                 </div>
//                 ))
//             }
//         </div>
//     )
// }
// export default App;


// import React, { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {

//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [cart, setCart] = useState([]);

//   // Fetch Fake Store API
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   }, []);

//   // Add to cart
//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   // Filter products based on search
//   const filteredProducts = products.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="container">

//       {/* Navbar */}
//       <nav className="navbar">
//         <h1>🛍️ MyStore</h1>

//         <input
//           type="text"
//           placeholder="Search products..."
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <div className="cart">
//           🛒 Cart: <span>{cart.length}</span>
//         </div>
//       </nav>

//       {/* Product Grid */}
//       <div className="grid">
//         {filteredProducts.map((product) => (
//           <div className="card" key={product.id}>

//             <img src={product.image} alt={product.title} />

//             <h3>{product.title.substring(0, 40)}...</h3>

//             <p className="price">${product.price}</p>

//             <button onClick={() => addToCart(product)}>
//               Add to Cart
//             </button>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default App;

// import React from "react"
// import { useState } from "react"
// import "./App.css"
// function App(){
//   const[input,setInput] = useState("")
//   const[data,setData] = useState(null)
//   var API_Key = "cb03340574335c2f1266fe7437c2e952"

//   const getWeather = async()=>{
//     if(input==="") return;

//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_Key}&units=metric`

//     );

//     const result = await response.json();
//     setData(result)
//   };

//  return (
//   <div className="app">

    {/* HERO SECTION */}

    {/* <div className="hero">

      <div className="searchBar">
        <input
          placeholder="Search city..."
          onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {data && data.main && (
        <div className="heroWeather">

          <h1>{data.name}</h1>
          <h2>{Math.round(data.main.temp)}°</h2>
          <p>{data.weather[0].main}</p>

        </div>
      )}

    </div> */}

    {/* FORECAST ROW */}

    {/* <div className="forecastRow">
      <div className="day">Mon 27°</div>
      <div className="day">Tue 25°</div>
      <div className="day">Wed 28°</div>
      <div className="day">Thu 26°</div>
      <div className="day">Fri 29°</div>
    </div> */}

    {/* TWO CARD SECTION */}
{/* 
    {data && data.main && (
      <div className="cardsSection">

        <div className="leftCard">

          <h3>Today Details</h3>

          <div className="info">
            <p>Humidity</p>
            <span>{data.main.humidity}%</span>
          </div>

          <div className="info">
            <p>Wind</p>
            <span>{data.wind.speed} m/s</span>
          </div>

          <div className="info">
            <p>Feels Like</p>
            <span>{Math.round(data.main.feels_like)}°</span>
          </div>

        </div>

        <div className="rightCard">
          <h3>Hourly Forecast</h3>
          <div className="chartPlaceholder"></div>
        </div>

      </div>
    )}

  </div>
);

}
export default App; */}

// import React, {useEffect, useState} from 'react'
// import { Toaster, toast } from 'react-hot-toast'
// const App = () => {
//   const [title,setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const [blogs, setBlogs] = useState([])
   
//   const newBlog = {
//     title : "tilte",
//     description : "description"
//   }
 
//   async function createBlog(){
//     if(!title || !description){
//       toast.error("Please fill the fields")
//       return
//     }
//   const response = await fetch("https://698ecbe2aded595c2532d22d.mockapi.io/blogs", {
//     method:"post",
//     headers:{
//       "Content-Type" : "application/json"
//     },
//     body: JSON.stringify(newBlog)
//   })
  
//   if(response.ok){
//     toast.success("Blog created successfully")
//     fetchData()
//     setTitle("")
//     setDescription("")
//   }
//   else{
//     toast.error("Failed to create the Blog")
//     }
//   }

//   async function fetchData(){
//     const result = await fetch("https://698ecbe2aded595c2532d22d.mockapi.io/blogs")
//     const jsonResult = await result.json()
//     setBlogs(jsonResult)
//   }

//   useEffect(()=>{
//     fetchData()
//   }, [])

//   async function deleteBlog(blogitem){
//       const deleteBlog = await fetch("https://698ecbe2aded595c2532d22d.mockapi.io/blogs/${blogitem}",{
//             method: "delete",
//         })
//         if(deleteBlog.ok){
//           toast.success("Blog deleted successfully")
//         }
//         else{
//           toast.error("Fail to delete")
//         }

//   }

//   async function updatedBlog(updateditem){
//     const newTitle = prompt("Enter new Title:")
//     const newDescription = prompt("Enter new Description:")

//     const updatedblog = {
//       title: newTitle,
//       description : newDescription
//     }

//     const blogUpdated = await fetch("https://698ecbe2aded595c2532d22d.mockapi.io/blogs/${updatItem.id",{
//       method:"Put",
//       headers:{
//            "Content-Type" : "application/json"
//       },
//       body: JSON.stringify("updatedBlog")
//     })

//     if(updatedBlog.ok){
//       toast.success("Blog Updated successfully")
//       fetchData()
//     }
//     else{
//       toast.error("Failed to updated")
//     }
//   }

//   return(
//     <div>
//       <Toaster/>
//       <label htmlFor=''>Enter the title:</label>
//       <input value={title} onChange={(e)=>{setTitle(e.target.value)}}type="text"></input>
//       <label htloFor=''>Enter the description:</label>
//       <input value={description} onChange={(e)=>{setDescription(e.target.value)}}type='text'></input>
//       <button onClick={createBlog}>Create Blog</button>

//       <div>
//         {
//           blogs.map((item)=>{
//             <div key={item.id}>
//               <h1>{item.title}</h1>
//               <p>{item.description}</p>

//               <div>
//                 <button onClick={()=>updatedBlog(item)}>Update</button>
//               </div>

//               <div>
//                 <button onClick={()=>deleteBlog(item)}></button>
//               </div>
//             </div>
//           })
//         }
//       </div>
//     </div>
//   )
// }
// export default App;   


// import React, { useEffect, useState } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import "./App.css"
// const App = () =>{
//   const [title,setTitle] = useState("")
//   const [description,setDescription] = useState("")
//   const [blog,setBlog] = useState([])

//   const newBlog = {
//     title : title,
//     description : description
//   }

  // console.log(blog)
//  async function createBlog(){
//     if(!title||!description){
//       toast.error("Please fill the fields")
//       return 
//     }
//    const response = await fetch("https://698ecbe2aded595c2532d22d.mockapi.io/blogs",{
//     method : "post",
//     headers:{
//       "Content-Type" : "application/json"
//     },
//     body: JSON.stringify(newBlog)
//    })

//    if(response.ok){
//     toast.success("Blog is created successfully")
//     fetchData()
//     setTitle("")
//     setDescription("")
    
//    }
//    else{
//     toast.error("Failed to create the blog")
//    }
//  }

//  async function fetchData(){
//   const result = await fetch("https://698ecbe2aded595c2532d22d.mockapi.io/blogs")
//   const jsonResult = await result.json()
//   // setBlog(jsonResult)
//   setBlog(jsonResult.reverse())
//  }

//  useEffect(()=>{
//   fetchData()
//  }, [])

//  async function deleteBlog(blogitem){
//   const response = await fetch(`https://698ecbe2aded595c2532d22d.mockapi.io/blogs/${blogitem.id}`,{
//     method : "delete",
//   })

//   if(response.ok){
//     toast.success("Blog deleted successfully")
//     fetchData()
//   }
//   else{
//     toast.error("Fail to delete")
    
//   }
//  }

//  async function updatedBlog(updateitem){
//   const newTitle = prompt("Enter title:")
//   const newDescription = prompt("Enter description:")

//   const updatedBlog = {
//     title:newTitle,
//     description:newDescription
//   }
//   const blogUpdated = await fetch(`https://698ecbe2aded595c2532d22d.mockapi.io/blogs/${updateitem.id}`,{
//        method : "put",
//        headers: {
//         "Content-Type" : "application/json"
//        },
//        body: JSON.stringify(updatedBlog)
//   })
//   if(blogUpdated.ok){
//     toast.success("Blog updated")
//     fetchData()
//   }
//   else{
//     toast.error("Failed to updated the blog")
//   }
//  }
//   return(
//     <div className="app">
//       <Toaster />
//       <div className="container">
//         <h1 className="heading">Premium Blog App</h1>
//         <div className="form-card">
//           <label htmlFor="">Enter The Title:</label>
//           <input value={title} type="text" onChange={(e)=>{setTitle(e.target.value)}}></input>
//           <label htmlFor="">Enter The Description:</label>
//           <input value={description} type="text" onChange={(e)=>{setDescription(e.target.value)}}></input>
//           <button className="create-btn" onClick={createBlog}>Create Blog</button>
//         </div>
//       <div className="blog-list">  
//       {
//         blog.map((item)=>(
//           <div key={item.id} className="blog-card">
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>

//             <div className="btn-group">
//               <button className="update-btn" onClick={()=>updatedBlog(item)}>Update</button>
//             </div>
//             <div>
//               <button className="delete-btn" onClick={()=>deleteBlog(item)}>Delete</button>
//             </div>
//           </div>

          
//         ))
//       }
//     </div>
//   </div>
//   </div>  
//   )
// }
// export default App;
// import React, { useEffect, useState } from "react";
// import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
// import AuthPage from "./AuthPage";
// import "./App.css";

// const App = () => {

  // ================= AUTH =================
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ================= STATES =================
  // const [data, setData] = useState([]);
  // const [selectedItem, setSelectedItem] = useState(null);
  // const [search, setSearch] = useState("");
  // const [cart, setCart] = useState([]);
  // const [showCart, setShowCart] = useState(false);

  // ================= FETCH DATA =================
  // async function fetchData() {
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   const json = await res.json();
  //   setData(json);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // ================= CART =================
  // function addToCart(product) {
  //   setCart([...cart, product]);
  // }

  // function removeFromCart(id) {
  //   const updated = cart.filter((item) => item.id !== id);
  //   setCart(updated);
  // }

  // ================= SEARCH =================
  // const filteredData = data.filter((item) =>
  //   item.title.toLowerCase().includes(search.toLowerCase())
  // );

  // ================= TOTAL =================
  // const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  // ================= AUTH CHECK =================
  // if (!isAuthenticated) {
  //   return <AuthPage setIsAuthenticated={setIsAuthenticated} />;
  // }

  // ================= UI =================
  // return (
  //   <div className="app">

      {/* ================= HEADER ================= */}
      {/* <header className="header">

        <h2 className="logo">MyStore</h2>

        <div className="header-right">

          {/* SEARCH */}
          // <div className="search-box">
          //   <FaSearch />
          //   <input
          //     value={search}
          //     type="text"
          //     onChange={(e) => setSearch(e.target.value)}
          //     placeholder="Search products..."
          //   />
          // </div>

          {/* ACCOUNT DROPDOWN */}
          // <div className="account-box">

          //   <div className="account-text">
          //     <span className="small">Hello, sign in</span>
          //     <span className="bold">Account & Lists ▾</span>
          //   </div>

          //   <div className="dropdown">
          //     <button className="signin-btn">Sign In</button>

          //     <div className="dropdown-content">
          //       <div>
          //         <h4>Your Lists</h4>
          //         <p>Create a Wish List</p>
          //         <p>Baby Wishlist</p>
          //         <p>Discover your style</p>
          //       </div>

          //       <div>
          //         <h4>Your Account</h4>
          //         <p>Your Orders</p>
          //         <p>Your Wishlist</p>
          //         <p>Your Recommendations</p>
          //       </div>
          //     </div>
          //   </div>
          // </div>

          {/* ORDERS */}
          // <div className="nav-item">
          //   <p className="small">Returns</p>
          //   <p className="bold">& Orders</p>
          // </div>

          {/* CART */}
          // <button
          //   className="cart-btn"
          //   onClick={() => setShowCart(true)}
          // >
          //   <FaShoppingCart /> Cart ({cart.length})
          // </button>

          {/* USER ICON */}
      //     <button className="user-btn">
      //       <FaUser />
      //     </button>

      //   </div>
      // </header>

      {/* ================= CART MODAL ================= */}
      // {showCart && (
      //   <div className="overlay" onClick={() => setShowCart(false)}>

      //     <div
      //       className="cart-modal"
      //       onClick={(e) => e.stopPropagation()}
      //     >
      //       <h2>Shopping Cart</h2>

      //       {cart.length === 0 ? (
      //         <p>No items in cart</p>
      //       ) : (
      //         <>
      //           {cart.map((item) => (
      //             <div key={item.id} className="cart-item">
      //               <p>{item.title}</p>
      //               <span>${item.price}</span>

      //               <button onClick={() => removeFromCart(item.id)}>
      //                 Remove
      //               </button>
      //             </div>
      //           ))}

      //           <h3>Total: ${totalPrice.toFixed(2)}</h3>
      //         </>
      //       )}

      //       <div className="cart-actions">
      //         <button onClick={() => setShowCart(false)}>
      //           Close
      //         </button>

      //         <button className="checkout-btn">
      //           Checkout
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // )}

      {/* ================= PRODUCT SECTION ================= */}
      // {selectedItem ? (

      //   <div className="product-details">

      //     <img src={selectedItem.image} alt="" />

      //     <div>
      //       <h2>{selectedItem.title}</h2>
      //       <p className="price">${selectedItem.price}</p>
      //       <p>{selectedItem.description}</p>

      //       <button onClick={() => addToCart(selectedItem)}>
      //         Add To Cart
      //       </button>

      //       <button
      //         className="back"
      //         onClick={() => setSelectedItem(null)}
      //       >
      //         Back
      //       </button>
      //     </div>

      //   </div>

      // ) : (

      //   <div className="product-grid">

      //     {filteredData.map((item) => (

      //       <div key={item.id} className="product-card">

      //         <img
      //           src={item.image}
      //           alt=""
      //           className="product-img"
      //           onClick={() => setSelectedItem(item)}
      //         />

      //         <h4>{item.title}</h4>
      //         <p className="price">${item.price}</p>

      //         <div className="card-buttons">

                {/* ✅ FIXED */}
//                 <button onClick={() => addToCart(item)}>
//                   Add To Cart
//                 </button>

//                 <button onClick={() => setSelectedItem(item)}>
//                   View
//                 </button>

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//     </div>
//   );
// };

// export default App; */}

// import React from "react";
// import Count from "./Count";
// import Increment from "./Increment";
// import Decrement from "./Decrement";
// import Reset from "./Reset";
// function App(){
//   return(
//     <div>
//       <Count/>
//       <Increment/>
//       <Decrement/>
//       <Reset/>
//     </div>
//   )
// }
// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import LoginUi from "./UI/LoginUi";
import ProductsUi from "./UI/ProductUi";
import CartUi from "./UI/CartUi";
import WishlistUi from "./UI/WishlistUi";
import ProfileUi from "./UI/ProfileUi";
import Checkout from "./UI/Checkout";
import Orders from "./UI/OrdersUi";
// import Navbar from "./UI/Navbar";
// ✅ ADD THESE IMPORTS
import AddressUi from "./UI/AddressUi";
import PaymentUi from "./UI/PaymentUi";
import OtpUi from "./UI/OtpUi";
import TrackingUi from "./UI/TrackingUi";
import OrderSuccess from "./UI/OrderSuccess";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<LoginUi />} />

        <Route path="/products" element={<ProductsUi />} />
        <Route path="/cart" element={<CartUi />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<WishlistUi />} />
        <Route path="/profile" element={<ProfileUi />} />

        {/* ✅ NEW FLOW */}
        <Route path="/address" element={<AddressUi />} />
        <Route path="/payment" element={<PaymentUi />} />
        <Route path="/otp" element={<OtpUi />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/tracking" element={<TrackingUi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;