import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AddProduct from './components/AddProduct'
import Home from './components/Home'
import Favourites from './components/Favourites'
import Navbar from './components/Navbar'
import ContextProvider from './context'
import AddedProducts from './components/addedProducts'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="addedproducts" element={<AddedProducts />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function AppStore() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  )
}

export default AppStore
