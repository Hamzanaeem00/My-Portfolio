import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="mt-4">
        <span className="experiences  w-100 mb-0">CONTACT</span>
        <p className=" know-me w-100 text-center mb-0 my-2">
          Get In Touch
          <p
            className="  border-bottom border-3 border-success mx-auto"
            style={{ width: "80px" }}
          ></p>
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
