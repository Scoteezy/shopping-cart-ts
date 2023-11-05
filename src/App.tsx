import { Routes,Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import  Navigation  from "./components/Navigation"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
function App() {

  return (
    <>
    <ShoppingCartProvider>
      <Navigation/>
      <Container className="mb-4">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </Container>
    </ShoppingCartProvider>
    
    </>
  )
}

export default App
