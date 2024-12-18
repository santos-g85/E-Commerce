import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [carts, setCarts] = useState(null);
  const [token, setToken] = useState(null);

  const Login = async (username, password) => {
    try {
      const startTime = performance.now();
      // Login and store the token in localstorage
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!res.ok) {
        throw new Error(`Error status: ${res.status}`);
      }

      const data = await res.json();

      if (data.token) {
        setToken(data.token);
        localStorage.setItem("Token", data.token);
        console.log("token saved to localstorage");
        console.log("token:", data.token);

        // Fetch user detail
        const userResponse = await fetch("https://fakestoreapi.com/users");
        if (!userResponse.ok) {
          throw new Error("Failed to fetch users");
        }

        const users = await userResponse.json();
        const user = users.find(
          (u) => u.username.toLowerCase() === username.toLowerCase()
        );

        if (user) {
          setUser(user);
          console.log("User:", user);

          const usercart = await fetch(
            `https://fakestoreapi.com/carts/user/${user.id}`
          );
          if (!usercart.ok) {
            throw new Error("Failed to fetch user's cart");
          }
          const carts = await usercart.json();
          if (carts) {
            setCarts(carts);
            console.log("user's cart:", carts);
          } else {
            console.log("error fetching carts");
          }
        } else {
          console.log("User not found for username:", username);
        }

        const endTime = performance.now();
        // Calculate response time
        const responseTime = endTime - startTime;
        console.log(`Response time: ${responseTime} ms`);
        return true;
      } else {
        console.error("token not found in response");
      }
    } catch (error) {
      console.log("error logging in:", error);
    }
  };

  // Logout
  const Logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("Token");
    console.log("Logged out successfully");
  };

  return (
    <UserContext.Provider value={{ user, token, carts, Login, Logout }}>
      {children}
    </UserContext.Provider>
  );
};
