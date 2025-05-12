import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const { authorizationToken, API } = useAuth();
  const [contactData, setContactData] = useState([]);

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.error("Error fetching contacts data:", error);
    }
  };

  // Function to delete contact by ID
  const deleteContactById = async (id) => {
    try{
      const response = await fetch(`${API}/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        toast.success("Contact deleted successfully!");
        getContactsData(); // Refresh the contact list after deletion
      }
      else {
        const errorData = await response.json();
        toast.error(`Failed to delete contact: ${errorData.message}`);
      }
    }
    catch (error) {
      console.log("Error deleting contact:", error);
    }
  }


  useEffect(() => {
    getContactsData();
  }, []);

  return (
<section className="admin-contacts">
  <h1>Admin Contacts</h1>
  <div className="container admin-users">
    <table className="contact-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Message</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contactData.map((curContactData, index) => (
          <tr key={index}>
            <td data-label="Username">{curContactData.username}</td>
            <td data-label="Email">{curContactData.email}</td>
            <td data-label="Message">{curContactData.message}</td>
            <td data-label="Actions">
              <button 
                className="btn" 
                onClick={() => deleteContactById(curContactData._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
  );
};

export default AdminContacts;
