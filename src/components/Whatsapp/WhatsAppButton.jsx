import React, { useEffect } from "react";
import "./whatsapp.css";
import whatsapplogo from "../../assets/work_logo/WhatsApp.png";

const WhatsAppButton = () => {
  useEffect(() => {
    const handleScroll = () => {
      const whatsapp = document.querySelector(".whatsapp-float");
      if (!whatsapp) return;

      if (window.scrollY > 200) {
        whatsapp.classList.add("active");
      } else {
        whatsapp.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/919579970763?text=Hello%20Akash,%20we%20reviewed%20your%20profile%20and%20would%20like%20to%20connect%20with%20you%20for%20further%20discussion."
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={whatsapplogo}
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
