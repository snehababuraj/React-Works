// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import Nav from "./Nav";
import Banner from "./Banner";

import Footer from "./Footer";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";





function App(){

  //props
  const qualifications=[
    {"name":"MCA","university":"mgu","grade":"o"},
    {"name":"BCA","university":"mgu","grade":"o"},
    {"name":"BBA","university":"mgu","grade":"o"}
    
]

  return(
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <Header></Header>
      <Profile></Profile>
      <Skills></Skills>
      <Projects></Projects>
      <Education qualifications={qualifications}></Education>    
      <Footer></Footer>
    </div>
  )
}

export default App