
import './App.css'
import { Home } from './components/home';
import { NavBar } from './components/NavBar';
import { Footer } from './components/footer';

const  App = () =>{
  return (
    <div className="w-[85%] m-auto bg-white" >
      <NavBar/>  
      <Home/>   
      <Footer/>
    </div>

  
  )
}

export default App
