
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-1">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Notes App</p>
        <a
          href="https://example.com"
          className="text-secondary hover:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Our Website <BsBoxArrowUpRight className="inline-block ml-1" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
