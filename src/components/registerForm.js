"use client"
import { useState } from "react";
import Link from "next/link";
// import { registerClient } from "@/utils/appwrite";


export default function Contact() {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      alert("Email is required.");
      return;
    }
    if (!name) {
      alert("name is required.");
      return;
    }
    if (!message) {
      alert("message is required.");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }


    if (!firstname) {
      alert("firstname is required.");
      return;
    }


    // registerClient(email, name, firstname, message)
    //   .then((account) => {
    //     alert(`Your Message is sent successfully`);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     alert("Error/A user with the same email exists.");
    //   });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="inputBox">
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            id="name"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Prenom</label>
          <input
            id="firstname"
            type="firstnamer"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>


      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          type="message"
          value={message}
           cols="30" rows="10" placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

      </div>

      <button type="submit" className="submit-btn">
        Envoyer
      </button>

    </form>
  );
}



