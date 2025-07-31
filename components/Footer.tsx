import {Button} from "@/components/ui/button"; // Import shadcn/ui Button component
import {CheckCircle} from "lucide-react"; // For the checkmark icon
import logo from "@/asset/Dark_logo.png";
import Image from "next/image";
import Link from "next/link";
import DialogCloseButton from "@/components/ContactDialog";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";

import {FaXTwitter} from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 border-b-8 border-bg-primary">
      <div className="container mx-auto px-4 py-8 grid gap-8 md:grid-cols-2 items-center">
        {/* Left Section */}
        <div className="space-y-4 text-center md:text-left">
          {/* Logo and Name */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="logo" width={150} height={70} />
            </Link>
          </div>
          {/* Contact Details */}
          <div className="space-y-2 text-gray-600">
            <p>
              <span className="font-semibold text-gray-800">Email:</span>{" "}
              digitaladroits@gmail.com
            </p>
            <p>
              <span className="font-semibold text-gray-800">Phone:</span>
              +91 79049 41113
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4 text-center md:text-right">
          <h2 className="text-xl font-light text-gray-800">
            Want to dominate the digital game? Adroits Digital crafts powerful
            marketing strategies to launch you to the top. Let&apos;s chat and
            unlock your brand&apos;s potential! Don&apos;t forget to follow us.
          </h2>
          {/* Call-to-Actions */}
          <div className="flex justify-center md:justify-end space-x-4">
            <DialogCloseButton buttonText="Make an enquiry" />
            {/* <Button className="bg-primary text-white ">Make an enquiry</Button> */}
            {/* <Button variant="outline">Watch Demo</Button> */}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 my-4" />

      {/* Platform Availability */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Available Platforms */}
        <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-600">
          <span>
            &copy; {new Date().getFullYear()} Adroits Digital. All rights
            reserved.
          </span>
        </div>
        {/* Platform Icons */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
          {/* Facebook */}
          <Link
            href="https://www.facebook.com/adroitsdigital/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center border border-gray-300 rounded-full bg-primary text-white hover:bg-primary hover:text-white"
          >
            <FaFacebook className="w-5 h-5" />
          </Link>

          {/* Twitter */}
          <Link
            href="https://twitter.com/AdroitsDigital"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center border border-gray-300 rounded-full bg-primary text-white hover:bg-primary hover:text-white"
          >
            <FaXTwitter className="w-5 h-5" />
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/adroitsdigital/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center border border-gray-300 rounded-full bg-primary text-white hover:bg-primary hover:text-white"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/company/adroits-digital/about/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center border border-gray-300 rounded-full bg-primary text-white hover:bg-primary hover:text-white"
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>

          {/* Pinterest */}
          <Link
            href="https://www.pinterest.com/adroitsdigital/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center border border-gray-300 rounded-full bg-primary text-white hover:bg-primary hover:text-white"
          >
            <FaPinterest className="w-5 h-5" />
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/7904941113/?text=Hi AdroitsDigital"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center border border-gray-300 rounded-full bg-primary text-white hover:bg-primary hover:text-white"
          >
            <FaWhatsapp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
