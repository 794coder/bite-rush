// components/Contact.js
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Header />

      <main className="max-w-2xl mx-auto py-16 px-4 space-y-8">
        <h1 className="text-4xl font-bold text-center text-brown">Contact Us</h1>

        <div className="space-y-6 text-gray-700">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-red-500 text-xl" />
            <span>123 Burger Lane, Flavor Town, USA</span>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone className="text-red-500 text-xl" />
            <span>+1 (555) 123‑4567</span>
          </div>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-red-500 text-xl" />
            <span>support@biterush.com</span>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brown mb-2">Opening Hours</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Mon–Fri: 11:00 AM – 10:00 PM</li>
              <li>Sat: 12:00 PM – 11:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
