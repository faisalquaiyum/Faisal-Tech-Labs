import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);
  const { user, API } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting contact form:", contact); // Debugging line
    try {
      const response = await fetch(`${API}/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setContact({ username: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        toast.error(`Failed to send message: ${errorData.message}`);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* Hero images */}
            <div className="hero-image">
              <img
                src="/images/support.png"
                alt="hero-img"
                width="400"
                height="500"
              />
            </div>

            {/* hero content  */}
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Contact Us</h1>
              <p>
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                let us help you achieve your business goals.
              </p>

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
                      value={contact.username}
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
                      value={contact.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Enter your message"
                      autoComplete="off"
                      value={contact.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="section-map">
          <h2>Find Us Here</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.243414607569!2d77.26661707528633!3d28.5624524757031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3947f910501%3A0x17dc3e8ceb0a0a92!2sNFC%20Community%20Centre!5e0!3m2!1sen!2sin!4v1746111542877!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
    </>
  );
};

export default Contact;
