import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        
        {/* Logo and About */}
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="K.S. Sports Logo" />
          <p className="mt-6 text-sm">
            K.S. Sports is a trusted sports equipment shop providing top-quality bats, balls,
            kits, gloves, and accessories for cricket, football, and more. Whether you're a beginner
            or pro, we’ve got everything you need — now available online with WhatsApp support and delivery across India.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a className="hover:underline transition" href="/">Home</a></li>
              <li><a className="hover:underline transition" href="/about">About us</a></li>
              <li><a className="hover:underline transition" href="/contact">Contact us</a></li>
              <li><a className="hover:underline transition" href="/privacy">Privacy policy</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>📞 7082252531</p>
              <p>📧 jainkashish015@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
