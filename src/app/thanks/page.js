// components/Thanks.js
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import Button from "@mui/material/Button";
import Link from "next/link";

const Thanks = () => {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-center py-20 px-4">
        <FaCheckCircle className="text-green-500 text-6xl mb-4" />
        <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          Your order has been placed successfully. We appreciate your business
          and hope you enjoy your meal!
        </p>
        <Link href="/">
          <Button
            variant="contained"
            className="bg-yellow text-white px-6 py-2"
          >
            Back to Home
          </Button>
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default Thanks;
