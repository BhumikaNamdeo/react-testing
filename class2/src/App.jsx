
// import React, { useState } from 'react'

// const App = () => {


//   const [name,setname]=useState("");
//   const submitHandler=(e)=>{
//     e.preventDefault();
//     console.log(name);
//     setname("");
//   }
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input value={name} onChange={(e)=>setname(e.target.value)}  type="text" placeholder='name' />
//         <button>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App




import React, { useState } from 'react'
import Nav from './components/Nav'

const App = () => {
  const [nav,setnav]=useState("hello from navigation")
   return (
    <div>App

      <Nav details={nav}/>
    </div>
    
  )
}

export default App