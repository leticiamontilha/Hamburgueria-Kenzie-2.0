import { Navigate, Route, Routes } from "react-router-dom"
import { CartProvider } from "../context/CartContext/CartContext"
import { HomePage } from "../pages/Home"
import { LoginPage } from "../pages/Login"
import { RegisterPage } from "../pages/Register"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={ <LoginPage /> } />
            <Route path="Register" element={ <RegisterPage /> } />
            <Route path="Home" element={ <CartProvider> <HomePage /> </CartProvider> }/>
            <Route path="*" element={<Navigate to="/Home"/> }/>
      </Routes>
    )
}