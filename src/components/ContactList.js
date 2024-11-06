import React, { useState, useEffect } from "react";
import { fetchContacts } from "../api/contacts";
import Searchbar from "./Searchbar";

function ContactList() {
  const [contacts, setContacts] = useState([]); // State to store contacts
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchContacts(); // Fetch contacts from API
        setContacts(data); // Update contacts state with fetched data
      } catch (error) {
        setError(error); // Set error state if fetching fails
      } finally {
        setIsLoading(false); // Set loading state to false after fetching data
      }
    };
    fetchData(); // Call fetchData function
  }, []); // Empty dependency array to run effect only once on component mount

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); // Filter contacts based on search term

  return (
    <div className="container mt-4 mb-4">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="mb-3">
            <h3 className="card-title">
              Contact List{""}
              <span className="text-muted fw-normal ms-2">
                ({isLoading || error ? 0 : contacts.length}){" "}
                {/* Display number of contacts */}
              </span>
            </h3>
          </div>
        </div>
      </div>

      {/* Searchbar component */}
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {isLoading ? (
        <div className="text-center">Loading...</div> // Display loading message
      ) : error ? (
        <div className="text-danger">Error: {error.message}</div> // Display error message
      ) : (
        <div className="row">
          {filteredContacts.map((contact) => (
            <div className="col-xl-3 col-sm-6" key={contact.id}>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>

                    <div className="flex-1 ms-3">
                      <h5 className="font-size-16 mb-1">
                        <a href="#" className="text-dark">
                          {contact.name} {/* Display contact name */}
                        </a>
                      </h5>
                      <span className="badge badge-soft-success mb-0">
                        Username: {contact.username}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 pt-1">
                    <p className="text-muted mb-0">
                      <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>{" "}
                      {contact.phone}
                    </p>
                    <p className="text-muted mb-0 mt-2">
                      <i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>{" "}
                      {contact.email}
                    </p>
                    <p className="text-muted mb-0 mt-2">
                      <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"></i>{" "}
                      {contact.address.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactList;
