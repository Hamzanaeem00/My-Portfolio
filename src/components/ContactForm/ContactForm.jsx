import React, { useState } from "react";
import "./ContactForm.css";
import ContactInfo from "../ContactInfo/ContactInfo";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // console.log(formData);

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };
  const handleSubmit =  (e) => {
    e.preventDefault();
    const newData = fetch(
      "https://restaurant-data-5fe4f-default-rtdb.firebaseio.com/Contacts.json",

      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      console.log(newData);
      toast.success("Submitted Successfully");
    });
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <ContactInfo />
      </div>
      <div className="col-lg-8 col-md-6 col-sm-12">
        <h3>LETS CONNECT</h3>
        <form 
        onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <input
                className="col-lg-12 col-sm-12 col-md-12 con-input form-control mt-3"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12  ">
              <input
                className="col-lg-12 col-sm-12 col-md-12 con-input form-control mt-3"
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <textarea
              name="message"
              id=""
              onChange={handleChange}
              value={formData.message}
              className="w-100 form-control con-text"
              placeholder="Enter Your Message..."
            ></textarea>
          </div>
          <div className="text-center mt-4 send-btn ">
            <button
              type="submit"
              className="btn-hire"
              style={{ background: "#1BAA80", color: "#fff" }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
