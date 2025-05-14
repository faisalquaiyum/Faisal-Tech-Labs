import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken, API } = useAuth();

    // Get single user data
    const getSingleUserData = async () => {
      try {
        const response = await fetch(
          `${API}/admin/users/${params.id}`,
          {
            method: "GET",
            headers: {
              Authorization: authorizationToken,
            },
          }
        );
        const data = await response.json();
        console.log(`User single data: ${data}`);
        setData(data);

      } catch (err) {
        console.log(err);
      }
    };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  }

  // Update user data on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log(`User updated: ${result}`);
      if (response.ok) {
        toast.success("User data updated successfully!");
      } else {
        toast.error("Failed to update user data.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
     <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
          
            {/* hero content  */}
            <div className="hero-content">
              <h1>Update User Data</h1>

              <div className="contact-form form-container">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter your name"
                      autoComplete="off"
                      value={data.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      autoComplete="off"
                      value={data.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                  <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      autoComplete="off"
                      value={data.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminUpdate;
