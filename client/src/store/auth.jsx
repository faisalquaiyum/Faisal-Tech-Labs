import { createContext, use, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  // For API URL
  const API = import.meta.env.VITE_APP_URL_API;

  // Function to store token in local storage
  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  // Tackling logout user
  const LogoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  // Jwt Authentication - to currently logged in user\
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        console.log("userData", data.userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Fetching services data from the server
  const getServices = async () => {
    try {
      const response = await fetch(`${API}/data/service`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log("servicesData", data.data.services);
        setServices(data.data.services);
      }
    } catch (error) {
      console.error("Error fetching services data:", error);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLocalStorage,
        isLoggedIn,
        LogoutUser,
        user,
        services,
        authorizationToken,
        isLoading,
        API,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
