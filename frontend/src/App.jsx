import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import Home from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { NavbarSimple } from "./components/Navbar";
import { UserProvider} from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./pages/profile/UserProfile";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile/>
            </ProtectedRoute>
          }
        />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
