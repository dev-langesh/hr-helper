import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1500);
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
          {isSubmitted ? (
            <div className="flex items-center justify-center text-green-500 mb-4">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Message sent successfully!
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-semibold mb-6 text-center">
                Get in Touch
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="border-gray-400 border-solid border-2 p-2 w-full rounded-lg"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border-gray-400 border-solid border-2 p-2 w-full rounded-lg"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="border-gray-400 border-solid border-2 p-2 w-full rounded-lg"
                    placeholder="Enter your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex justify-center md:justify-end space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
                  >
                    Reset
                  </button>
                </div>
              </form>
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h2>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-blue-500 text-3xl mr-2" />
                  <span>123 Main Street, Anytown Covai 12345</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaPhone className="text-blue-500 text-3xl mr-2" />
                  <span>96745 27324</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-blue-500 text-3xl mr-2" />
                  <span>info@yourcompany.com</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
