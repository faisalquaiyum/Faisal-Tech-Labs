import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "./Register.css"; // same css file as Register component

// const URL = "http://localhost:5000/auth/login";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLocalStorage, API } = useAuth();

  const URL = `${API}/auth/login`;

  // Handle form input
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        // stored token in local storage
        storeTokenInLocalStorage(data.token);
        toast.success("Login successful!");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="images/login.png"
                  alt="login-img"
                  width="400"
                  height="500"
                />
              </div>

              {/* Login form */}
              <div className="login-form form-container">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="enter your email"
                      value={user.email}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="enter your password"
                      value={user.password}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <br />

                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
