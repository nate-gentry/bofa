// import React, {useState} from "react";

// function App() {
//   const [count, setCount] = useState(4)
//   const [theme, setTheme] = useState("red")

//   function decrementCount(params) {
//     setCount(prevCount => prevCount -1)
//   }
//   function incrementCount(params) {
//     //setCount(count+1)// incorrect 
//     setCount(prevCount => prevCount +1)
//     setTheme("blue")

//   }
//   return (
//     <div className="main">
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button onClick={incrementCount}>+</button>
//     </div>
//   )
// }

//============================================

/*
function App() {
  const [state, setState] = useState({count: 4, theme: "red"})
  const count= state.count
  const theme= state.theme

  function decrementCount(params) {
    setState(prevState => {
      return {...prevState, count: prevState.count -1}
    })
  }

  export default App;
  */

//===========================

 import React, {useState, useEffect} from "react";

export default function App() {
  const [resourceType,setResourceType] = useState("posts")
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json))
  }, [resourceType])
  return (
    <div className="main">
    <div>
      <button onClick={()=> setResourceType('posts')}>Posts</button>
      <button onClick={()=> setResourceType('users')}>Users</button>
      <button onClick={()=> setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(item =>{
      return <pre>{JSON.stringify(item)}</pre>
    })}

    </div>
  )
}

