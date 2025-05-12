import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLocalStorage, API } = useAuth();

  // Handle form input
  const handleInput = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    // Perform registration logic here, such as sending data to the server
    try {
      const response = await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        // Local storage token
        storeTokenInLocalStorage(user.token);
        toast.success("Registration successful!");
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
        // setInterval(() => {
        //   window.location.reload();
        // }, 1000);
      } else {
        toast.error(data.message || "Registration failed!");
      }
    } catch (err) {
      console.log(err);
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
                  src="images/register.png"
                  alt="registration"
                  width="400"
                  height="500"
                  className="registration-image"
                />
              </div>

              {/* Registration form */}
              <div className="registration-form form-container registration-content">
                <h1 className="main-heading mb-3">Registration form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="enter your username"
                      value={user.username}
                      onChange={handleInput}
                      required
                    />
                  </div>
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
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="enter your phone"
                      value={user.phone}
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
                    Register
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

export default Register;
