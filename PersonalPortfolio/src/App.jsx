import Skills from './Skills'
import Hero from './Hero'
import About from './About'
import Qualification from './Qualification'
import Navbar from './Navbar'
import Services from './Services'
import Project from './Project'
import Footer from './Footer'








function App() {

  const user=[{"name":"sandra","degree":"Msc Computer Science","phone":"9090909000","dob":"12/02/2000","experience":"1Year","email":"sandra@gmail.com"}]
  
  const skillsets=[{"name":"python","percentage":"80%"},{"name":"javascript","percentage":"50%"},{"name":"django","percentage":"79%"},{"name":"react","percentage":"75%"},{"name":"SQL","percentage":"80%"}]

  return (
    <>
      
      <Navbar></Navbar>
      <Hero></Hero>
      <About user={user} > </About>
      <Skills skillsets={skillsets}></Skills>
      <Qualification></Qualification>
      <Services></Services>
      <Project></Project>
      <Footer></Footer>
     
    </>
  )
}

export default App