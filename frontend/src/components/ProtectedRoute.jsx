import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = async () => {
    const token = localStorage.getItem("Token"); 
    if (!token) {
      setIsAuthorized(false);
      return;
    }

    try {
      const response = await fetch("https://fakestoreapi.com/carts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if (response.ok) {
        setIsAuthorized(true); 
      } else {
        setIsAuthorized(false); 
      }
    } catch (error) {
      console.error("Error validating token:", error);
      setIsAuthorized(false);
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>; 
  }

  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
